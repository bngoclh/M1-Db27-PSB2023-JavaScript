import { Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

function Matrix4() {
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
                colSpan={3}
                sx={{ textAlign: "center", borderLeft: 1, borderBottom: 1 }}
              >
                Joueur 2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center", border: 1 }}>C</TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "none", border: 1 }}
              >
                D
              </TableCell>
              <TableCell sx={{ textAlign: "center", border: 1 }}>E</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} sx={{ textAlign: "center" }}>
                Joueur 1
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>A</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  7 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  3
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  3 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  1
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  0 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  5
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>B</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  5 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  1
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="#435" display="inline">
                  5 ,{" "}
                </Typography>
                <Typography color="#435" display="inline">
                  3
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography color="" display="inline">
                  2 ,{" "}
                </Typography>
                <Typography color="" display="inline">
                  2
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Matrix4;
