import React, { Component } from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import api from './../../../../api/requests';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platformId: 1,
            plateAmount: 0,
            tankAmount: 0,
        }
    };


    componentWillMount() {
        api.getFoodDetails().then((res) => {
            this.setState({
                plateAmount: res.data.plateAmount,
                tankAmount: res.data.tankAmount
            })
        });
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.items}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.number}>{this.state.plateAmount < 0 ? 0 : parseInt(this.state.plateAmount)}<Text style={{fontSize: 18}}>%</Text></Text>
                    <Text style={styles.desc}>Tank Amount</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    {/*<Text style={styles.number_active}>{this.state.tankAmount}<Text style={{fontSize: 18}}>%</Text></Text>*/}
                    {/*<Text style={styles.desc}>Current Tank</Text>*/}

                    <Text style={styles.schedule}>Next Schedule Feed</Text>
                    <Text style={styles.date}>16:54, 01-05-2018</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.number}>{this.state.tankAmount < 0 ? 0 : parseInt(this.state.tankAmount)}<Text style={{fontSize: 18}}>g</Text></Text>
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
        fontSize: 28,
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
        color: '#4e6baf',
        marginBottom: 25,
        fontSize: 28,
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