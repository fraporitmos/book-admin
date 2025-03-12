import React, { useEffect, useRef, useState } from "react";

import HeaderBooks from "../../components/HeaderBooks";
import axios from "axios";
import OrderItemSkeleton from "../../components/OrderItemSkeleton";
import BookItem from "../../components/BookItem";
import Modal from "react-modal";
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";

const BookScreen = () => {
  const [books, setBooks] = useState([]);
  const [booksCache, setBooksCache] = useState([]);
  const [filter, setFilter] = useState("book");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState(false);

  const [currentBook, setCurrentBook] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchBooks();
  }, [filter]);

  useEffect(() => {
    const arraySearched = books.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    if (arraySearched.length === 0 || search === "") {
      setBooks(booksCache);
    } else {
      setBooks(arraySearched);
    }
  }, [search]);

  useEffect(() => {
    reset({
      name: currentBook.name,
      description: currentBook.description,
      author: currentBook.author,
      price: currentBook.price,
      editorial: currentBook.editorial,
      img: currentBook.img,
    });
  }, [currentBook]);

  const fetchBooks = async () => {
    const resp = await axios.get(`http://3.84.219.17:3030/book/${filter}`);
    setBooks(resp.data);
    setBooksCache(resp.data);
  };

  const handleDeleteBook = async (id) => {
    if (confirm("Deseas eliminar este libro de la base de datos?")) {
      const resp = await axios.delete("http://3.84.219.17:3030/book", {
        data: { _id: id },
      });
      if (resp.status === 200) {
        fetchBooks();
      }
    }
  };

  const handleEditBook = async (item) => {
    setCreate(false);
    setOpen(true);
    setCurrentBook(item);
  };

  const handleCreateBook = async () => {
    setCreate(true);
    setOpen(true);
    setCurrentBook({});
  };

  const onFormSubmit = async (data) => {
    if (create) {
      delete data._id
      const resp = await axios.post("http://3.84.219.17:3030/book", data);
      if (resp.status === 200) {
        setOpen(false)
        fetchBooks();
      }
    } else {
      const resp = await axios.put("http://3.84.219.17:3030/book", data);
      if (resp.status === 200) {
        setOpen(false)
        fetchBooks();
      }
    }
  };

  return (
    <div>
      <HeaderBooks
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        onCreateBook={handleCreateBook}
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
          {books.length > 0 ? (
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
                item={item}
                onDelete={handleDeleteBook}
                onEdit={handleEditBook}
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

      <Modal isOpen={open} style={customStyles} contentLabel="Example Modal">
        <div>
          <div className="flex justify-end">
            <IoMdCloseCircle
              onClick={() => setOpen(false)}
              size={26}
              className="text-red-500 cursor-pointer"
            />
          </div>

          <form
            onSubmit={handleSubmit(onFormSubmit)}
            class="flex w-full  items-center justify-center space-x-3"
          >
            <div class="w-full max-w-2xl px-5 py-10 m-auto rounded-lg ">
              <div class="mb-6 text-xl font-light text-center text-gray-800">
                Info libro
              </div>
              <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div class="col-span-2 lg:col-span-1">
                  <input
                    defaultValue={currentBook._id}
                    type="text"
                    {...register("_id")}
                    className="hidden"
                  />
                  <div class=" relative ">
                    <input
                      defaultValue={currentBook.name}
                      type="text"
                      {...register("name", {
                        required: "Ingresa el nombre del libro",
                      })}
                      class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Ingresa el nombre del libro"
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      defaultValue={currentBook.author}
                      type="text"
                      {...register("author", { required: "Ingresa el autor" })}
                      class=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Ingresa el author"
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      defaultValue={currentBook.img}
                      type="text"
                      {...register("img", { required: "Ingresa la imagen" })}
                      class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Ingresa la url imagen"
                    />
                  </div>
                </div>

                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      defaultValue={currentBook.editorial}
                      type="text"
                      {...register("editorial", {
                        required: "Ingresa la editorial",
                      })}
                      class=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Ingresa la editorial"
                    />
                  </div>
                </div>

                <div class="col-span-2">
                  <label class="text-gray-700" for="name">
                    <textarea
                      defaultValue={currentBook.description}
                      {...register("description", {
                        required: "Ingresa la descripción",
                      })}
                      class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Ingresa la descripción"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      defaultValue={currentBook.price}
                      type="number"
                      {...register("price", { required: "Ingresa el precio" })}
                      class=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                      placeholder="Precio"
                    />
                  </div>
                </div>

                <div class="col-span-2 lg:col-span-1">
                  <div class="relative ">
                    <select
                      defaultValue={currentBook.type}
                      {...register("type")}
                      className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="book">Libros</option>
                      <option value="magazine">Revistas</option>
                      <option value="comic">Commics</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-2 text-right">
                  <button
                    type="submit"
                    class="py-2 px-4 bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    {
                      create === true ? "Registrar libro" : " Editar Libro"
                    }
                  </button>
                </div>
              </div>
              <div className="bg-red-600 mt-4 col-span-2">
                <div class="relative ">
                  {errors.name && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.name.message}`}
                      </p>
                    </div>
                  )}
                </div>
                <div class="relative ">
                  {errors.author && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.author.message}`}
                      </p>
                    </div>
                  )}
                </div>
                <div class="relative ">
                  {errors.img && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.img.message}`}
                      </p>
                    </div>
                  )}
                </div>
                <div class="relative ">
                  {errors.editorial && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.editorial.message}`}
                      </p>
                    </div>
                  )}
                </div>
                <div class="relative ">
                  {errors.price && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.price.message}`}
                      </p>
                    </div>
                  )}
                </div>

                <div class="relative ">
                  {errors.description && (
                    <div className="flex items-center ml-2">
                      <IoIosInformationCircle color="white" />
                      <p className="text-white text-xs pl-2 py-1">
                        {`${errors.description.message}`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

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

export default BookScreen;
