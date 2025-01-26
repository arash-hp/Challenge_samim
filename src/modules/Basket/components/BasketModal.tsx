import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useBasketContext } from "../context/BasketContext";
import { styles } from "./styles";

export const BasketModal = () => {
  const { toggleModal, openModal } = useBasketContext();

  return (
    <Modal
      open={openModal}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <SpanningTable />
      </Box>
    </Modal>
  );
};

export default function SpanningTable() {
  const { basketList, deleteItem } = useBasketContext();

  const onDelete = (id: number) => {
    return () => {
      deleteItem(id);
    };
  };
  return (
    <>
      {!basketList?.length ? (
        <Box component={Paper} p={2}>
          <Typography>
            Your basket is currently empty. Start adding items to explore our
            amazing products!
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">category</TableCell>
                <TableCell align="center">price</TableCell>
                <TableCell align="center">action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basketList?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={onDelete(row.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
