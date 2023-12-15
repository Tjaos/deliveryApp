import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    {
      id: 1,
      name: "Creesse Burger",
      price: 40,
      fotoComida:
        "https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg",
    },
    {
      id: 2,
      name: "Chezzy Burger",
      price: 35,
      fotoComida:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/hamburguer-unsplash.jpg?w=1200&h=1200&crop=1",
    },
    {
      id: 3,
      name: "Misto Presunto",
      price: 14,
      fotoComida:
        "https://s2-receitas.glbimg.com/rzfwf1xIr6gLOR2vihOTSE4AZaI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/o/2/ysIZvgQtq4Xfw6TTBQOg/hamburguer-de-linguica-com-vinagrete-de-abacaxi-e-molho-de-mostarda-com-mel-do-rodrigo-hilbert-5-menos.jpg",
    },
    {
      id: 4,
      name: "Sanduba bom",
      price: 23,
      fotoComida:
        "https://www.mundoboaforma.com.br/wp-content/uploads/2020/10/Hamburguer.jpg",
    },
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
            <TouchableOpacity style={[styles.category]}>
              <Text>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.category]}>
              <Text>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.category]}>
              <Text>Pasta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.category]}>
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
              3/10
            </Text>
          </View>
          <View style={styles.ListItems}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product, index) => (
                <View key={index} style={styles.item}>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Image
                        style={{
                          width: 80,
                          height: 70,
                          marginTop:10,
                          borderRadius:15
                        }}
                      source={{
                        uri:`${product.fotoComida}`
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
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          delToCart({ ...product, quantity: selectedQuantity });
                        }}
                        style={{ padding: 0 }}
                      >
                        <Icon
                          name="remove"
                          size={25}
                          color={"red"}
                          backgroundColor={"white"}
                          borderRadius={15}
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
                        <Icon
                          name="add"
                          size={25}
                          color={"purple"}
                          backgroundColor={"white"}
                          borderRadius={15}
                        />
                      </TouchableOpacity>
                    </View>
                    {/*---------------------------------------- */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: 130,
                        justifyContent: "space-around",
                      }}
                    >
                      <Text
                        style={{
                          backgroundColor: "white",
                          padding: 2,
                          borderRadius: 5,
                          width: 50,
                        }}
                      >
                        R$ {product.price}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Cart")}
                      >
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/126/126510.png",
                          }}
                          style={{ width: 25, height: 25, padding: 0 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
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
    height: "97%",
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
