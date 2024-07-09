import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Navigation from "../components/Navigation";
import { TextInput } from "react-native-gesture-handler";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { ref, set } from "firebase/database";
import { database } from "../firebase";

const login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [emailR, setEmailR] = useState("");
    const [passR, setPassR] = useState("");

    function login(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          console.log("Uspešno ulogovan korisnik", user);
          console.log("Auth", auth);
        })
        .catch((error) => {
          
          return;
        });
    }
    function register(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailR, passR)
          .then(async (userCredential) => {
            console.log("Kreiran novi korisnik.");
            const user = userCredential.user;
            const userData = {
              email: emailR,
              id: user.uid,
              uloga: "user"
            };
            set(ref(database, 'korisnici/'+user.uid),{
                email: emailR,
                id: user.uid,
                uloga: "user"
            })
        })
            
    }

    function logout(){
        const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Korisnik izlogovan");
      })
      .catch((error) => {
        console.log("Error prilikom odjavljivanja");
      });
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
          headerTitle: "Login",
        }}
      />
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
            style={{
                margin:10,
                padding: 10,
                borderWidth: 2,
                borderColor: "blue",
                backgroundColor: "blue",
                borderRadius: 20,
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            onPress={()=>logout()}
        >
            <Text style={{
                color:"white",
                fontSize:20,
                fontWeight:600
            }}>
                Logout
            </Text>
        </TouchableOpacity>
        <View style={styles.contactBox}>
            <Text style={styles.h1}>Login</Text>
        </View>

        <TextInput
            onChangeText={(text)=>{setEmail(text)}}
            placeholder="Email"
            style={{
                padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          borderWidth: 2,
          borderColor:"blue",
          margin: 10,
          borderRadius: 20
            }}
        />
        <TextInput
            onChangeText={(text)=>{setPass(text)}}
            secureTextEntry={true}
            placeholder="Password"
            style={{
                padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          borderWidth: 2,
          borderColor:"blue",
          margin: 10,
          borderRadius: 20
            }}
        />
        <TouchableOpacity
            style={{
                margin:10,
                padding: 10,
                borderWidth: 2,
                borderColor: "blue",
                backgroundColor: "blue",
                borderRadius: 20,
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            onPress={()=>login()}
        >
            <Text style={{
                color:"white",
                fontSize:20,
                fontWeight:600
            }}>
                Potvrdi
            </Text>
        </TouchableOpacity>


        <View style={styles.contactBox}>
            <Text style={styles.h1}>Registracija</Text>
        </View>

        <TextInput
            onChangeText={(text)=>{setEmailR(text)}}
            placeholder="Email"
            style={{
                padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          borderWidth: 2,
          borderColor:"blue",
          margin: 10,
          borderRadius: 20
            }}
        />
        <TextInput
            onChangeText={(text)=>{setPassR(text)}}
            secureTextEntry={true}
            placeholder="Password"
            style={{
                padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          borderWidth: 2,
          borderColor:"blue",
          margin: 10,
          borderRadius: 20
            }}
        />
        <TouchableOpacity
            style={{
                margin:10,
                padding: 10,
                borderWidth: 2,
                borderColor: "blue",
                backgroundColor: "blue",
                borderRadius: 20,
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            onPress={()=>register()}
        >
            <Text style={{
                color:"white",
                fontSize:20,
                fontWeight:600
            }}>
                Registruj
            </Text>
        </TouchableOpacity>
      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: "#0064b9",
    marginRight: 20,
  },
  ime: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  kontakt: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  contactBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
export default login;
