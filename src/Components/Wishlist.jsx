import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Context/StoreContext";

const Wishlist = () => {
    const { wishlist, dispatch } = useStore();

    return (
        <div className="w-[90%] mx-auto mt-10">
            <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Link
                    to="/"
                    className="cursor-pointer text-lg text-zinc-700 flex items-center gap-1"
                >
                    Home
                    <i className="ri-arrow-drop-right-line text-black/50 text-xl"></i>
                </Link>

                <span className="text-xl">Wishlist</span>
            </h1>

            {wishlist.length > 0 ? (
                <div className="space-y-6">
                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b pb-4"
                        >
                            <div className="flex items-center gap-4 w-1/3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <p className="font-medium">
                                    {item.description}
                                </p>
                            </div>

                            <p className="w-1/6 text-center">
                                ${item.price}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "TOGGLE_WISHLIST",
                                            payload: item,
                                        })
                                    }
                                    className="text-red-500 cursor-pointer"
                                >
                                    Remove
                                </button>

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "TOGGLE_CART",
                                            payload: item,
                                        })
                                    }
                                    className={`px-4 py-2 rounded-md text-white transition ${
                                        item.isAdded
                                            ? "bg-red-500 hover:bg-red-600"
                                            : "bg-black hover:bg-zinc-900"
                                    }`}
                                >
                                    {item.isAdded
                                        ? "Remove from Cart"
                                        : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-40">
                    <p className="text-md text-zinc-800 mb-4">
                        Your wishlist is empty
                    </p>
                    <Link
                        to="/"
                        className="px-4 py-2 bg-black text-white rounded-md text-sm"
                    >
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
