import { useContext } from "react";
import { ContextCart } from "../context/Context";
import orderConfirm from "/assets/images/icon-order-confirmed.svg";
import { formatToDollars } from "../utils/formatedCash";
import ButtonConfirm from "./Buttons/ButtonConfirm";

const Modal = () => {
  const { state, total, showModal, dispatch, setShowModal } =
    useContext(ContextCart);
  function handelReset() {
    dispatch({ type: "RESET" });
    setShowModal(false);
    sendWhatsAppMessage();
  }
  function sendWhatsAppMessage() {
    const message = `Order Details:\n\n${state
      .map(
        (item) =>
          `${item.name} x${item.qty} - ${formatToDollars(
            item.price * item.qty
          )}`
      )
      .join("\n")}\n\nTotal: ${formatToDollars(total)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <>
      {showModal && (
        <div className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-80 grid place-items-center">
          <div className="bg-white p-5 sm:min-w-[450px]">
            <img
              src={orderConfirm}
              alt="orderconfirm"
              className="w-8 aspect-square object-cover"
            />
            <h2 className="text-3xl font-bold mt-5 mb-3">Order Confirmed</h2>
            <p className="text-sm text-Rose-400 mb-5">
              We hope you enjot youe food!!
            </p>
            <div className="bg-Rose-50 p-5 rounded-sm mb-5">
              <ul className="mb-4 max-h-64 overflow-y-scroll">
                {state.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between mb-2 items-center border-b border-Rose-100 pb-3">
                    <div className="flex gap-2">
                      <img src={item.image} alt={item.name} className="w-12" />
                      <div className="flex flex-col">
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <div>
                          <span className="mr-2 text-sm font-bold text-Red">
                            {item.qty}x
                          </span>
                          <span className=" text-sm text-Rose-400">
                            @{formatToDollars(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold">
                      {formatToDollars(item.price * item.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <p>Order Total</p>
                <span className="font-bold text-xl">
                  {" "}
                  {formatToDollars(total)}
                </span>
              </div>
            </div>
            <ButtonConfirm funct={handelReset}>Start New Order</ButtonConfirm>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
