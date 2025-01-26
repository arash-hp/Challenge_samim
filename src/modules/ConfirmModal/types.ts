import { Product } from "../../types/general";

export interface ConfirmModalProps {
  openModal: boolean;
  toggleModal: () => void;
  item: Product;
}
