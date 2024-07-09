import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Navigation = () => {
  const router = useRouter();

  return (
    <View style={styles.navigationBox}>
      <TouchableOpacity
        style={[styles.navigationSection, styles.navNotLast]}
        onPress={() => {
          router.push("/korpa");
        }}
      >
        <AntDesign name="shoppingcart" size={30} color="#ea5200" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navigationSection, styles.navNotLast]}
        onPress={() => {
          router.push("/proizvodi");
        }}
      >
        <Feather name="search" size={30} color="#ea5200" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navigationSection, styles.navNotLast]}
        onPress={() => {
          router.push("/kategorije");
        }}
      >
        <SimpleLineIcons name="book-open" size={30} color="#ea5200" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navigationSection, styles.navNotLast]}
        onPress={() => {
          router.push("/login");
        }}
      >
        <Entypo name="image" size={30} color="#ea5200" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationSection}
        onPress={() => {
          router.push("/kontakt");
        }}
      >
        <MaterialIcons name="contact-phone" size={30} color="#ea5200" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  navigationBox: {
    height: 50,
    width: Dimensions.get("screen").width,
    backgroundColor: "#383e42",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationSection: {
    width: Dimensions.get("screen").width / 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  navNotLast: {
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },
});
export default Navigation;
