import remove from "/assets/images/icon-remove-item.svg";
const ListCar = () => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-Rose-100 pb-4 ">
      <div>
        <h3 className="font-bold mb-2">Clasic Tiramisu</h3>
        <span className="font-bold text-Red mr-5">2x</span>
        <span className="text-Rose-300  mr-2">@$5.00</span>
        <span className="text-Rose-500 font-medium">$25.00</span>
      </div>
      <button className="rounded-full p-1 border border-Rose-300">
        <img src={remove} alt="" />
      </button>
    </li>
  );
};
export default ListCar;
