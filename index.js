const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {
    return [drivers [0], drivers [1]];
}
const returnLastTwoDrivers = function () {
    return [drivers [2], drivers[3]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (fareMultiplier) {
    return  function (fare) {
        return ((fareMultiplier) * (fare));
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
    }
