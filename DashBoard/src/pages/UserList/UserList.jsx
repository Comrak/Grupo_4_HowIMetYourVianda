import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Avatar } from "@mui/material";


const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "image",
    headerName: "image",
    width: 100,
    renderCell: (params) => {
      
      return (
        <div>
          <Avatar
            src={`http://localhost:3200/img/users/${params.row.avatar}`}
            alt="user"
            style={{ width: "60px", height: "60px" , borderRadius: "50%" }}
          />
        </div>
      );
    },
  },

  { field: "fullName", headerName: "fullName", width: 100 },
  { field: "email", headerName: "email", width: 300 },
  { field: "mobilePhone", headerName: "mobilePhone", width: 150 },
  { field: "birthDate", headerName: "birthDate", width: 100 },
  { field: "role_id", headerName: "role", width: 50 },
];

export default function UserList() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/api/users")
      .then((data) => data.json())
      .then((data) => setTableData(data.data));
  }, []);

  const row = tableData

  return (
    <div
      style={{
        height: 700,
        width: "100%",
        marginLeft: "10px",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h4" component="h3" sx={{ marginBottom: "20px" }}>
        {" "}
        Lista de Usuarios{" "}
      </Typography>
      <DataGrid rows={row} columns={columns} pageSize={5}  />
    </div>
  );
}
