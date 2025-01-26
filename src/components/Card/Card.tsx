import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Button,
  Grid2,
  Card as MUICard,
  Rating,
  Typography,
} from "@mui/material";
import { FC, memo, useCallback, useState } from "react";
import { ConfirmModal } from "../../modules";
import { useBasketContext } from "../../modules/Basket/context/BasketContext";
import { Product } from "../../types/general";
import { styles } from "./styles";
interface CardProps {
  item: Product;
}

export const Card: FC<CardProps> = memo(({ item }) => {
  const { basketList } = useBasketContext();
  const [open, setOpen] = useState(false);
  const isSelected = basketList?.find((obj) => obj.id == item.id);

  const onAdd = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <MUICard sx={styles.root}>
        <Grid2 sx={styles.content}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box component="img" src={`${item.image}`} sx={styles.image} />
          </Box>

          <Box sx={styles.headerCard}>
            <Typography gutterBottom variant="h6" sx={styles.title}>
              {item.title}
            </Typography>
          </Box>

          <Rating name="read-only" value={item.rating.rate} readOnly />

          <Typography gutterBottom variant="h6" sx={styles.rate}>
            {item.rating.count >= 1 ? "In Stock" : "Out of Stock"}
          </Typography>

          <Typography variant="h5" sx={styles.price}>
            ${item.price}
          </Typography>
          <Box>
            <Button
              onClick={onAdd}
              variant="contained"
              fullWidth
              size="small"
              color="primary"
              endIcon={<AddShoppingCartIcon />}
              disabled={!!isSelected}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid2>
      </MUICard>
      <ConfirmModal openModal={open} toggleModal={onAdd} item={item} />
    </>
  );
});
