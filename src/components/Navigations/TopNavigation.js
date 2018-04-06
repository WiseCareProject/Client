import {TabNavigator} from "react-navigation";
import Temp from "../Main/Tabs/Temp";
import Feed from "../Main/Tabs/Feed";
import Drink from "../Main/Tabs/Drink";

var topNavigator = TabNavigator({
    Tab1: {
        screen: Temp,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
    Tab2: {
        screen: Feed,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
    Tab3: {
        screen: Drink,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
}, {
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Tab2'
});

export default topNavigator;