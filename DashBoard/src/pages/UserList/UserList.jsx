import React, { useState, useEffect } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";

export default function UserList() {
  // creating component states
  const [data, setData] = useState([]);

  // fetching data from the api
  useEffect(() => {
    const getUserData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data.data);
        console.log(data);
    };
    getUserData();
  }, []);

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "name", headerName: "name", width: 130 },
//     { field: "username", headerName: "username", width: 130 },
//     { field: "email", headerName: "email", type: "number", width: 90 },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//     },
//   ];

  const rows = [data];

  return (
    <div className="userList">
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
      Data to Show
    </div>
  );
}
