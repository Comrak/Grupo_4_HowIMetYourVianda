import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'fullName', headerName: 'fullName', width: 100 },
  { field: 'email', headerName: 'email', width: 300 },
  { field: 'mobilePhone', headerName: 'mobilePhone', width: 150 },
  { field: 'birthDate', headerName: 'birthDate', width: 100 },
  { field: 'role_id', headerName: 'role', width: 50 },
]

export default function UserList () {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/users")
      .then((data) => data.json())
      .then((data) => setTableData(data.data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' , marginLeft:'10px'}}>
      <Typography variant='h4' component='h3' sx={{marginBottom:'20px'}}> Lista de Usuarios </Typography>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
      />
    </div>
  )
}

