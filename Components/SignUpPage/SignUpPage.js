
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [userDetail, setUserDetail] = useState({ email: '', password: '', name: '', age: '', city: '', contact: ''});

    useEffect(() => {
    }, []);







    return (

        <>
            <View>

                <TextInput
                    placeholder='enter email'
                    onChangeText={(e) => { setEmail(e); setUserDetail({ ...userDetail, email: e }) }}
                    value={email}
                />

                <TextInput
                    placeholder='enter password'
                    onChangeText={(e) => { setPassword(e); setUserDetail({ ...userDetail, password: e }) }}
                    value={password}
                />

                <TextInput
                    placeholder='enter full name'
                    onChangeText={(e) => { setName(e); setUserDetail({ ...userDetail, name: e }) }}
                    value={name}
                />

                <TextInput
                    placeholder='contact number'
                    onChangeText={(e) => { setContact(e); setUserDetail({ ...userDetail, contact: e }) }}
                    value={contact}
                />
                
                <TextInput
                    placeholder='enter age'
                    onChangeText={(e) => { setAge(e); setUserDetail({ ...userDetail, age: e }) }}
                    value={age}
                />

                <TextInput
                    placeholder='enter city'
                    onChangeText={(e) => { setCity(e); setUserDetail({ ...userDetail, city: e }) }}
                    value={city}
                />

                <Button
                    title="register"
                    onPress={() => {

                        console.log(userDetail.email);
                        console.log(userDetail.password);
                        RegisterUser(userDetail.email, userDetail.password, userDetail);
                    }}
                />

            </View>
        </>
    );
};

function RegisterUser(email, password, userDetail) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('User account created & signed in!');
            if (data.additionalUserInfo.isNewUser === true) {
                createDatabaseForUser(data.user.uid, userDetail);
            }
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Email already exists', 'That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert('invalid email', 'That email address is invalid!');
            }

            console.log(error);
        });
}

function createDatabaseForUser(uid, userDetail){
    database().ref('/'+uid).child('userDetail').set(userDetail)
    // console.log(uid)
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

export default SignUpPage;
