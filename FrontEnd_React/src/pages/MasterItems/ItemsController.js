import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem, fetchItemById, updateItem, fetchItems, deleteItem } from '../../services/apiService';
import * as signalR from "@microsoft/signalr";

export const useItemsController = () => {
    const [newItem, setNewItem] = useState({ name: "", description: "" });
    const [editItem, setEditItem] = useState({ name: "", description: "" });
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const [hubConnection, setHubConnection] = useState(null);
    
    useEffect(() => {
        if (id) {
            fetchItemById(id).then(setEditItem);
        }
    }, [id]);

    // Load danh sách items
    useEffect(() => {
        loadItems();
    }, []);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
          .withUrl("https://localhost:7031/itemHub") // Kết nối đến backend
          .withAutomaticReconnect()
          .build();
    
        newConnection
          .start()
          .then(() => console.log("Connected to WebSocket!"))
          .catch((err) => console.error("Connection failed: ", err));
    
        newConnection.on("ReceiveItemUpdate", (message) => {
          alert(`Thông báo mới: ${message}`);
        });
    
        setHubConnection(newConnection);
    
        return () => {
          if (hubConnection) {
            hubConnection.stop();
          }
        };
      }, []);

    const loadItems = async () => {
        const data = await fetchItems();
        setItems(data);
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        await addItem(newItem);
        if (hubConnection) {
            hubConnection.invoke("SendItemUpdate", "Sản phẩm mới đã được thêm!");
          }
        navigate("/");
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        await updateItem(editItem);
        if (hubConnection) {
            hubConnection.invoke("SendItemUpdate", "Sản phẩm mới đã được chỉnh sửa!");
          }
        navigate("/");
    };

    const handleDelete = async (itemId) => {
        await deleteItem(itemId);
        if (hubConnection) {
            hubConnection.invoke("SendItemUpdate", "Sản phẩm mới đã được xóa!");
          }
        loadItems();
    };

    const handleCreateInputChange = (field) => (e) => {
        setNewItem({ ...newItem, [field]: e.target.value });
    };

    const handleEditInputChange = (field) => (e) => {
        setEditItem({ ...editItem, [field]: e.target.value });
    };

    return {
        newItem,
        editItem,
        items,
        handleCreate,
        handleEdit,
        handleDelete,
        handleCreateInputChange,
        handleEditInputChange,
        loadItems
    };
};
