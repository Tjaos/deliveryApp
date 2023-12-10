import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useMyContext } from "../MyContext";


export default function HomeScreen({ navigation }) {
  const { addToCart, delToCart, cart } = useMyContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };


  const products = [
    { id: 1, name: "Creesse Burger", price: "R$ 40" },
    { id: 2, name: "Chezzy Burger", price: "R$ 35" },
    { id: 3, name: "Misto", price: "R$ 14" },
    { id: 4, name: "Sanduba bom", price: "R$ 23" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.topContent}>
          <View
            style={{
              width: "90%",
              paddingTop: 40,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Icon name="reorder" size={30} color={"white"} style={{}} />
            <Icon name="search" size={30} color={"white"} style={{}} />
          </View>
          <View
            style={{
              paddingTop: 50,
            }}
          >
            <Image
              source={require("../assets/image/deliveryman.png")}
              style={{ width: 250, height: 200 }}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.topics}>
            <TouchableOpacity
              style={[
                styles.category,
              ]}
            >
              <Text>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
              ]}
            >
              <Text>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
              ]}
            >
              <Text>Pasta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
              ]}
            >
              <Text>Popular</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ paddingLeft: 15, height: 40, paddingTop: 15 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Food delivery
              </Text>
              <Text style={{ fontSize: 12, color: "gray" }}>Restaurent</Text>
            </View>
            <Text
              style={{
                paddingRight: 15,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                fontWeight: "bold",
                color: "#9377C6",
                paddingTop: 15,
              }}
            >
              2/10
            </Text>
          </View>
          <View style={styles.ListItems}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product, index) => (
                <View key={index} style={styles.item}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                    }}

                  >
                    <Image
                      source={require("../assets/image/cheesseburger.png")}
                      style={{
                        width: 80,
                        height: 80,
                        paddingTop: 0,
                      }}
                    />
                    <Text style={{ fontWeight: "bold", color: "#dcdcdc" }}>
                      {product.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="star" size={15} color={"white"} />
                      <Icon name="star" size={15} color={"white"} />
                      <Icon name="star" size={15} color={"white"} />
                      <Icon name="star-half" size={15} color={"white"} />
                      <Icon name="star" size={15} style={{}} />
                    </View>
                    {/*---------------------------------------- */}
                    <View style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row"
                    }}>

                      <TouchableOpacity
                        onPress={() => {
                          delToCart({ ...product, quantity: selectedQuantity });
                        }}
                        style={{ padding: 0 }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png",
                          }}
                          style={{ width: 20, height: 20 }}
                        />
                      </TouchableOpacity>

                      <Text style={{ marginLeft: 10 }}>
                        {getProductQuantity(product.id)}
                      </Text>

                      <TouchableOpacity
                        onPress={() => {
                          addToCart({ ...product, quantity: selectedQuantity });
                        }}
                        style={{ padding: 10 }}
                      >
                        <Image
                          source={{
                            uri: "https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png",
                          }}
                          style={{ width: 20, height: 20 }}
                        />
                      </TouchableOpacity>

                    </View>
                    {/*---------------------------------------- */}
                    <Text
                      style={{
                        backgroundColor: "white",
                        padding: 2,
                        borderRadius: 5,
                        width: 50
                      }}
                    >
                      {product.price}
                    </Text>
                  </TouchableOpacity>

                </View>
              ))}
            </ScrollView>

          </View>
          <View style={styles.navbar}>
            <TouchableOpacity>
              <Icon name="home" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="notifications" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="person" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FED967",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: "45%",
    width: "99%",
  },
  background: {
    height: "95%",
    width: "99%",
    backgroundColor: "#9377C6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    height: "55%",
    width: "100%",
    backgroundColor: "#ffff",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  topics: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  ListItems: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#9377C6",
    height: 200,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginRight: 10,
  },
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  category: {
    padding: 10,
    borderRadius: 10,
  },
});
