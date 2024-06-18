import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { listaProizvoda } from "./listaProizvoda";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Navigation from "../components/Navigation";
import { useKorpa } from "./index";
import _ from "lodash";

const brendovi = [
  {
    ime: "ACM",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-ACM-ITALY.jpg",
  },
  {
    ime: "Albo",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-ALBO.jpg",
  },
  {
    ime: "Aquasan",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/aquasan_logo.png",
  },
  {
    ime: "Bekament",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-BEKAMENT.png",
  },
  {
    ime: "Beorol",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-BEOROL.jpg",
  },
  {
    ime: "Bison",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-BISON.png",
  },
  {
    ime: "Ceresit",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/ceresitLogo.png",
  },
  {
    ime: "D-C Fix/Alkor",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-DC-FIX.jpg",
  },
  {
    ime: "Daewoo",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/daewooLogo.png",
  },
  {
    ime: "Helios",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-HELIOS.png",
  },
  {
    ime: "Irkom",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-IRKOM.png",
  },
  {
    ime: "Isomat",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/isomatLogo.png",
  },
  {
    ime: "lynco",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/lyncoLogo.png",
  },
  {
    ime: "Maxima",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/maximaLogo.png",
  },
  {
    ime: "Rasch",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-RASCH.png",
  },
  {
    ime: "Schuller",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-SCHULLER.jpg",
  },
  {
    ime: "Sika",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/sikaLogo.png",
  },
  {
    ime: "TKK",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-TKK.png",
  },
  {
    ime: "Tolsen Tools",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-TOLSEN.jpg",
  },
  {
    ime: "Zorka Color",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-ZORKA.png",
  },
  {
    ime: "Zvezda",
    logo: "https://farbaralanekolor.rs/wp-content/uploads/2023/04/LOGO-ZVEZDA.png",
  },
];

const product = () => {
  const [korpa, setKorpa] = useKorpa();
  const { idProd } = useLocalSearchParams();
  const proizvod = listaProizvoda.find((item) => item.ID === idProd);
  const slicice = proizvod.Slike.split(", ");
  const prviOpis = proizvod.Opis.split(">");
  const drugiOpis = prviOpis[1]?.split("<");
  const logoURL = brendovi.find(({ ime }) => ime === proizvod.Brand).logo;
  const [isOverlay, setOverlay] = useState(false);
  const [whatImg, setWhatImg] = useState("");
  const desiredWidth = Dimensions.get("screen").width;
  const [desiredHeight, setDesiredHeight] = useState(100);
  const [kolicina, setKolicina] = useState(1);
  const [nizSlika, setNizSlika] = useState([]);

  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    if (whatImg !== "") {
      Image.getSize(whatImg, (width, height) => {
        setDesiredHeight((desiredWidth / width) * height);
      });
    }
  }, [whatImg]);

  function nextImage() {
    const kojiIndex = nizSlika.findIndex((item) => item === whatImg);
    if (kojiIndex + 1 === nizSlika.length) {
      setWhatImg(nizSlika[0]);
    } else {
      setWhatImg(nizSlika[kojiIndex + 1]);
    }
  }
  function prevImage() {
    const kojiIndex = nizSlika.findIndex((item) => item === whatImg);
    if (kojiIndex - 1 === -1) {
      setWhatImg(nizSlika[nizSlika.length - 1]);
    } else setWhatImg(nizSlika[kojiIndex - 1]);
  }

  function dodajUKorpu() {
    if (_.findIndex(korpa, { ID: proizvod.ID }) !== -1) {
      alert("Proizvod se vec nalazi u korpi!");
      return;
    }
    const korpObj = {
      ID: proizvod.ID,
      Ime: proizvod.Ime,
      Kategorije: proizvod.Kategorije,
      Brand: proizvod.Brand,
      Slike: slicice[0],
      Kolicina: kolicina,
    };

    setKorpa((currrent) => [...currrent, korpObj]);
    setIsAdded(true);
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
          headerTitle: proizvod.Ime,
        }}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity
            onPress={() => {
              setOverlay(true);
              setWhatImg(slicice[0]);
            }}
          >
            <Image style={styles.topImg} source={{ uri: slicice[0] }} />
          </TouchableOpacity>
          <View style={styles.topTextContainer}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.ime}>
              {proizvod.Ime}
            </Text>
            <Text style={{ color: "grey" }}>
              {proizvod.Kategorije} - {proizvod.Brand}
            </Text>
          </View>
        </View>
        {slicice.length > 1 && (
          <ScrollView horizontal style={styles.horizontal}>
            {slicice.map((slicica) => {
              const splitSlicica = slicica.split(",");
              return splitSlicica.map((novaSlic, index) => {
                if (novaSlic !== "" && novaSlic !== " ") {
                  if (!nizSlika.find((item) => item === novaSlic)) {
                    nizSlika.push(novaSlic);
                  }
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setOverlay(true);
                        setWhatImg(splitSlicica[index]);
                      }}
                      key={novaSlic}
                    >
                      <Image
                        source={{ uri: novaSlic }}
                        style={styles.topImg}
                        key={novaSlic}
                      />
                    </TouchableOpacity>
                  );
                }
              });
            })}
          </ScrollView>
        )}
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={styles.kolicinaNaslov}>Količina</Text>
          <View style={styles.kolicinaBox}>
            <TouchableOpacity
              style={styles.kolicinaDugme}
              onPress={() => setKolicina(kolicina - 1)}
            >
              <Text style={styles.kolDugText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.ukupno}>{kolicina}</Text>
            <TouchableOpacity
              style={styles.kolicinaDugme}
              onPress={() => setKolicina(kolicina + 1)}
            >
              <Text style={styles.kolDugText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.korpaDugme}
            onPress={() => dodajUKorpu()}
          >
            <Text style={styles.korpaText}>Dodaj u korpu</Text>
          </TouchableOpacity>
          {isAdded===true && (
            <Text style={styles.textSuccess}>
              Proizvod je uspešno dodat u korpu!
            </Text>
          )}
          <Text style={styles.title}>Kratak opis</Text>
          <Text style={styles.desc}>{proizvod.KratakOpis}</Text>
          <Text style={styles.title}>Opis</Text>
          <Text style={styles.desc}>
            {prviOpis.length === 1 ? prviOpis : drugiOpis[0]}
          </Text>
          {proizvod.Atr1 !== "" && (
            <Text style={styles.title}>Dodatne informacije</Text>
          )}
          {proizvod.Atr1 !== "" && (
            <Text style={styles.descTitle}>{proizvod.Atr1}</Text>
          )}
          {proizvod.Atr1 !== "" && (
            <Text style={styles.desc}>{proizvod.Atr1V}</Text>
          )}

          {proizvod.Atr2 !== "" && (
            <Text style={styles.descTitle}>{proizvod.Atr2}</Text>
          )}
          {proizvod.Atr2 !== "" && (
            <Text style={styles.desc}>{proizvod.Atr2V}</Text>
          )}

          {proizvod.Atr3 !== "" && (
            <Text style={styles.descTitle}>{proizvod.Atr3}</Text>
          )}
          {proizvod.Atr3 !== "" && (
            <Text style={styles.desc}>{proizvod.Atr3V}</Text>
          )}
          <Text style={styles.title}>Brend - {proizvod.Brand}</Text>
          <Image
            source={{ uri: logoURL }}
            style={{ height: 150, resizeMode: "contain" }}
          />
        </View>
      </ScrollView>
      <Navigation />
      {isOverlay && (
        <View style={styles.overlay}>
          <View style={styles.overlayTop}>
            <EvilIcons
              name="arrow-left"
              size={50}
              color={nizSlika.length > 1 ? "white" : "black"}
              onPress={() => {
                if (nizSlika.length > 1) {
                  prevImage();
                }
              }}
            />
            <AntDesign
              name="close"
              size={50}
              color="white"
              onPress={() => {
                setOverlay(false);
                setWhatImg("");
              }}
            />

            <EvilIcons
              name="arrow-right"
              size={50}
              color={nizSlika.length > 1 ? "white" : "black"}
              onPress={() => {
                if (nizSlika.length > 1) {
                  nextImage();
                }
              }}
            />
          </View>
          <Image
            style={[
              styles.overlayImg,
              {
                height: desiredHeight,
                width: desiredWidth,
              },
            ]}
            source={{ uri: whatImg }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topImg: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  topTextContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: Dimensions.get("screen").width - 120,
    marginLeft: 10,
  },
  ime: {
    fontSize: 20,
    color: "#0064b9",
  },
  horizontal: {
    height: 102,
    borderTopColor: "#383e42",
    borderTopWidth: 1,
    borderBottomColor: "#383e42",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    color: "#0064b9",
  },
  desc: {
    fontSize: 15,
    marginBottom: 10,
  },
  descTitle: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "500",
  },
  overlay: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-start",
  },
  overlayImg: {
    resizeMode: "cover",
  },
  overlayTop: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kolicinaBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  korpaDugme: {
    backgroundColor: "#0064b9",
    padding: 10,
    borderRadius: 100,
    marginBottom: 15,
  },
  korpaText: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
  kolicinaNaslov: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 10,
  },
  kolicinaDugme: {
    backgroundColor: "#0064b9",
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    width: 30,
    height: 30,
  },
  kolDugText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    margin: 0,
  },
  ukupno: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  textSuccess: {
    color: "green",
    textAlign: "center",
  },
});
export default product;
