import * as React from "react";
import { useState } from "react";
import "./Users.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import initialRows from './lib/data/users.json'



function Users() {
  // ユーザーのリストとフォームの状態を管理する
  const [rows, setRows] = useState(initialRows);
  const [showForm, setShowForm] = useState(false); // フォームを表示するかどうか
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // フォーム送信時の処理
  const handleSubmit = (event) => {
    event.preventDefault(); // ページリロードを防ぐ
    const newUser = {firstName, lastName, email};
    setRows([...rows, newUser]); // 新しいユーザーを追
    setShowForm(false); // フォームを閉じる
    setFirstName(""); // フォームをリセット
    setLastName(""); // フォームをリセット
    setEmail(""); // フォームをリセット
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "Add"}
      </Button>

  {/* フォームが表示されている場合のみ表示 */}
  {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      )}


      <TableContainer
        component={Paper}
        style={{ width: "80%", margin: "0 auto" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell sx={{ flex: 1 }} align="left">
                First Name
              </TableCell>
              <TableCell sx={{ flex: 1 }} align="left">
                Last Name
              </TableCell>
              <TableCell sx={{ flex: 1 }} align="left">
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ flex: 1 }} component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell sx={{ flex: 1 }} align="left">
                  {row.lastName}
                </TableCell>
                <TableCell sx={{ flex: 1 }} align="left">
                  {row.email}
                </TableCell>
                <TableCell sx={{ flex: 1 }} align="left">
                  {row.carbs}
                </TableCell>
                <TableCell sx={{ flex: 1 }} align="left">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
