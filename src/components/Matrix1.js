import { Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

function Matrix1() {
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
                Gauche
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "none", border: 1 }}
              >
                Droite
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} sx={{ textAlign: "center" }}>
                Joueur 2
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>Haut</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  4 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  3
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  4 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  5
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Bas</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  5 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  3
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>0 , 0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Matrix1;
