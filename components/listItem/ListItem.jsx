import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const ListItem = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        router.push("/proizvodi");
        router.setParams({
          kategorija: item.item,
        });
      }}
    >
      <Text style={styles.text}>{item.item}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#0064b9",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#0064b9",
    width: "auto",
  },
});
export default ListItem;
