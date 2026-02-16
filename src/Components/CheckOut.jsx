import React, { useState } from "react";
import { useStore } from "../Context/StoreContext";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const { cart, dispatch } = useStore();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0,
    );

    const shipping = cart.length > 0 ? 24 : 0;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        setOrderPlaced(true);
        dispatch({
            type: "CLEAR_CART",
        });
    };

    return (
        <div className="w-[90%] mx-auto mt-10 flex gap-10">
            {orderPlaced
                ? (
                    <div className="flex flex-col items-center justify-center w-full mt-40">
                        <h2 className="text-2xl font-semibold mb-4">
                            🎉 Order Placed Successfully!
                        </h2>
                        <p className="text-zinc-600 mb-6">
                            Thank you for your purchase.
                        </p>
                        <Link
                            to="/"
                            className="px-6 py-3 bg-black text-white rounded-lg"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )
                : cart.length > 0
                ? (
                    <>
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Link
                                    to="/"
                                    className="cursor-pointer text-lg text-zinc-700 flex items-center gap-1"
                                >
                                    Home
                                    <i className="ri-arrow-drop-right-line text-black/50 text-xl">
                                    </i>
                                </Link>

                                <span className="cursor-pointer text-xl">
                                    Items in my cart
                                </span>
                            </h1>

                            <div className="space-y-6">
                                {cart.map((item) => (
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

                                        <div className="w-1/6 flex justify-center items-center gap-3">
                                            <button
                                                onClick={() =>
                                                    dispatch({
                                                        type: "DECREMENT_QTY",
                                                        payload: item.id,
                                                    })}
                                                className="px-2 border cursor-pointer"
                                            >
                                                -
                                            </button>

                                            <button
                                                disabled={item.qty === 1}
                                                className="px-2 text-black disabled:opacity-60"
                                            >
                                                {item.qty}
                                            </button>

                                            <button
                                                onClick={() =>
                                                    dispatch({
                                                        type: "INCREMENT_QTY",
                                                        payload: item.id,
                                                    })}
                                                className="px-2 border cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <p className="w-1/6 text-center">
                                            ${item.price * item.qty}
                                        </p>

                                        <button
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item.id,
                                                })}
                                            className="w-1/6 text-center text-red-500"
                                        >
                                            <span className="cursor-pointer">
                                                ✕
                                            </span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-[300px] bg-gray-100 p-6 rounded-lg h-fit">
                            <h2 className="text-xl font-semibold mb-6">
                                Summary
                            </h2>

                            <div className="flex justify-between mb-3">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span>Shipping Est.</span>
                                <span>${shipping}</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Enter gift code"
                                className="w-full border p-2 rounded mb-4"
                            />

                            <div className="flex justify-between font-semibold mb-6">
                                <span>Total Price</span>
                                <span>${total}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-black text-white cursor-pointer py-3 rounded-lg hover:bg-zinc-800 transition"
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </>
                )
                : (
                    <div className="flex flex-col items-center justify-center w-full mt-54">
                        <p className="text-md text-zinc-800 mb-4">
                            Your cart is empty
                        </p>
                        <Link
                            onClick={handleCheckout}
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

export default CheckOut;
