import React, { createContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Carousel from "../components/carousel/Carousel";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useMemo } from "react";
import { createGlobalState } from "react-native-global-state-hooks";

const images = [
  "https://farbaralanekolor.rs/wp-content/uploads/2023/05/FLK-MOJE-BOJE.png",
];

export const useKorpa = createGlobalState([]);

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        height: Dimensions.get("screen").height,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerTitle: "Lane Kolor & Gradnja",
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            height: Dimensions.get("screen").height,
          }}
        >
          <Carousel images={images} />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              height: (Dimensions.get("screen").height - 50) / 4,
            }}
          >
            <TouchableOpacity
              style={[styles.touchable, styles.touchableAA]}
              onPress={() => {
                router.push({
                  pathname: "/proizvodi",
                });
              }}
            >
              <View style={styles.touchableView}>
                <Feather name="search" size={45} color="#ea5200" />
                <Text style={styles.touchableText}>Pretraga</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableAB]}
              onPress={() => router.push(`/kategorije`)}
            >
              <View style={styles.touchableView}>
                <SimpleLineIcons name="book-open" size={45} color="#ea5200" />
                <Text style={styles.touchableText}>Kategorije</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              height: Dimensions.get("screen").height / 4,
            }}
          >
            <TouchableOpacity
              style={[styles.touchable, styles.touchableBA]}
              onPress={() => router.push("/galerija")}
            >
              <View style={styles.touchableView}>
                <Entypo name="image" size={45} color="#ea5200" />
                <Text style={styles.touchableText}>Galerija</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableBB]}
              onPress={() => router.push(`/kontakt`)}
            >
              <View style={styles.touchableView}>
                <MaterialIcons name="contact-phone" size={45} color="#ea5200" />
                <Text style={styles.touchableText}>Kontakt</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.korpaDugme}
            onPress={() => {
              router.push("/korpa");
            }}
          >
            <AntDesign name="shoppingcart" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    backgroundColor: "#383e42",
  },
  touchableText: {
    textAlign: "center",
    color: "white",
    margin: 10,
    fontSize: 20,
  },
  touchableView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  touchableAA: {
    borderLeftWidth: 0,
    borderTopWidth: 2,
  },
  touchableAB: {
    borderTopWidth: 2,
    borderRightWidth: 0,
  },
  touchableBA: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  touchableBB: {
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  korpaDugme: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: (Dimensions.get("screen").height - 50) / 4 - 25,
    left: Dimensions.get("screen").width / 2 - 50,
    backgroundColor: "#0064b9",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  blok: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#0064b9",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999999999,
  },
  blokText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
export default Home;
