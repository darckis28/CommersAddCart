import { useContext } from "react";
import { ContextCart } from "../context/Context";
import remove from "/assets/images/icon-remove-item.svg";
const ListCar = ({ item }) => {
  const { dispatch } = useContext(ContextCart);
  const removeItem = () => {
    dispatch({ type: "REMOVE", payload: { name: item.name } });
  };
  return (
    <li className="flex justify-between items-center mb-4 border-b border-Rose-100 pb-4 ">
      <div>
        <h3 className="font-bold mb-2">{item.name}</h3>
        <span className="font-bold text-Red mr-5">{item.qty}x</span>
        <span className="text-Rose-300  mr-2">@${item.price}</span>
        <span className="text-Rose-500 font-medium">
          ${item.qty * item.price}
        </span>
      </div>
      <button
        onClick={removeItem}
        className="rounded-full p-1 border border-Rose-300">
        <img src={remove} alt="button remove" />
      </button>
    </li>
  );
};
export default ListCar;
