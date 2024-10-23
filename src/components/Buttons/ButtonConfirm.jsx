const ButtonConfirm = ({ children, funct }) => {
  return (
    <button
      onClick={funct}
      className="w-full bg-Red py-3 text-white rounded-full hover:contrast-200">
      {children}
    </button>
  );
};
export default ButtonConfirm;
