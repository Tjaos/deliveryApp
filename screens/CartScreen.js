import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useMyContext } from "../MyContext";
import { Icon } from "react-native-elements";

export default function CartScreen({ navigation }) {
  const { addToCart, delToCart, cart } = useMyContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);

      if (!isNaN(price) && !isNaN(quantity)) {
        totalPrice += price * quantity;
      } else {
        console.error(
          "Preço ou quantidade não é um número válido para o item:",
          item
        );
      }
    });

    return totalPrice;
  };

  const total = calculateTotalPrice();
  const renderCartItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-starts",
        marginBottom: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "space-between",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            source={require("../assets/image/cheesseburger.png")}
            style={{
              width: 50,
              height: 50,
              paddingTop: 0,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingLeft: 50,
            width: "30%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            R${item.price}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            delToCart({ ...item, quantity: selectedQuantity });
          }}
          style={{ padding: 10 }}
        >
          <Icon
            name="remove"
            size={20}
            color={"red"}
            backgroundColor={"red"}
            borderRadius={15}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addToCart({ ...item, quantity: selectedQuantity });
          }}
          style={{ padding: 10 }}
        >
          <Icon
            name="add"
            size={20}
            color={"green"}
            backgroundColor={"green"}
            borderRadius={15}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>
          Quantidade: {getProductQuantity(item.id)}
        </Text>
      </View>
      <View></View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FED967",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "97%",
          width: "99%",
          backgroundColor: "#9377C6",
          borderRadius: 20,
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            paddingTop: 50,
            paddingLeft: 30,
          }}
        >
          <Icon
            name="west"
            size={25}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <Text style={{ color: "white", fontSize: 25, paddingLeft: 30 }}>
          My Order
        </Text>
        <View style={styles.topics}>
          <TouchableOpacity style={[styles.category]}>
            <Text style={styles.text}>Burger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category]}>
            <Text style={styles.text}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category]}>
            <Text style={styles.text}>Pasta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category]}>
            <Text style={styles.text}>Popular</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "70%",
            width: "100%",
            backgroundColor: "#ffff",
            borderRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 50,
              paddingTop: 20,
            }}
          >
            The Burger King
          </Text>
          <FlatList
            style={{ padding: 50 }}
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCartItem}
          />
          <View
            style={{
              width: "100%",
              height: 60,
              borderTopWidth: 2,
              borderTopColor: "gray",
              justifyContent: "space-evenly",
              alignItems: "center",

              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18, paddingLeft: 30 }}>
              Total: R$ {total.toFixed(2)}
            </Text>
            <View
              style={{
                backgroundColor: "#9377C6",
                padding: 5,
                width: 60,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Card</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topics: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    width: "100%",
  },
  category: {
    padding: 10,
    borderRadius: 10,
  },
  content: {
    height: "55%",
    width: "100%",
    backgroundColor: "#ffff",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
  },
});
