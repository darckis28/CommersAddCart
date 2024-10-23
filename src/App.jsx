import BoxCard from "./components/BoxCard";
import data from "./data/data.json";
import CardProduct from "./components/CardProduct";
import { Context } from "./context/Context";
import Modal from "./components/Modal";

export default function App() {
  return (
    <Context>
      <div className=" bg-Rose-100  ">
        <main className="font-Hat-Text text-base flex flex-col md:flex-row  max-w-5xl mx-auto">
          <section className="p-5">
            <h1 className="font-bold text-4xl mb-8 text-Rose-900">Desserts</h1>
            <section>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                {data.map((item, idx) => (
                  <CardProduct
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    key={idx}
                  />
                ))}
              </ul>
            </section>
          </section>
          <aside className="p-3">
            <BoxCard />
          </aside>
        </main>
      </div>
      <Modal />
    </Context>
  );
}
