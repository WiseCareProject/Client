import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Counter from 'react-native-counter';
import api from './../../../../api/requests';

class BigButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platformId: 1,
            temperature: 0
        }
    };

    componentWillMount() {
        api.getTemperature().then((res) => {
            this.setState({
                temperature: res.data.amount,
            });
        });
    };

    refreshData = () => {
        api.getTemperature().then((res) => {
            this.setState({
                temperature: res.data.amount,
            });
        });
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/bg-main-button.png')} style={styles.warp}>
                <View style={styles.spaces}>
                    <Image source={require('../../../../images/Main/arrow-right.png')}
                           style={[styles.arrow, {opacity: 0}]}/>
                    <TouchableOpacity style={styles.bigButton} onPress={() => this.refreshData()}>
                        <ImageBackground source={require('../../../../images/Main/bigbutton.png')}
                                         style={styles.buttonImage}>
                            <Counter end={this.state.temperature} sign={'°'} size={120}/>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Image source={require('../../../../images/Main/arrow-left.png')} style={styles.arrow}/>
                </View>

            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    warp: {
        height: '60%',
        marginTop: 10
    },
    spaces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90%',
        marginLeft: 10,
        marginRight: 10,
    },
    bigButton: {
        alignSelf: 'center',
        width: '78%',
    },
    buttonImage: {
        alignSelf: 'center',
        width: '77%',
        aspectRatio: 1,
    },
    btnText: {
        fontSize: 46,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 50,
        width: 120,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    arrow: {
        alignSelf: 'center',
        height: 35,
        width: 15,
    }
});

export default BigButton;