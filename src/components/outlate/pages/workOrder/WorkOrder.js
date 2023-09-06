import React, { useEffect, useState } from 'react'
import './WorkOrder.css'
import TablePagination from '@mui/material/TablePagination';
import PopUp from './popup/PopUp';

const sampleData = [
  {
    id: 1,
    donor: "John Doe",
    panels: "Panel A",
    barcodes: "BC123",
    sources: "Self pay",
    status: "Active",
  },
  {
    id: 2,
    donor: "Jane Smith",
    panels: "Panel B",
    barcodes: "BC456",
    sources: "Self pay",
    status: "Inactive",
  },
  {
    id: 3,
    donor: "Bob Johnson",
    panels: "Panel C",
    barcodes: "BC789",
    sources: "Self pay",
    status: "Active",
  },
];
const WorkOrder = () => {

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const storag = localStorage.getItem("sampleData")
    if (storag) {
      setData([...JSON.parse(storag)]);
    } else {
      localStorage.setItem("sampleData", JSON.stringify(sampleData))

    }
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSaveData = (newData) => {
    const storageList = localStorage.getItem("sampleData")
    const parseValue = JSON.parse(storageList)
    const updateValue = [...parseValue, newData]
    localStorage.setItem("sampleData", JSON.stringify(updateValue))
    setData([...data, newData]);
    console.log(newData);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleDelete = (selectedIndex) => {
    const updatedData = data.filter((item, index) => index !== selectedIndex);
    localStorage.setItem("sampleData", JSON.stringify(updatedData))
    setData(updatedData);
    // e.preventDefault();
  };
  const handleEdit = (item) => {

    const foundItem = sampleData.find((Item) => Item.id === item.id);

    if (foundItem) {
      setEditingItem(foundItem);
    } else {
      console.error("Item not found:", item);
    }
  };

  return (
    <div className='main-table-div'>
      <h3>Work Order</h3>
      <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
        <div className='addCategoryButton'>
          <PopUp open={open} setOpen={setOpen} onSave={handleSaveData} />
        </div>
      </div>
      <button className='order-button' onClick={handleOpen}>Create Order</button>
      <table>
        <tr className='table-heding'>
          <th>DONAR</th>
          <th>PANELS</th>
          <th>BARCODES</th>
          <th>SOURCES</th>
          <th>STATUS</th>
          <th>Action</th>
        </tr>
        {data.map((item, index) => (
          <tr>
            <td>{item.donor}</td>
            <td>{item.panels}</td>
            <td>{item.barcodes}</td>
            <td>{item.sources}</td>
            <td>{item.status}</td>
            <td className='icons'>
              <img
                style={{ cursor: 'pointer' }}
                onClick={() => handleEdit(item)}
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1" />
              <img
                style={{ cursor: 'pointer', marginLeft: '8px' }}
                onClick={() => handleDelete(index)}
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1" />
            </td>
          </tr>
        ))}
      </table>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </div>
  )
}

export default WorkOrder
