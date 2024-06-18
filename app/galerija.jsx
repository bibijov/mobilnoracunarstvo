import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Navigation from "../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const slikeBg = [
  {
    adresa: "Senjak",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Senjak.jpeg",
  },
  {
    adresa: "Topcidersko Brdo",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Topcidersko-Brdo.jpeg",
  },
  {
    adresa: "Vinca",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Vinca-1.jpeg",
  },
  {
    adresa: "Vinca",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Vinca-2.jpeg",
  },
  {
    adresa: "Vinca",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Vinca-3.jpeg",
  },
  {
    adresa: "Krfska Zvezdara",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Zvezdara-1.jpeg",
  },
  {
    adresa: "Krfska Zvezdara",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Zvezdara-2.jpeg",
  },
  {
    adresa: "Mis Irbijeva - Velizara Kosanovica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/05/Gradnja-Zvezdara-3.jpeg",
  },
  {
    adresa: "Vojvode Vlahovica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vojvode-Vlahovica-1.jpeg",
  },
  {
    adresa: "Vojvode Vlahovica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vojvode-Vlahovica.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Kaludjerica.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Kaludjerica-2.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Kaludjerica-3.jpeg",
  },
  {
    adresa: "Pancevo",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Pancevo-1.jpeg",
  },
  {
    adresa: "Pancevo",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Pancevo-2.jpeg",
  },
  {
    adresa: "Pancevo",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Pancevo-3.jpeg",
  },
  {
    adresa: "Milosa Zunica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Milosa-Zunica.jpeg",
  },
  {
    adresa: "Sava",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Sava.jpeg",
  },
  {
    adresa: "Vojvode Vlahovica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vojvode-Vlahovica-II.jpeg",
  },
  {
    adresa: "Vojvode Vlahovica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vojvode-Vlahovica-II-2.jpeg",
  },
  {
    adresa: "Pasmanska",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Pasmanska.jpeg",
  },
  {
    adresa: "Pasmanska",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Pasmanska-2.jpeg",
  },
  {
    adresa: "Veliki Mokri Lug",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-VML.jpeg",
  },
  {
    adresa: "Veliki Mokri Lug",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-VML-2.jpeg",
  },
  {
    adresa: "Veliki Mokri Lug",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-VML-3.jpeg",
  },
  {
    adresa: "Vitezova Karadjordjeve Zvezde",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vitezova-Karadjordjeve-Zvezde.jpeg",
  },
  {
    adresa: "Vitezova Karadjordjeve Zvezde",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Vitezova-Karadjordjeve-Zvezde-2.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-KLDJ.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-KLDJ-2.jpeg",
  },
  {
    adresa: "Kaludjerica",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-KLDJ-3.jpeg",
  },
  {
    adresa: "Kopaonicka",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Kopaonicka.jpeg",
  },
  {
    adresa: "Kopaonicka",
    url: "https://farbaralanekolor.rs/wp-content/uploads/2023/06/Gradnja-Kopaonicka-2.jpeg",
  },
];

const galerija = () => {
const [kojaGalerija, setGalerija] = useState("bgd");
  const [nizSlika, setNizSlika] = useState(slikeBg);
  const [isOverlay, setOverlay] = useState(false);
  const [whatImg, setWhatImg] = useState({ url: "", adresa: "" });
  const desiredWidth = Dimensions.get("screen").width;
  const [desiredHeight, setDesiredHeight] = useState(100);

  useEffect(() => {
    if (kojaGalerija === "bgd") {
      setNizSlika(slikeBg);
    } else if (kojaGalerija === "srb") {
      setNizSlika([]);
    }
  }, [kojaGalerija]);

  useEffect(() => {
    if (whatImg.url !== "") {
      Image.getSize(whatImg.url, (width, height) => {
        setDesiredHeight((desiredWidth / width) * height);
      });
    }
  }, [whatImg]);

  function nextImage() {
    const kojiIndex = nizSlika.findIndex((item) => item.url === whatImg.url);
    if (kojiIndex + 1 === nizSlika.length) {
      setWhatImg(nizSlika[0]);
    } else {
      setWhatImg(nizSlika[kojiIndex + 1]);
    }
  }

  function prevImage() {
    const kojiIndex = nizSlika.findIndex((item) => item.url === whatImg.url);
    if (kojiIndex - 1 === -1) {
      setWhatImg(nizSlika[nizSlika.length - 1]);
    } else setWhatImg(nizSlika[kojiIndex - 1]);
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
          headerTitle: "Galerija gradnje",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {nizSlika.map((slika) => (
            <TouchableOpacity
              key={slika.url}
              onPress={() => {
                setOverlay(true);
                setWhatImg(slika);
              }}
            >
              <Image
                source={{ uri: slika.url }}
                style={styles.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {isOverlay && (
        <View style={styles.overlay}>
          <View style={styles.overlayTop}>
            <EvilIcons
              name="arrow-left"
              size={50}
              color="white"
              onPress={prevImage}
            />
            <AntDesign
              name="close"
              size={50}
              color="white"
              onPress={() => {
                setOverlay(false);
                setWhatImg({ url: "", adresa: "" });
              }}
            />
            <EvilIcons
              name="arrow-right"
              size={50}
              color="white"
              onPress={nextImage}
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
            source={{ uri: whatImg.url }}
          />
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            {whatImg.adresa}
          </Text>
        </View>
      )}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBox: {
    width: Dimensions.get("screen").width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
  },
  topButton: {
    width: Dimensions.get("screen").width / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  topText: {
    fontSize: 20,
    color: "#fff",
  },
  container: {
    width: Dimensions.get("screen").width,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 50,
  },
  image: {
    width: Dimensions.get("screen").width / 3,
    height: undefined,
    aspectRatio: 1 / 1,
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
    zIndex: 111,
  },
});

export default galerija;
