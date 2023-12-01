import React, {createContext, useState, useContext} from  "react";
const MyContext = createContext();
const MyProvider = ()=>{
    const [shoppingCart, setShoppingCart] = useState([]);
    const addToShoppingCart = (product) => {
        const existingProductIndex = shoppingCart.findIndex(
            (item) => item.id == product.id
        );
    }
}