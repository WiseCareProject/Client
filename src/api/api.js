import axios from "axios/index";

const isProduction = true;
const production = 'http://52.38.156.227:8081';
const sandbox = 'http://192.168.110.28:8081';

function toggleVenta(data) {
    if(data == true) {
        axios.get((isProduction ? production : sandbox) + '/turnOnCooling');
    } else {
        axios.get((isProduction ? production : sandbox) + '/turnOffCooling');
    }
}

function toggleBlanket(data) {
    if(data == true) {
        axios.get((isProduction ? production : sandbox) + '/turnOnHeat');
    } else {
        axios.get((isProduction ? production : sandbox) + '/turnOffHeat');
    }
}

function feedNow() {
    axios.get((isProduction ? production : sandbox) + '/feedNow');
}

function fillWater() {
    axios.get((isProduction ? production : sandbox) + '/fillUpWater');
}

function cleanScale() {
    axios.get((isProduction ? production : sandbox) + '/cleanScale');
}
function servoStop() {
    axios.get((isProduction ? production : sandbox) + '/stopServo');
}

module.exports = {
    toggleVenta,
    toggleBlanket,
    feedNow,
    fillWater,
    cleanScale,
    servoStop
};