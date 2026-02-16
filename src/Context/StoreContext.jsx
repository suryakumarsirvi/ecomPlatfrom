import { createContext, useContext, useMemo, useReducer } from "react";
import productsData from "../Data/Products.js";

const StoreContext = createContext();

const reducer = (currentState, action) => {
    switch (action.type) {
        case "TOGGLE_CART": {
            const existingItem = currentState.cart.find(
                (item) => item.id === action.payload.id,
            );

            if (existingItem) {
                return {
                    ...currentState,
                    cart: currentState.cart.filter(
                        (item) => item.id !== action.payload.id,
                    ),
                    products: currentState.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, isAdded: false }
                            : product
                    ),
                };
            } else {
                return {
                    ...currentState,
                    cart: [...currentState.cart, { ...action.payload, qty: 1 }],
                    products: currentState.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, isAdded: true }
                            : product
                    ),
                };
            }
        }

        case "INCREMENT_QTY": {
            return {
                ...currentState,
                cart: currentState.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            };
        }

        case "DECREMENT_QTY": {
            return {
                ...currentState,
                cart: currentState.cart
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    )
                    .filter((item) => item.qty > 0),
            };
        }

        case "REMOVE_FROM_CART": {
            return {
                ...currentState,
                cart: currentState.cart.filter(
                    (item) => item.id !== action.payload,
                ),
                products: currentState.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, isAdded: false }
                        : product
                ),
            };
        }

        case "CLEAR_CART": {
            return {
                ...currentState,
                cart: [],
                products: currentState.products.map((product) => ({
                    ...product,
                    isAdded: false,
                })),
            };
        }

        case "TOGGLE_WISHLIST": {
            const existingItem = currentState.wishlist.find(
                (item) => item.id === action.payload.id,
            );

            if (existingItem) {
                return {
                    ...currentState,
                    wishlist: currentState.wishlist.filter(
                        (item) => item.id !== action.payload.id,
                    ),
                    products: currentState.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, isWishlisted: false }
                            : product
                    ),
                };
            } else {
                return {
                    ...currentState,
                    wishlist: [...currentState.wishlist, action.payload],
                    products: currentState.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, isWishlisted: true }
                            : product
                    ),
                };
            }
        }

        default:
            return currentState;
    }
};

export const StoreProvider = ({ children }) => {
    const [currentState, dispatch] = useReducer(reducer, {
        cart: [],
        wishlist: [],
        products: productsData,
    });

    const value = useMemo(
        () => ({
            cart: currentState.cart,
            wishlist: currentState.wishlist,
            products: currentState.products,
            dispatch,
        }),
        [currentState],
    );

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
