// import { useState, useEffect } from "react";
// import itemService from "../services/apiService";
// import * as signalR from "@microsoft/signalr";

// const useCreateLogic = () => {
//   const [formData, setFormData] = useState({ name: "", price: "" });
//   const [hubConnection, setHubConnection] = useState(null);

//   useEffect(() => {
//     const newConnection = new signalR.HubConnectionBuilder()
//       .withUrl("http://localhost:7031/ItemHub") // Kết nối đến backend
//       .withAutomaticReconnect()
//       .build();

//     newConnection
//       .start()
//       .then(() => console.log("Connected to WebSocket!"))
//       .catch((err) => console.error("Connection failed: ", err));

//     newConnection.on("ReceiveItemUpdate", (message) => {
//       alert(`Thông báo mới: ${message}`);
//     });

//     setHubConnection(newConnection);

//     return () => {
//       if (hubConnection) {
//         hubConnection.stop();
//       }
//     };
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await itemService.createItem(formData);
//       if (hubConnection) {
//         hubConnection.invoke("SendItemUpdate", "Sản phẩm mới đã được thêm!");
//       }
//       setFormData({ name: "", price: "" });
//     } catch (error) {
//       console.error("Lỗi khi thêm sản phẩm:", error);
//     }
//   };

//   return { formData, handleChange, handleSubmit };
// };

// export default useCreateLogic;
