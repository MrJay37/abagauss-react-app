import * as React from 'react';
import './Users.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, lastname, email) {
  return { name, lastname, email };
}

const rows = [
  createData('Admin'),
  createData('Manager'),

]

function Roles () {
  return (
    <TableContainer  
    component={Paper}
    style={{width:'80%', margin: '0 auto'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell sx={{flex:1}} align="left">Name</TableCell>
            <TableCell sx={{flex:1}} align="left">Last Name</TableCell>
            <TableCell sx={{flex:1}} align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{flex:1}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{flex:1}} align="left">{row.lastname}</TableCell>
              <TableCell sx={{flex:1}} align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default  Roles