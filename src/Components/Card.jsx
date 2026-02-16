import { useStore } from "../Context/StoreContext.jsx";

const Card = () => {
  const { products, dispatch } = useStore();

  return (
    <>
      {products.map(
        (
          {
            id,
            title,
            description,
            price,
            discount,
            image,
            isWishlisted,
            isAdded,
          },
          index,
        ) => {
          return (
            <div
              key={id}
              className="w-64 m-2 bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 p-2 group"
            >
              <div className="bg-gray-100 rounded overflow-hidden h-48 flex items-center justify-center">
                <img
                  src={image}
                  alt="product"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {title}
                  </h3>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_WISHLIST",
                        payload: products[index],
                      })}
                    className={`ri-heart-line text-lg cursor-pointer transition
        ${
                      isWishlisted
                        ? "ri-poker-hearts-fill text-red-500"
                        : "text-gray-500 hover:text-red-500"
                    }
    `}
                  >
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    $50.00
                  </span>
                  <span className="text-black font-semibold text-sm">
                    ${price}
                  </span>
                  <span className="text-green-600 text-xs font-medium">
                    {discount}% OFF
                  </span>
                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_CART",
                      payload: products[index],
                    })}
                  className={`w-full mt-3 py-2 rounded-lg cursor-pointer active:scale-95 transition
                   ${
                    isAdded
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-black hover:bg-zinc-900 text-white"
                  }`}
                >
                  {isAdded ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        },
      )}
    </>
  );
};

export default Card;
