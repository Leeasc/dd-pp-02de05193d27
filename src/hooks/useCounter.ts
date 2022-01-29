import { useState } from "react";
import { initialValues } from "../utils/dataUtils";
import { ItemProps } from "../components/Item";

const useCounter = () => {
  const [items, setItems] = useState<ItemProps[]>(initialValues);
  const [totalQuantity, setTotalQuantity] = useState<number>();

  const countAll = (items: ItemProps[]) => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalQuantity(totalItemCount);
  };

  const handleAdd = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    countAll(newItems);
  };

  const handleRemove = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    countAll(newItems);
  };

  return { items, totalQuantity, handleAdd, handleRemove };
};

export default useCounter;
