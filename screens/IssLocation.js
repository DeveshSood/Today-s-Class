import axios from 'axios';
import React, { Component } from 'react';
import { Platform, Text, View, SafeAreaView, ImageBackground, StyleSheet, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component {
    constructor(){
        super()
        this.state={
            location:{}
        }
    }

    componentDidMount(){
        this.getIssLocation();
    }

    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({location: response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    render() {
        if(Object.keys(this.state.location).length===0){
        return (
            <View>
                <Text>Loading...      Please Wait!</Text>
            </View>
        )
        }
        
        else{
            return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground style={styles.backGroundImage} source={require('../assets/bg.png')}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        ISS Location Screen!
                    </Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map}
                        region={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                            latitudeDelta:100,
                            longitudeDelta:100
                        }}
                    >
                    <Marker 
                        coordinate={{latitude:this.state.location.latitude, longitude:this.state.location.longitude}}>
                        <Image source={require('../assets/iss_icon.png')} style={{width:50, height:50}}></Image>
                        </Marker>
                    </MapView>
                </View>
                </ImageBackground>
            </View>
            )}
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    droidSafeArea: {
        marginTop: Platform.OS ==="android"? StatusBar.currentHeight: 0
    },

    backGroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },

    titleContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'yellow'
    },
    
    mapContainer:{
        flex:0.6
    },

    map:{
        width:'100%',
        height:'100%'
    }
})