import { Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

function MatrixEx() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 500,
      }}
    >
      <TableContainer sx={{ border: 2, borderRadius: 1 }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              border: 1,
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} colSpan={2} />
              <TableCell
                colSpan={2}
                sx={{ textAlign: "center", borderLeft: 1, borderBottom: 1 }}
              >
                Joueur 1
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center", border: 1 }}>
                Ne pas avouer
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "none", border: 1 }}
              >
                Avouer
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} sx={{ textAlign: "center" }}>
                Joueur 2
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>Ne pas avouer</TableCell>
              <TableCell sx={{ textAlign: "center" }}>-2 , -2</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography display="inline">-10 , </Typography>
                <Typography color="#00f" display="inline">
                  -1
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Avouer</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="#f00" display="inline">
                  -1{" "}
                </Typography>
                <Typography display="inline">, -10</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="#f00" display="inline">
                  -5{" "}
                </Typography>
                ,{" "}
                <Typography color="#00f" display="inline">
                  -5
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MatrixEx;
