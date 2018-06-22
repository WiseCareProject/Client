import axios from "axios/index";

const isProduction = true;
const production = 'http://52.38.156.227:8081';
const sandbox = 'http://192.168.110.28:8081';

function getSystemStatus(self) {
    axios({
        method: 'get',
        url: (isProduction ? production : sandbox) + '/healthCheck',
    }).then(function (response) {
        let data = JSON.parse(response.data);
        Object.keys(data).forEach(function (key) {
            self.getDeviceStatus(key, data[key])
        });
        self.setState({
            // uniquePlatformId: response.data.uniquePlatformId,
            // uniquePlatformId: response.data.uniquePlatformId,
            isLoading: false
        });
    }).catch(function (error) {
        console.log(error)
    });
}

function getTemperature() {
    return axios.get((isProduction ? production : sandbox) + '/getTemperature')
        .catch(function (error) {
            console.log(error);
        });
}

function feedNow(self) {
    axios({
        method: 'get',
        url: (isProduction ? production : sandbox) + '/feedNow',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(function () {
            self.setState({
                showAlert: true
            });
        }).catch(function (error) {
        console.log(error);
    });
}

function getFoodDetails() {
    return axios.get((isProduction ? production : sandbox) + '/getFullDetails').catch(function (error) {
        console.log(error);
    });
}

function fillWater(self) {
    axios({
        method: 'get',
        url: (isProduction ? production : sandbox) + '/fillUpWater',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(function () {
            self.setState({
                showAlert: true
            });
        }).catch(function (error) {
        console.log(error);
    });
}

function getTempData(self) {
    return axios({
        method: 'post',
        url: (isProduction ? production : sandbox) + '/getUserSettings',
        data: {
            uniquePlatformId: self.platformId,
        }
    })
        .catch(function (error) {
            console.log(error);
        });
}

function getSetting(self) {
    axios({
        method: 'post',
        url: (isProduction ? production : sandbox) + '/getUserSettings',
        data: {
            uniquePlatformId: self.state.platformId,
        }
    })
        .then(function (response) {
            self.setState({
                uniquePlatformId: response.data.uniquePlatformId,
                isAutomated: response.data.isAutomated,
                defaultAmountOfFood: response.data.defaultAmountOfFood,
                maxTemperature: response.data.maxTemperature,
                lowTemperature: response.data.lowTemperature,
                feedingTime: response.data.feedingTime,
                isLoading: false,
            });
        }).catch(function (error) {
        console.log(error);
    });
}

function setSetting(self) {
    let amountFood = self.defaultAmountOfFood;
    return axios({
        method: 'post',
        url: (isProduction ? production : sandbox) + '/setUserSettings', // Local Or
        // headers: {Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
        data: {
            uniquePlatformId: self.platformId,
            isAutomated: self.isAutomated,
            defaultAmountOfFood: parseInt(amountFood.toString().split('g')[0]),
            maxTemperature: parseInt(self.maxTemperature),
            lowTemperature: parseInt(self.lowTemperature),
            feedingTime: self.feedingTime,
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function toggleVenta(data) {
    if (data == true) {
        axios.get((isProduction ? production : sandbox) + '/turnOnCooling');
    } else {
        axios.get((isProduction ? production : sandbox) + '/turnOffCooling');
    }
}

function toggleBlanket(data) {
    if (data == true) {
        axios.get((isProduction ? production : sandbox) + '/turnOnHeat');
    } else {
        axios.get((isProduction ? production : sandbox) + '/turnOffHeat');
    }
}

function takeSnapShop() {
    return axios.get((isProduction ? production : sandbox) + '/getSnapshot').catch((err) => {
        console.log(err);
    });
}

function waterStatus() {
    return axios.get((isProduction ? production : sandbox) + '/waterFloatingSwitchStatus').catch((err) => {
        console.log(err);
    });
}

module.exports = {
    getSystemStatus,
    getTemperature,
    feedNow,
    getFoodDetails,
    fillWater,
    waterStatus,
    getTempData,
    getSetting,
    setSetting,
    toggleVenta,
    toggleBlanket,
    takeSnapShop,
};