import React from "react";
import { SafeAreaView, Text, Dimensions, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import ListItem from "../components/listItem/ListItem";
import Navigation from "../components/Navigation";

const listaKategorija = [
  "Alat",
  "Baštenski program",
  "Dekorativna tehnika",
  "Elektromaterijal",
  "Fasada",
  "Gipsarski program",
  "Gvožđarski program",
  "Hidroizolacija",
  "HTZ Oprema",
  "Keramičarski program",
  "Molerski program",
  "Premazi za beton",
  "Premazi za drvo i metal",
  "Program za domaćinstvo",
  "Protiv vlage-buđi-kondenza",
  "Pur pene",
  "Silikoni i lepkovi",
  "Sprejevi",
  "Tapete",
  "Trake",
  "Zidarski program",
];
const Kategorije = () => {
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
          headerTitle: "Kategorije",
        }}
      />

      <FlatList
        data={listaKategorija}
        renderItem={(item) => <ListItem item={item} />}
        keyExtractor={(item) => item}
        style={{ marginBottom: 50 }}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default Kategorije;
