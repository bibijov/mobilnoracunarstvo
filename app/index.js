import React, { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
import {Stack, useRouter, Link } from 'expo-router'
import Carousel from '../components/carousel/Carousel';
// import Kategorije from '../components/kategorije/Kategorije'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const images = [
    'https://farbaralanekolor.rs/wp-content/uploads/2023/05/FLK-MOJE-BOJE.png'
]
const Home = () => {
    const router = useRouter();

    return(
        <SafeAreaView style={{flex: 1, 
            backgroundColor:"#fff",
            height: Dimensions.get('screen').height
            }}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor: "#fff"},
                    // headerShadowVisible: false,
                    // headerLeft: ()=>(
                    //     <ScreenHeaderBtn iconUrl={BiMenu} dimension="60%" />
                    // ),
                    headerTitle:"Lane Kolor & Gradnja",
                    headerShown: false
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View
                style={{
                    flex:1,
                    height:Dimensions.get('screen').height - 50,
                }}
                >
                    <Carousel images={images} /> 
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        height:(Dimensions.get('screen').height - 50)/4
                    }}>
                        <TouchableOpacity
                        style={[styles.touchable, styles.touchableAA]}
                        onPress={()=>{router.push('/proizvodi');
                        // router.setParams({
                        //     kategorija: "Molerski program"
                        // })
                    }}
                    >
                            <View style={styles.touchableView}>
                                    <Feather name="search" size={45} color="#ea5200" />
                                    <Text style={styles.touchableText}>Pretraga</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable, styles.touchableAB]}
                        onPress={()=>router.push(`/kategorije`)}
                        >   
                            <View style={styles.touchableView}>
                            <SimpleLineIcons name="book-open" size={45} color="#ea5200" />
                            <Text style={styles.touchableText}>Kategorije</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        height:Dimensions.get('screen').height/4
                    }}>
                        <TouchableOpacity style={[styles.touchable, styles.touchableBA]}
                        onPress={()=>router.push("/galerija")}
                        >
                        <View style={styles.touchableView}>
                        <Entypo name="image" size={45} color="#ea5200" />
                            <Text style={styles.touchableText}>Galerija</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[styles.touchable, styles.touchableBB]}
                        onPress={()=>router.push(`/kontakt`)}
                        
                        >
                        <View style={styles.touchableView}>
                        <MaterialIcons name="contact-phone" size={45} color="#ea5200" />
                            <Text style={styles.touchableText}>Kontakt</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    touchable:{
        width:"50%",
        height: "100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor:'white',
        borderStyle:'solid',
        backgroundColor:"#383e42"
    },
    touchableText:{
        textAlign:'center',
        color:"white",
        margin:10,
        fontSize: 20
    },
    touchableView:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    touchableAA:{
        borderLeftWidth: 0,
        borderTopWidth:2,
    },
    touchableAB:{
        borderTopWidth:2,
        borderRightWidth:0
    },
    touchableBA:{
        borderLeftWidth:0,
        borderBottomWidth:0,
    },
    touchableBB:{
        borderBottomWidth:0,
        borderRightWidth:0
    }

})
export default Home;