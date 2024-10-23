import ListCar from "./ListCar";
import carbonNeutral from "/assets/images/icon-carbon-neutral.svg";
import pastel from "/assets/images/illustration-empty-cart.svg";

import ButtonConfirm from "./Buttons/ButtonConfirm";
import { useContext } from "react";
import { ContextCart } from "../context/Context";
const BoxCard = () => {
  const { state, total, setShowModal, totalItems } = useContext(ContextCart);
  const handelConfirm = () => setShowModal(true);

  return (
    <div className="bg-white px-6 py-5 rounded-md md:w-[850px]:">
      <h2 className="text-2xl font-bold mb-2  text-Red">
        You Card( <span>{totalItems}</span> )
      </h2>
      {state?.length === 0 ? (
        <div className="py-8">
          <img src={pastel} alt="" className="mx-auto" />
          <p className="text-center font-semibold text-Rose-500 text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {state.map((item, idx) => (
              <ListCar key={idx} item={item} />
            ))}
          </ul>
          <div className="flex justify-between items-center py-4">
            <p>Order Total</p>
            <span className="font-bold text-3xl">${total}</span>
          </div>
          <div className="bg-Rose-100 p-4 mb-5 rounded-md flex items-center gap-2">
            <img src={carbonNeutral} alt="" />
            <p>
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <ButtonConfirm funct={handelConfirm}>Confirm</ButtonConfirm>
        </div>
      )}
    </div>
  );
};
export default BoxCard;
