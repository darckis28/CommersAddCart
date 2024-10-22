import addCard from "/assets/images/icon-add-to-cart.svg";
import iconAdd from "/assets/images/icon-increment-quantity.svg";
import iconRest from "/assets/images/icon-decrement-quantity.svg";

import { useState } from "react";
const ButtonAddCar = () => {
  const [count, setCount] = useState(1);
  const [onBuy, setOnBuy] = useState(true);

  const handelDecrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <>
      {onBuy ? (
        <button className="bottom-0 left-0 right-0 py-2 px-3 rounded-3xl -translate-y-5 mx-auto block font-semibold text-sm text-white hover:contrast-75bottom-0 bg-Red">
          <div className="flex items-center h-full w-full gap-8">
            <span
              className="w-5 h-5 text-center border border-Rose-50 rounded-full grid place-items-center"
              onClick={handelDecrement}>
              <img src={iconRest} alt="" />
            </span>
            <span className="font-thin">{count}</span>
            <span className="w-5 h-5 text-center border border-Rose-50 rounded-full grid place-items-center">
              <img src={iconAdd} alt="" onClick={() => setCount(count + 1)} />
            </span>
          </div>
        </button>
      ) : (
        <button className=" bottom-0 left-0 right-0 py-2 px-5 bg-Rose-50 rounded-3xl border border-Rose-900 -translate-y-5 mx-auto block font-semibold text-sm hover:contrast-75 ">
          <img src={addCard} alt="addCard" className="inline-block mr-2" />
          Add to Cart
        </button>
      )}
    </>
  );
};
export default ButtonAddCar;
