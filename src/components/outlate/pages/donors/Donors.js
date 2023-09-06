import { TablePagination } from '@mui/material';
import React from 'react'
import './Donors.css'
import AquaColor from '../../../../assets/Photos/Aqua-Solid-Color.png'
import Arsenic from '../../../../assets/Photos/Arsenic-Solid-Color.png'
import BlueColor from '../../../../assets/Photos/Blue-Solid-Color.png'
import CherryColor from '../../../../assets/Photos/Cherry-color.png'
import CopperColor from '../../../../assets/Photos/Copper-Crayola-Solid-Color.png'
import CyanColor from '../../../../assets/Photos/Cyan-Process-Solid-Color.png'
import DarkPastal from '../../../../assets/Photos/Dark-Pastel-Green-Solid-Color.png'
import EnglishGreen from '../../../../assets/Photos/English-Green-Solid-Color.png'
import GoldMetallic from '../../../../assets/Photos/Gold-Metallic-Solid-Color.png'
import SpiroDisco from '../../../../assets/Photos/Spiro-Disco-Ball-Solid-Color.png'

const sampleData = [
  {
    id: 1,
    UserId: "1",
    Title: "AquaColor",
    URL: "#00FFFF",
    Images: AquaColor,
  },
  {
    id: 2,
    UserId: "2",
    Title: "Arsenic",
    URL: "#3b444b",
    Images: Arsenic,

  },
  {
    id: 3,
    UserId: "3",
    Title: "BlueColor",
    URL: "#5885AF",
    Images: BlueColor,
  },
  {
    id: 4,
    UserId: "4",
    Title: "CherryColor",
    URL: "#C70039",
    Images: CherryColor,
  },
  {
    id: 5,
    UserId: "5",
    Title: "CopperColor",
    URL: "#FF9980",
    Images: CopperColor,
  },
  {
    id: 6,
    UserId: "6",
    Title: "CyanColor",
    URL: "#00b7eb",
    Images: CyanColor,
  },
  {
    id: 7,
    UserId: "7",
    Title: "DarkPastal",
    URL: "#03c03c",
    Images: DarkPastal,
  },
  {
    id: 8,
    UserId: "8",
    Title: "EnglishGreen",
    URL: "#1b4d3f",
    Images: EnglishGreen,
  },
  {
    id: 9,
    UserId: "9",
    Title: "GoldMetallic",
    URL: "#d4af37",
    Images: GoldMetallic,
  },
  {
    id: 10,
    UserId: "10",
    Title: "SpiroDisco",
    URL: "#0fc0fc",
    Images:SpiroDisco,
  },
];

const Donors = () => {


  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className='main-table-div'>
        <p style={{fontSize:'16px'}}>Donors</p>
        <p style={{fontSize:'16px'}}>Donors Data</p>
        <table>
          <tr className='table-heding'>
            <th>User Id</th>
            <th>Title</th>
            <th>URL</th>
            <th>Images</th>
          </tr>
          {sampleData.map((item) => (
            <tr>
              <td>{item.UserId}</td>
              <td>{item.Title}</td>
              <td>{item.URL}</td>
              <img src={item.Images} className='image_section' />
            </tr>
          ))

          }
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
    </>
  )
}

export default Donors
