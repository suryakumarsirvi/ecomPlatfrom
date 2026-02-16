import React from "react";

const GridProducts = () => {
    return (
        <div className="flex flex-col w-full items-center gap-2 justify-center">
            <div className="flex w-[80%] h-74 items-center gap-2">
                <div className="w-[40%] h-full rounded-lg shadow-md overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-bottom transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src="https://i.pinimg.com/1200x/53/06/4b/53064b22eae8610ab047e2ea6fc32c56.jpg"
                        alt=""
                    />
                </div>
                <div className="w-[60%] h-full rounded-lg shadow-md overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-bottom transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src="https://i.pinimg.com/736x/2d/bb/a7/2dbba7f84edb11a9419a99b29e0da502.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex w-[80%] h-74 items-center gap-2">
                <div className="w-[60%] h-full rounded-lg shadow-md overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src="https://i.pinimg.com/1200x/4c/77/e9/4c77e98cc39bbe91173be7300c46093b.jpg"
                        alt=""
                    />
                </div>
                <div className="w-[40%] h-full rounded-lg shadow-md overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-bottom transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src="https://i.pinimg.com/736x/f8/f8/c0/f8f8c04c1b228a4ad86e2f4bb51fd9f9.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default GridProducts;
