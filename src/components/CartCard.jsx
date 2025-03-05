import React from 'react'

const CartCard = ({name, img,author,publisher,discount,price,description}) => {
  return (
    <div  className="bg-white w-full m-4 rounded-lg shadow p-4 border border-gray-200">
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative h-40 w-32 flex-shrink-0 overflow-hidden rounded-md">
        <img src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm text-gray-500">by {author}</p>
            <p className="text-xs text-gray-500">Publisher: {publisher}</p>
          </div>
          <div className="text-right">
                 <p className="text-lg font-semibold">
                  S/{(price - (price * discount) / 100).toFixed(2)}
                </p>
          </div>
        </div>
        <p className="mt-2 text-sm line-clamp-2 text-gray-700">{description}</p>
      
      </div>
    </div>
  </div>
  )
}

export default CartCard