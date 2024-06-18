import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { listaProizvoda } from "./listaProizvoda";
import { Stack, useLocalSearchParams } from "expo-router";
import ListItem from "../components/listItem/ListItem";
import ProductItem from "../components/productItem/ProductItem";
import _ from "lodash";
import Navigation from "../components/Navigation";

const proizvodi = () => {
  const [lista, setLista] = useState(listaProizvoda);
  const [searchQuery, setSearchQuery] = useState("");
  const { kategorija } = useLocalSearchParams();
  const handleSearch = (event) => {
    setSearchQuery(event);
  };
  useEffect(() => {
    if (searchQuery === "") {
      if (kategorija === null || kategorija === undefined) {
        setLista(listaProizvoda);
      } else {
        const novaLista = listaProizvoda.filter((item) => {
          return item.Kategorije.includes(kategorija);
        });
        setLista(novaLista);
      }
    } else {
      if (searchQuery === undefined) return;
      const searchList = lista.filter((item) => {
        return (
          item.Ime.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
          item.Brand.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        );
      });
      setLista(searchList);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (kategorija !== null && kategorija !== undefined) {
      const novaLista = listaProizvoda.filter((item) => {
        return item.Kategorije.includes(kategorija);
      });
      setLista(novaLista);
    }
  }, []);

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
          headerTitle:
            kategorija === null || kategorija === undefined
              ? "Proizvodi"
              : kategorija,
        }}
      />
      <TextInput
        onChangeText={(text) => handleSearch(text)}
        placeholder="Pretražite proizvode"
        placeholderTextColor={"#ea5200"}
        style={{
          padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          color: "black",
          borderBottomWidth: 2,
          borderBottomColor: "#ea5200",
          fontWeight: "600",
          textAlign: "center",
        }}
      />

      <FlatList
        data={lista}
        renderItem={(item) => <ProductItem item={item.item} kolicina={false} />}
        keyExtractor={(item) => item.ID}
        style={{ marginBottom: 50 }}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default proizvodi;
