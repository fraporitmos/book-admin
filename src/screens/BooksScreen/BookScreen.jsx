import React, { useEffect, useRef, useState } from "react";

import HeaderBooks from "../../components/HeaderBooks";
import axios from "axios";
import OrderItemSkeleton from "../../components/OrderItemSkeleton";
import BookItem from "../../components/BookItem";
import mongoose from 'mongoose'

const BookScreen = () => {
  const [books, setBooks] = useState([]);
  const [booksCache, setBooksCache] = useState([]);

  const [filter, setFilter] = useState("book")
  const [search, setSearch] = useState("")


  const fetchBooks = async () => {
    const resp = await axios.get(`http://3.84.219.17:3030/book/${filter}`);
    setBooks(resp.data);
    setBooksCache(resp.data)
  };

  useEffect(() => {
    fetchBooks();
  }, [filter]);

  useEffect(() => {
    const arraySearched= books.filter( (item) => item.name.toLowerCase().includes(search.toLowerCase())  )
    if(arraySearched.length === 0 || search === "" ){
      setBooks(booksCache)
    }else{
      setBooks(arraySearched)
    }
  }, [search]);

  const handleDeleteBook = async(id) =>{
    if (confirm('Deseas eliminar este libro de la base de datos?')) {

      const resp = await axios.delete('http://3.84.219.17:3030/book', {
        data: { _id: id }
      });
      fetchBooks()
   
    }
  }
 

  return (
    <div>

      <HeaderBooks 
       filter={filter}
       setFilter ={setFilter}
       search={search}
       setSearch={setSearch}
      />

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
          {
          books.length > 0 ? (
            books.map((item) => (
              <BookItem
                key={item._id}
                _id={item._id}
                name={item.name}
                author={item.author}
                editorial={item.editorial}
                description={item.description}
                price={`S/${item.price}`}
                img={item.img}
                type={item.type}
                onDelete={handleDeleteBook}
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
