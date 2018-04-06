import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';

class Login extends Component {

    handleEmail = (text) => {
        this.setState({email: text})
    }
    handlePassword = (text) => {
        this.setState({password: text})
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }

    render() {
        return (
            <ImageBackground source={require('./../images/Login/bg.png')} style={styles.backGround}>
                <View style={styles.header}>
                    <Image source={require('./../images/common/logo.png')} style={styles.logo}/>
                </View>

                <View style={styles.form}>
                    <Image source={require('./../images/Login/user-icon.png')} style={{height: 20, width: 20, top: 30}}/>
                    <Text style={styles.label}>USERNAME</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="Email"
                               placeholderTextColor="rgba(255,255,255,0.4)"
                               autoCapitalize="none"
                               onChangeText={this.handleEmail}/>

                    <Image source={require('./../images/Login/pass-icon.png')} style={{height: 17, width: 13, top: 30}} />
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="Password"
                               placeholderTextColor="rgba(255,255,255,0.4)"
                               autoCapitalize="none"
                               secureTextEntry
                               onChangeText={this.handlePassword}/>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Image source={require('./../images/Login/login-btn.png')} style={styles.submit}/>
                    </TouchableOpacity>

                    <Text style={styles.forgot}>
                        DON'T HAVE AN ACCOUNT? <Text style={{color: '#06b8f3'}}>SIGN UP</Text>
                    </Text>

                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        paddingTop: 90,
    },
    logo: {
        alignSelf: 'center',
        height: 65,
        width: 300,
        resizeMode: 'stretch'
    },
    form: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 90,
    },
    label: {
        fontSize: 11,
        color: '#405b94',
        fontWeight: 'bold',
        paddingLeft: 30,
    },
    input: {
        width: '100%',
        height: 40,
        paddingLeft: 30,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#3f5891',
        color: '#ffffff'
    },
    submit: {
        marginTop: 30,
        alignSelf: 'center',
        height: 55,
        width: '100%',
        resizeMode: 'stretch'
    },
    forgot: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 11,
        color: '#405b94',
        fontWeight: 'bold',
    }
});

export default Login;