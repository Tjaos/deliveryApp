import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
/*
const deliveryImage = Image.resolveAssetSource(DeliveryImage).uri;
*/
export default function HomeScreen() {
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
          <View style={{
            paddingTop:50
          }}>
            <Image 
            source={
                require( '../assets/image/deliveryman.png')} 
            style={{width:200, height:200}}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.topics}>
            <Text>Burger</Text>
            <Text>Pizza</Text>
            <Text>Pasta</Text>
            <Text>Popular</Text>
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
            <View
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
            </View>
          </View>
          <View style={styles.ListItems}>
            <View style={styles.item}>
              <Text>Foto 01</Text>
              <Text style={{ fontWeight: "bold", color: "#dcdcdc" }}>
                Creesse Burger
              </Text>
            </View>
            <View style={styles.item}>
              <Text>Foto 02</Text>
              <Text style={{ fontWeight: "bold", color: "#dcdcdc" }}>
                Chezzy Burger
              </Text>
            </View>
          </View>
          <View style={styles.navbar}>
            <View>Home</View>
            <View>Lupa</View>
            <View>Sino</View>
            <View>User</View>
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
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#9377C6",
    height: 150,
    width: 120,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});
