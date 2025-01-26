import { FC, useCallback, useState } from "react";
import { Product } from "../../../types/general";
import { BasketContext } from "./BasketContext";
import { BasketContextProviderProps } from "./types";

// ===========================P R O V I D E R==========================================*
export const BasketContextProvider: FC<BasketContextProviderProps> = ({
  children,
}) => {
  const [basketList, setBasketList] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const addToBasket = useCallback((item: Product) => {
    setBasketList((prev) => [...prev, item]);
  }, []);

  const deleteItem = useCallback(
    (id: number) => {
      console.log(id);
      const updateList = basketList.filter((item) => item.id !== id);
      setBasketList(updateList);
    },
    [basketList]
  );

  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const value = {
    addToBasket,
    basketList,
    deleteItem,
    openModal,
    toggleModal,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
