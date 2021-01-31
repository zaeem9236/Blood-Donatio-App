import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const MainPage = ({ navigation }) => {
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
        getUserDetail(auth().currentUser.uid, setUserDetail);
    
    }, []);


    return (
        <>
            <View>
                <Text>Hi {userDetail.name}</Text>
                <Text>{userDetail.contact}</Text>
                <Text>{userDetail.age}</Text>
                <Text>{userDetail.city}</Text>
                <Text>{userDetail.email}</Text>
                <Text>{userDetail.password}</Text>
            </View>

            <View>
                <Text onPress={()=>{ navigation.navigate('DonateBlood')}}>Donate blood</Text>
            </View>
            
            <View>
                <Text onPress={()=>{ navigation.navigate('FindBlood')}}>Find Blood</Text>
            </View>

        </>
    );
};

function getUserDetail(uid, setUserDetail){
    // console.log(auth().currentUser)
    database().ref('/'+uid+'/userDetail/').once('value',function(data){
        console.log('--@--@--@--@--@--@--@--@')
       var a = JSON.stringify(data); // to convert JSON to string
       var b= JSON.parse(a) // to convert String into JSON object
        
        // console.log(data.age);
        setUserDetail(b);
    });
    // firebase.database().ref('blood-donation-app-47667-default-rtdb/').once('value', function (data) {

        // console.log(Object.entries(data.val()));
        
    // console.log(data);
}


const styles = StyleSheet.create({
    container1: {
        // backgroundColor: 'purple',
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainPage;
