import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import './TableDisplay.css';
import { fontGrid } from "@mui/material/styles/cssUtils";


const columns = [ // a list of columns to be presented
  { id: "amount", label: "Amount", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "otherParty", label: "OtherParty", minWidth: 170 },
  { id: "particulars", label: "Particulars", minWidth: 100 },
  { id: "analysisCode", label: "AnalysisCode", minWidth: 170 },
  { id: "reference", label: "Reference", minWidth: 100 },
  { id: "serialNumber", label: "SerialNumber", minWidth: 170 },
  { id: "branch", label: "Branch", minWidth: 100 },
  { id: "note", label: "Note", minWidth: 100 },
];

const TableDisplay= ({ account, addToAccumulatedAmount }) => {

  const [page, setPage] = useState(0); //page states
  const [rowsPerPage, setRowsPerPage] = useState(10); //sets the number of rows to be shown per page which is set as 10

  

  const handleChangePage = (event, newPage) => { 
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (amount) => {
    addToAccumulatedAmount(amount)
  };

  return (

    <Paper sx={{ width: "100%" }}>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={account.transactions && account.transactions.length >0 ? account.transactions.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left-center" colSpan={10} style={{ fontWeight: "bold", fontSize: 20, color: "navy" }}>
                MATCHED
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, fontWeight: "bold", fontSize: 16, color: "navy"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {account.transactions && account.transactions.length > 0 ?
          <TableBody>
            {account.transactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow onClick={() => handleRowClick(row.amount)} hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody> : <TableBody></TableBody>
}
        </Table>
      </TableContainer>
    </Paper>
  );

}
export default TableDisplay;
