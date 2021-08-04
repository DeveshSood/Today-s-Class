import React, { Component } from 'react';
import { Text, 
        View, 
        StyleSheet, 
        SafeAreaView,
        TouchableOpacity,
        StatusBar,
        ImageBackground,
        Image,
        Platform} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/bg.png')}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>ISS Tracker App</Text>
                    
                </View>
                <TouchableOpacity style={styles.routeCard}
                    onPress={()=>
                        this.props.navigation.navigate("IssLocation")
                    }>
                    <Text style={styles.routeText}>ISS Locator</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/iss_icon.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                    onPress={()=>
                        this.props.navigation.navigate("Meteors")
                    }>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/meteor_icon.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Updates</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/rocket_icon.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    titleText:{
        color:'white',
        fontSize:40
    },
    droidSafeArea:{
        marginTop: Platform.OS ==="android"? StatusBar.currentHeight: 0
    },
    titleBar:{
        justifyContent:"center",
        alignItems:"center",
        flex:0.15
    },
    routeCard:{
        marginLeft:50,
        marginRight:50,
        marginTop: 50,
        borderRadius:30,
        flex:0.25,
        backgroundColor:'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 30,
        color: 'black'
    },
    backgroundImage: {
        resizeMode: 'cover',
        flex: 1
    },
    iconImage:{
        height:200,
        width:200,
        resizeMode:"contain",
        position:"absolute",
        top:-80,
        right:20
    },
    knowMore:{
        color:"red",
        paddingLeft:30,
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        fontSize:15,
        color:"rgb(183, 183,183, 0.5)"
    }
})