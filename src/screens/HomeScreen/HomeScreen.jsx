import React, { useEffect, useRef, useState } from "react";
import CountCard from "../../components/CountCard";
import axios from "axios";
import OrderItem from "../../components/OrderItem";
import { calculateIncomeMonth, calculateOrdersMonth } from "../../utils/Utils";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import CartCard from "../../components/CartCard";
import "react-loading-skeleton/dist/skeleton.css";
import OrderItemSkeleton from "../../components/OrderItemSkeleton";

const customStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const HomeScreen = () => {
  const [orders, setOrders] = useState([]);
  const [currentCart, setCurrentCart] = useState([]);
  const [open, setOpen] = useState(false);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchOrders = async () => {
      const resp = await axios.get(
        "https://mcfrapo.pockethost.io//api/collections/order/records"
      );
      console.log("Me llamooo");
      setOrders(resp.data.items);
    };

    fetchOrders();
  }, []);

  const handleOnAction = (cartBooks) => {
    if (cartBooks.length > 0) {
      setCurrentCart(cartBooks);
      setOpen(true);
    }
  };

  return (
    <div className="flex mt-12 flex-col justify-center items-center">
      <div className="flex w-full justify-evenly">
        <CountCard
          title={"Ordenes del mes"}
          type={"cart"}
          data={
            orders.length === 0
              ? "Cargando ..."
              : `Nº ${calculateOrdersMonth(orders)}`
          }
        />
        <CountCard
          title={"Ingresos totales"}
          type={"money"}
          data={
            orders.length === 0
              ? "Cargando ..."
              : `S/ ${calculateIncomeMonth(orders)}`
          }
        />
        <CountCard title={"Total de visitas"} type={"eye"} data={"12000"} />
        <CountCard title={"Ingresos totales"} type={"customer"} data={"160"} />
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Cliente
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Correo
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Dirección
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Fecha de compra
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Importe
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Estado
              </th>
              <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
                Carrito
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {orders.length > 0 ? (
              orders.map((item) => (
                <OrderItem
                  key={item.id}
                  payer={item.payer}
                  email={item.email}
                  address={item.address}
                  paymentDate={item.paymentDate}
                  valuePayment={`S/${item.valuePayment}`}
                  state={item.state}
                  onAction={handleOnAction}
                  cart={item.books}
                />
              ))
            ) : (
              <>
                <OrderItemSkeleton />
                <OrderItemSkeleton />
                <OrderItemSkeleton />
                <OrderItemSkeleton />

                <OrderItemSkeleton />

                <OrderItemSkeleton />

                <OrderItemSkeleton />

              </>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={open} style={customStyles} contentLabel="Example Modal">
        <div>
          <div className="flex justify-end">
            <IoMdCloseCircle
              onClick={() => setOpen(false)}
              size={26}
              className="text-red-500 cursor-pointer"
            />
          </div>
          <div className=" w-full h-96  rounded-lg shadow-md">
            {currentCart.map((item) => (
              <CartCard
                key={item.id}
                name={item.name}
                img={item.img}
                author={item.author}
                publisher={item.publisher}
                discount={item.discount}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeScreen;
