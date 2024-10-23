import { createContext, useReducer, useState } from "react";
export const ContextCart = createContext(null);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(stateProducts, []);
  const [showModal, setShowModal] = useState(false);

  const total = state.reduce((acc, item) => acc + item.price * item.qty, 0);

  const totalItems = state.reduce((acc, item) => acc + item.qty, 0);
  function stateProducts(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, { ...action.payload, qty: 1 }];
      case "REMOVE":
        return state.filter((c) => c.name !== action.payload.name);
      case "AUMENT":
        return state.map((c) =>
          c.name === action.payload.name ? { ...c, qty: c.qty + 1 } : c
        );
      case "DECREMENT":
        return state.map((c) =>
          c.name === action.payload.name ? { ...c, qty: c.qty - 1 } : c
        );
      case "RESET":
        return [];
    }
  }

  return (
    <ContextCart.Provider
      value={{ state, dispatch, total, showModal, setShowModal, totalItems }}>
      {children}
    </ContextCart.Provider>
  );
};
