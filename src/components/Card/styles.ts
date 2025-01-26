import { SxRecord } from "../../types/general";
export const styles: SxRecord<
  "root" | "content" | "image" | "headerCard" | "title" | "rate" | "price"
> = {
  root: () => ({
    width: 260,
  }),
  content: () => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    gap: "8px",
  }),
  image: () => ({
    width: "200px",
    height: "300px",
    objectFit: "contain",
  }),
  headerCard: () => ({
    height: "80px",
  }),
  title: () => ({
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    lineHeight: "1.2",
  }),
  rate: () => ({
    fontWeight: "bold",
    margin: 0,
  }),
  price: () => ({
    color: "text.secondary",
  }),
};
