import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography , Paper} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID' },
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
   
    <div style={{ height: 700, width: '100%' , marginLeft:'10px'}}>
    
      <Typography variant='h4' component='h3' sx={{marginBottom:'20px'}}> Lista de Productos </Typography>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
      />
    
    </div>
  )
}
