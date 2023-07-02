import { Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

function MatrixE2() {
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
                <Typography color="#33f" display="inline">
                  Joueur 1
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center", border: 1 }}>
                Pile
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "none", border: 1 }}
              >
                Face
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} sx={{ textAlign: "center" }}>
                <Typography color="#f00" display="inline">
                  Joueur 2
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>Pile</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  2 ,{" "}
                </Typography>
                <Typography color="#33f" display="inline">
                  2
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="#f00" display="inline">
                  2 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  1
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Face</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="#f00" display="inline">
                  3 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  2
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  1 ,{" "}
                </Typography>
                <Typography color="#33f" display="inline">
                  5
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MatrixE2;
