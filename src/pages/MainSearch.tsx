import React from "react";
import Item, { ItemProps } from "../components/Item";
import useCounter from '../hooks/useCounter';

interface MainSearchProps {
  items: ItemProps[];
}

const MainSearch: React.FC<MainSearchProps> = ({
  items,
}) => {
  const {handleAdd, handleRemove} = useCounter();

  const [itemName, setItemName] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;

    if (input !== "") {
      const results = items.filter((i) => {
        return i.name.toLowerCase().includes(input.toLowerCase());
      });
      setFilteredItems(results);
    } else {
      setFilteredItems(items);
    }
    setItemName(input);
  };

  return (
      <div className="flex flex-col flex-grow gap-8 py-5 lg:w-4/5 lg:lg:mx-auto mx-4">
        <input
          type="search"
          value={itemName}
          onChange={handleFilter}
          className="w-52 self-end rounded-sm outline outline-offset-2 outline-blue-300 px-1"
          placeholder="Filtrovat položky"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 items-center">
          {filteredItems.map(({ name, id, price, currency, quantity }) => (
            <div key={id} className="rounded-b-md bg-white drop-shadow-xl">
              <Item
                currency={currency}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                add={() => handleAdd(id-1)}
                remove={() => handleRemove(id-1)}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default MainSearch;
