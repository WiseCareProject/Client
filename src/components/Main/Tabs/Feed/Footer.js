import React, { Component } from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import axios from "axios/index";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platformId: 1,
            plateAmount: 0,
            tankAmount: 0,
            amountFeed: 0
        }
    };


    componentWillMount() {
        let self = this;
        axios.get('http://52.38.156.227:8081/getFullDetails')
            .then(function (response) {
                self.setState({
                    showAlert: true,
                    plateAmount: response.data.plateAmount,
                    tankAmount: response.data.tankAmount
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.items}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.number}><Text style={{fontSize: 18}}>{this.state.amountFeed}g</Text></Text>
                    <Text style={styles.desc}>Amount Feeding</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.number_active}><Text style={{fontSize: 18}}>{this.state.tankAmount}%</Text></Text>
                    <Text style={styles.desc}>Current Tank</Text>

                    <Text style={styles.schedule}>Schedule Date</Text>
                    <Text style={styles.date}>16:54, 01-05-2018</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.number}><Text style={{fontSize: 18}}>{this.state.plateAmount}g</Text></Text>
                    <Text style={styles.desc}>Current Plate</Text>
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    number_active: {
        fontSize: 36,
        color: '#37e5ef',
        marginTop: -60,
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    schedule: {
        marginTop: 50,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    date: {
        color: '#fff',
        fontFamily: "SourceSansPro-Regular",
    },
    number: {
        marginTop: -70,
        fontSize: 33,
        color: '#4e6baf',
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
    },
    desc: {
        marginTop: -20,
        fontSize: 14,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
    }
});

export default Footer;