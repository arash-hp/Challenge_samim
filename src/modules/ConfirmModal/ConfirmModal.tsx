import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useBasketContext } from "../Basket/context/BasketContext";
import { styles } from "./styles";
import { ConfirmModalProps } from "./types";

export const ConfirmModal: FC<ConfirmModalProps> = memo(
  ({ openModal, toggleModal, item }) => {
    const { addToBasket } = useBasketContext();
    const onAdd = useCallback(() => {
      toggleModal();
      addToBasket(item);
    }, [addToBasket, item, toggleModal]);
    return (
      <Modal open={openModal} onClose={toggleModal}>
        <Box component={Paper} sx={styles.modal}>
          <Box textAlign="end">
            <Typography>Add to your basket and continue shopping?</Typography>
            <Button
              onClick={onAdd}
              size="small"
              variant="contained"
              sx={{ mt: 4 }}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
);
