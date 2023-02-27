import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography , Avatar} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID' },
  {
    field: "image",
    headerName: "image",
    width: 100,
    renderCell: (params) => {
      console.log(params.row.avatar)
      return (
        <div>
          <Avatar
            src={`http://localhost:3200/${params.row.image}`}
            alt="user"
            style={{ width: "60px", height: "60px" , borderRadius: "50%" }}
          />
        </div>
      );
    },
  },
  { field: 'name', headerName: 'name', width: 100 },
  { field: 'description', headerName: 'description', width: 300 },
  { field: 'tags', headerName: 'tags', width: 150 }

]

export default function ProductList () {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/products")
      .then((data) => data.json())
      .then((data) => setTableData(data.data))

  }, [])

  console.log(tableData)

  return (
   
    <div style={{ height: 700, width: '100%' , marginLeft:'10px', marginTop:'2rem'}}>
    
      <Typography variant='h4' component='h3' sx={{marginBottom:'20px'}}> Lista de Productos </Typography>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
      />
    
    </div>
  )
}
