import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { TouchableOpacity } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <View style={styles.topics}>
            <View style={{ width: "99%" }}>
              <View
                style={{
                  width: "100%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <Icon name="reorder" size={30} color={"white"} style={{}} />
                <Icon
                  name="shopping_cart"
                  size={30}
                  color={"white"}
                  style={{}}
                />
              </View>
            </View>
            <View></View>
          </View>
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
  background: {
    height: "95%",
    width: "99%",
    backgroundColor: "#9377C6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    width: "100%",
  },
  content: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    height: "95%",
    width: "100%",
  },
  topics: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
});
