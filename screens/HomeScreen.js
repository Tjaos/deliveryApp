import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default function HomeScreen({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    toggleModal();
  };

  const isCategorySelected = (category) => {
    return category === selectedCategory;
  };
  const burgers = [
    { name: "Creesse Burger", price: "R$ 40" },
    { name: "Chezzy Burger", price: "R$ 35" },
    { name: "Misto", price: "R$ 14" },
    { name: "Sanduba bom", price: "R$ 23" },
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
              onPress={() => handleCategoryPress("burger")}
              style={[
                styles.category,
                isCategorySelected("burger") && {
                  backgroundColor: "#9377C6",
                  borderRadius: 14,
                  padding: 5,
                },
              ]}
            >
              <Text>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryPress("pizza")}
              style={[
                styles.category,
                isCategorySelected("pizza") && {
                  backgroundColor: "#9377C6",
                  borderRadius: 14,
                  padding: 5,
                },
              ]}
            >
              <Text>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryPress("pasta")}
              style={[
                styles.category,
                isCategorySelected("pasta") && {
                  backgroundColor: "#9377C6",
                  borderRadius: 14,
                  padding: 5,
                },
              ]}
            >
              <Text>Pasta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategoryPress("popular")}
              style={[
                styles.category,
                isCategorySelected("popular") && {
                  backgroundColor: "#9377C6",
                  borderRadius: 14,
                  padding: 5,
                },
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
              {burgers.map((burger, index) => (
                <View key={index} style={styles.item}>
                  <TouchableOpacity
                    onPress={() => handleCategoryPress(burger.name)}
                    
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
                      {burger.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="star" size={25} color={"white"} />
                      <Icon name="star" size={25} color={"white"} />
                      <Icon name="star" size={25} color={"white"} />
                      <Icon name="star-half" size={25} color={"white"} />
                      <Icon name="star" size={25} style={{}} />
                    </View>
                    <Text
                      style={{
                        backgroundColor: "white",
                        padding: 2,
                        borderRadius: 5,
                      }}
                    >
                      {burger.price}
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
      {/* Modal */}
      <Modal
        isVisible={isModalVisible}
        style={{ margin: 0 }}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text>Quantidade: 1</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: "green" }}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: "red" }}>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}
                onPress={()=>navigation.navigate('Cart')}>
               
                Add to bag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    height: 180,
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
