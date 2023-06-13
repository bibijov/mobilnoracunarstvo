import React from 'react'
import {SafeAreaView, Text, Dimensions, View, StyleSheet, ScrollView, Linking} from 'react-native'
import {Stack, useRouter } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {MaterialIcons} from "@expo/vector-icons"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navigation from '../components/Navigation';

const kontakt = () => {
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:"#fff",
        height:Dimensions.get('screen').height,
        
    }}>
    <Stack.Screen
                options={{
                    headerStyle:{backgroundColor: "#fff"},
                    headerShadowVisible: true,
                    // headerLeft: ()=>(
                    //     <ScreenHeaderBtn iconUrl={BiMenu} dimension="60%" />
                    // ),
                    headerTitle:"Kontakt",
                    // headerShown: false
                }}
            />
    <ScrollView style={{
        width:"100%",
        height:"100%",
        padding: 10,
        marginBottom: 50
    }}>
        <View style={styles.contactBox}>
         <Text style={styles.h1}>Farbara Lane Kolor</Text>
            <FontAwesome5 name="paint-roller" size={30} color="#0064b9" />
        </View>
        <View
        style={styles.contactBox}
        >
            <MaterialCommunityIcons name="web" size={24} color="#ea5200" />
            <Text style={styles.kontakt}
            onPress={()=>{Linking.openURL("https://farbaralanekolor.rs")}}
            >farbaralanekolor.rs</Text>
        </View>
        <Text style={styles.ime}>Bulevar Revolucije 41</Text>
        <View
        style={styles.contactBox}
        >
        <FontAwesome name="phone" size={24} color="#ea5200" />
        <Text 
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('tel:0114085781')}}
        >011 408 5781</Text>
        </View>
        <View
        style={styles.contactBox}
        >
        <FontAwesome name="phone" size={24} color="#ea5200" />
        <Text 
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('tel:0648012204')}}
        >064 801 2204</Text>
        </View>
        <View style={styles.contactBox}>
        <Ionicons name="mail" size={24} color="#ea5200" />
        <Text
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('mailto:lanekolor@gmail.com')}}
        >
            lanekolor@gmail.com
        </Text>
        </View>
        <Text style={styles.ime}>Mirka Sandića 205b</Text>
        <View
        style={styles.contactBox}
        >
        <FontAwesome name="phone" size={24} color="#ea5200" />
        <Text 
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('tel:0116305325')}}
        >011 630 5325</Text>
        </View>
        <View style={styles.contactBox}>
        <Ionicons name="mail" size={24} color="#ea5200" />
        <Text
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('mailto:lanekolor2@gmail.com')}}
        >
            lanekolor2@gmail.com
        </Text>
        </View>
        <View style={styles.contactBox}>
         <Text style={styles.h1}>Lane Gradnja</Text>
         <MaterialIcons name="construction" size={30} color="#0064b9" />
         <FontAwesome name="home" size={30} color="#0064b9" />
        </View>
        <View style={styles.contactBox}>
        <MaterialCommunityIcons name="web" size={24} color="#ea5200" />
        <Text style={styles.kontakt}
            onPress={()=>{Linking.openURL("https://lanegradnja.rs")}}
            >lanegradnja.rs</Text>
        </View>
        <View
        style={styles.contactBox}
        >
        <FontAwesome name="phone" size={24} color="#ea5200" />
        <Text 
        style={styles.kontakt}
        onPress={()=>{Linking.openURL('tel:0640002940')}}
        >064 000 2940</Text>
        </View>
    </ScrollView>
    <Navigation/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    h1:{
        fontSize: 30,
        color:"#0064b9",
        marginRight: 20
    },
    ime:{
        fontSize:20,
        marginBottom: 5,
        marginTop: 5,
        textDecorationStyle:"solid",
        textDecorationLine:'underline',

    },
    kontakt:{
        fontSize: 17,
        marginLeft: 10,
        marginTop:5,
        marginBottom:5
    },
    contactBox:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    }
})
export default kontakt