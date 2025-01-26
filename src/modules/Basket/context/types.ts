import { ReactNode } from "react";
import { Product } from "../../../types/general";

export interface BasketContextType {
  addToBasket: (item: Product) => void;
  basketList: Product[];
  deleteItem: (id: number) => void;
  openModal: boolean;
  toggleModal: () => void;
}

export interface BasketContextProviderProps {
  children: ReactNode;
}
