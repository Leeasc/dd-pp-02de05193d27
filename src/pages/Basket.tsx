import React from "react";
import { ItemProps } from "../components/Item";
import { useNavigate } from "react-router-dom";
import { FaSadCry } from 'react-icons/fa';

interface BasketProps {
  items: ItemProps[];
}
const Basket: React.FC<BasketProps> = ({ items }) => {
  const navigate = useNavigate();

  const totalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const currency = "CZK";

  return (
    <div className="lg:w-4/5 lg:lg:mx-auto mx-4">
      <h2 className="text-2xl font-boldt text-center my-12">Přehled položek</h2>
      {totalPrice < 1 ? (
        <div className='text-center'>Zatím nemáte v košíku žádné proukty<FaSadCry className='w-24 h-24 fill-blue-400 mx-auto my-6'/></div>
      ) : (
        <>
          <div className="grid grid-cols-3 items-center justify-between gap-12 text-slate-400">
            <div>Název produktu</div>
            <div className="text-center">Množství</div>
            <div className="text-right">Cena</div>
          </div>
          <div className="border-t border-b border-slate-300 my-4 py-4">
            {items
              .filter(({ quantity }) => quantity > 0)
              .map(({ name, price, quantity, currency, id }) => (
                <div
                  key={id}
                  className="grid grid-cols-3 items-center justify-between gap-12"
                >
                  <h3>{name}</h3>
                  <div className="text-center">{quantity}</div>
                  <div className="text-right">
                    {quantity * price} {currency}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      <div className="flex justify-between items-center">
        <button
          className="bg-slate-300 rounded-md my-6 px-4 py-1 text-xs hover:bg-slate-400"
          onClick={() => navigate(-1)}
        >
          Zpět
        </button>
        <div className="bg-blue-500 rounded-md my-6 px-4 py-1 w-max font-bold text-white">
          <span className="text-xs"> Celková cena: </span>
          {totalPrice} {currency}
        </div>{" "}
      </div>
    </div>
  );
};

export default Basket;
