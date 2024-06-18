import React from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  StyleSheet,
  Linking,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Navigation from "../components/Navigation";
import { useKorpa } from "./index";
import _ from "lodash";
import ProductItem from "../components/productItem/ProductItem";
import qs from "qs";

const korpa = () => {
  const [korpa, setKorpa] = useKorpa();
  const router = useRouter();

  async function posaljiPorudzbinu() {
    let url = `mailto:bibijovano@gmail.com`;
    const nizKorpa = korpa.map((item) => {
      return `${item.Ime} - Kolicina: ${item.Kolicina}`;
    });
    const query = qs.stringify({
      subject: "Porudzbina sa aplikacije",
      body: `${nizKorpa}`,
    });

    if (query.length) {
      url += `?${query}`;
    }
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error("Error prilikom slanja porudzbine");
    }

    return Linking.openURL(url);
  }
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
          headerShadowVisible: true,
          headerTitle: "Korpa",
        }}
      />

      {korpa.length === 0 && (
        <Text style={styles.h1}>Vaša korpa je prazna.</Text>
      )}
      {korpa.length === 0 && (
        <View style={styles.dugmeWrap}>
          <TouchableOpacity
            style={styles.dugme}
            onPress={() => {
              router.push("/proizvodi");
            }}
          >
            <Text style={styles.dugmeText}>Proizvodi</Text>
          </TouchableOpacity>
        </View>
      )}
      {korpa.length !== 0 && (
        <FlatList
          data={korpa}
          renderItem={(item) => (
            <ProductItem item={item.item} kolicina={true} />
          )}
          keyExtractor={(item) => item.ID}
          style={{ marginBottom: 100 }}
        />
      )}
      {korpa.length !== 0 && (
        <TouchableOpacity
          style={styles.dugmePoruci}
          onPress={() => {
            posaljiPorudzbinu();
          }}
        >
          <Text style={styles.textPoruci}>Pošaljite porudžbinu</Text>
        </TouchableOpacity>
      )}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  dugmeWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dugme: {
    margin: "auto",
    padding: 15,
    backgroundColor: "#0064b9",
    borderRadius: 10,
  },
  dugmeText: {
    color: "white",
    fontSize: 20,
  },
  dugmePoruci: {
    width: "80%",
    zIndex: 10,
    position: "fixed",
    bottom: 55,
    left: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#0064b9",
    borderRadius: 10,
  },
  textPoruci: {
    color: "white",
    fontSize: 20,
  },
});

export default korpa;
