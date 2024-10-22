import ButtonAddCar from "./Buttons/ButtonAddCar";
import { formatToDollars } from "../utils/formatedCash";
const CardProduct = ({ name, category, price, image }) => {
  const { mobile, desktop, thumbnail, tablet } = image;

  return (
    <li className="md:max-w-64">
      <div className="w-full rounded-lg overflow-hidden mb-5">
        <img src={mobile} alt={name} className="sm:hidden" />
        <img
          src={tablet}
          alt={name}
          className="hidden sm:block md:hidden w-full"
        />
        <img src={desktop} alt={name} className="hidden md:block" />
        <ButtonAddCar />
      </div>
      <span className="text-sm text-Rose-500">{category}</span>
      <h2 className="text-Rose-900 font-semibold">{name}</h2>
      <span className="text-Red font-bold">{formatToDollars(price)}</span>
    </li>
  );
};
export default CardProduct;
