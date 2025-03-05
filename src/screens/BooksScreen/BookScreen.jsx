import React, { useEffect, useRef, useState } from "react";

import HeaderBooks from "../../components/HeaderBooks";
import axios from "axios";
import OrderItemSkeleton from "../../components/OrderItemSkeleton";
import OrderItem from "../../components/OrderItem";
import BookItem from "../../components/BookItem";

const BookScreen = () => {
  const [books, setBooks] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchBooks = async () => {
      const resp = await axios.get("http://3.84.219.17:3030/book/book");
      console.log(resp.data);
      setBooks(resp.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <HeaderBooks />

      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Portada
            </th>
            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Nombre
            </th>
            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Author
            </th>
            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Editorial
            </th>

            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Precio
            </th>
            <th className="px-4 py-2 font-xl whitespace-nowrap text-gray-900">
              Tipo
            </th>
            <th className="px-4 py-2 font-xl text-c whitespace-nowrap text-gray-900">
              Acción
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {books.length > 0 ? (
            books.map((item) => (
              <BookItem
                key={item.id}
                name={item.name}
                author={item.author}
                editorial={item.editorial}
                description={item.description}
                price={`S/${item.price}`}
                img={item.img}
                type={item.type}
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

              <OrderItemSkeleton />
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookScreen;
