import React, { useEffect, useState } from "react";
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
import { db, upitiRef } from "../firebase";
import {
  updateDoc,
  doc,
  addDoc,
  collection,
  getDocs,
  setDoc,
  removeDoc,
  deleteDoc,
} from "firebase/firestore";
import { uniqueId } from "react-native-global-state-hooks";

const korpa = () => {
  const [korpa, setKorpa] = useKorpa();
  const router = useRouter();

  const [nizUpita, setNizupita] = useState([]);
  useEffect(() => {
    getDocs(upitiRef).then((res) => {
      const upiti = res.docs.map((doc) => ({ ...doc.data() }));
      console.log(upiti, "UPITI", uniqueId());
      setNizupita(upiti);
    });
  }, []);

  async function ukloniUpit(id) {
    deleteDoc(doc(db, "upiti", id));
    getDocs(upitiRef).then((res) => {
      const upiti = res.docs.map((doc) => ({ ...doc.data() }));
      console.log(upiti, "UPITI", uniqueId());
      setNizupita(upiti);
    });
  }
  async function updateRandom(id) {
    updateDoc(doc(upitiRef, id), {
      random: uniqueId(),
    });
    getDocs(upitiRef).then((res) => {
      const upiti = res.docs.map((doc) => ({ ...doc.data() }));
      console.log(upiti, "UPITI", uniqueId());
      setNizupita(upiti);
    });
  }
  async function posaljiPorudzbinu() {
    let url = `mailto:bibijovano@gmail.com`;
    const nizKorpa = korpa.map((item) => {
      return `${item.Ime} - Kolicina: ${item.Kolicina}`;
    });
    // console.log(korpa)
    const id = uniqueId();
    // addDoc(upitiRef, id, {
    //   korpa: nizKorpa,
    //   id: id
    // });
    setDoc(doc(db, "upiti", id), {
      korpa: nizKorpa,
      id: id,
      random: uniqueId(),
    });
    setKorpa([]);

    const query = qs.stringify({
      subject: "Porudzbina sa aplikacije",
      body: `${nizKorpa}`,
    });

    // if (query.length) {
    //   url += `?${query}`;
    // }
    // const canOpen = await Linking.canOpenURL(url);

    // if (!canOpen) {
    //   throw new Error("Error prilikom slanja porudzbine");
    // }

    // return Linking.openURL(url);
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
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Upiti
      </Text>
      {nizUpita.map((upit) => (
        <View
          style={{
            width: "100%",
            borderColor: "blue",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Text>ID: {upit.id}</Text>
          <Text>Proizvodi: {upit.korpa}</Text>
          <Text>Random: {upit.random}</Text>
          {/* {upit.korpa.map((korpait)=>{
            <Text>{korpait}</Text>
          })} */}
          <TouchableOpacity
            onPress={() => {
              updateRandom(upit.id);
            }}
          >
            <Text
              style={{
                color: "blue",
                fontSize: 15,
                marginTop: 10,
              }}
            >
              Update random
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ukloniUpit(upit.id);
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 15,
                marginTop: 10,
              }}
            >
              Ukloni upit
            </Text>
          </TouchableOpacity>
        </View>
      ))}
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
