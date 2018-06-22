import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import api from './../../../../api/requests';

class Footer extends Component {
    constructor(props) {
        super(props);
    };

    showImage = () => {
        this.props.toggleAlert()
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.bg}>
                <View style={styles.items}>
                    <TouchableOpacity style={styles.bigButton} onPress={() => this.showImage()}>
                        <ImageBackground source={require('../../../../images/common/gallery.png')}
                                         style={styles.buttonImage}>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
};


const styles = StyleSheet.create({
    bg: {
        paddingTop: 70,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    items: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -150,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    bigButton: {
        width: '30%',
    },
    buttonImage: {
        alignSelf: 'center',
        width: '77%',
        aspectRatio: 1,
    },

});

export default Footer;