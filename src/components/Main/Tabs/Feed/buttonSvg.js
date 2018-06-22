import React, {Component} from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class SvgButton extends Component {
    render() {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width="250px" height="250px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-eclipse" style="background: none;">
                <Circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.2)"/>
                <Path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#41eeee" transform="rotate(229.27 50 51)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="4s" begin="0s" repeatCount="indefinite"/>
                </Path>
                <Path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#00b3f3" transform="rotate(327.809 50.0001 51)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"/>
                </Path>
                <Text style="font-family: SourceSansPro-ExtraLight; font-size: 22px" x="27" y="47" fill="white">FEED</Text>
                <Text style="font-family: SourceSansPro-ExtraLight; font-size: 22px" x="27" y="70" fill="white">NOW</Text>
            </Svg>
        );
    }
}

export default SvgButton;