import ButtonAddCar from "./Buttons/ButtonAddCar";
import { formatToDollars } from "../utils/formatedCash";
import { useState, useContext } from "react";
import { ContextCart } from "../context/Context";
const CardProduct = ({ name, category, price, image }) => {
  const { mobile, desktop, tablet } = image;
  const { state, dispatch } = useContext(ContextCart);

  const handelClick = () => {
    const product = { name, price, image: image.thumbnail };
    dispatch({ type: "ADD", payload: product });
  };
  const item = state.find((item) => item.name === name);

  return (
    <li className="md:max-w-64">
      <div className="w-full mb-5">
        <img
          src={mobile}
          alt={name}
          className={`${
            item?.qty > 0 && "border-2 border-Red"
          } sm:hidden  rounded-lg`}
        />
        <img
          src={tablet}
          alt={name}
          className={`${
            item?.qty > 0 && "border-2 border-Red"
          } hidden sm:block md:hidden w-full  rounded-lg`}
        />
        <img
          src={desktop}
          alt={name}
          className={`${
            item?.qty > 0 && "border-2 border-Red"
          } hidden md:block  rounded-lg`}
        />
        <ButtonAddCar
          handelClick={handelClick}
          item={item}
          dispatch={dispatch}
        />
      </div>
      <span className="text-sm text-Rose-500">{category}</span>
      <h2 className="text-Rose-900 font-semibold">{name}</h2>
      <span className="text-Red font-bold">{formatToDollars(price)}</span>
    </li>
  );
};
export default CardProduct;
