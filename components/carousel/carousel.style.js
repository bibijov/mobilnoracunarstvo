import {Dimensions, StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    image:{
        resizeMode:'cover',
        height:Dimensions.get('screen').height/2,
        width: Dimensions.get('screen').width
    },
    container:{
        flexDirection: 'row'
    },
    indicatorContainer:{
        position: 'absolute',
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        width: Dimensions.get('screen').width,
        bottom: 10,
        zIndex:2,
    },
    indicator:{
        width:15,
        height: 15,
        borderRadius: 7.5,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        
    },
    activeIndicator:{
        backgroundColor:"white"
    }
})

export default styles;