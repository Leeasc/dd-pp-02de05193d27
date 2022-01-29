import React, { useEffect } from "react";
import classNames from "classnames";
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs';


export interface ItemProps {
  currency: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
  add?: React.MouseEventHandler<HTMLElement>;
  remove?: React.MouseEventHandler<HTMLElement>;
}

const Item: React.FC<ItemProps> = ({
  currency,
  name,
  price,
  quantity,
  add,
  remove,
}) => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  useEffect(() => {
    if (quantity < 1) setIsDisabled(true);
    else setIsDisabled(false);
  }, [quantity]);
  return (

    <React.Fragment>
      <div
        className={classNames(
          'bg-cover bg-center bg-no-repeat h-48 lg:h-80 rounded-t-md bg-placeholder'
        )}
      />
      <div className="flex flex-col gap-y-4 p-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div>
          {price} {currency}
        </div>
        <div className="flex self-end gap-2 items-center">
          <button
            disabled={isDisabled}
            className={classNames(isDisabled ? 'text-slate-200' : 'text-cyan-400')}
            onClick={remove}
          >
            <BsDashCircleFill/>
          </button>
          <div className='text-lg'> {quantity}</div>
          <button className='text-cyan-500' onClick={add}>
            <BsPlusCircleFill/>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
