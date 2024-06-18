import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useKorpa } from "../../app/index";
import _ from "lodash";

const ProductItem = ({ item, kolicina }) => {
  const slicice = item.Slike.split(",");
  const router = useRouter();
  const [korpa, setKorpa] = useKorpa();

  function izbaciIzKorpe() {
    const newKorpa = _.without(korpa, item);

    setKorpa(newKorpa);
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        router.push("/product");
        router.setParams({
          idProd: item.ID,
        });
      }}
    >
      {/* {slicice.map(slicica=>(
            <Image source={{uri: slicica}}/>
        ))} */}
      <Image source={{ uri: slicice[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {item.Ime}
        </Text>
        {kolicina === false && (
          <Text style={{ color: "grey" }}>
            {item.Kategorije} - {item.Brand}
          </Text>
        )}
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.KratakOpis}
        </Text>
        {kolicina === true && <Text>Količina: {item.Kolicina}</Text>}
        {kolicina === true && (
          <TouchableOpacity
            onPress={() => {
              izbaciIzKorpe();
            }}
          >
            <Text style={styles.izbaci}>Izbaci iz korpe</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 101,
    borderBottomWidth: 1,
    borderColor: "#0064b9",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: Dimensions.get("window").width - 110,
    height: 80,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#0064b9",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  izbaci: {
    color: "red",
  },
});
export default ProductItem;
