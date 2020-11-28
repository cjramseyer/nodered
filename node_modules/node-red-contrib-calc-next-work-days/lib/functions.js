/*
function UTCdateToday(date) //приводим дату к UTC
{
    var tod = new Date(date);
    //var tod = new Date(2018, 2, 17);
    tod.setHours(0);
    tod.setMinutes(0);
    tod.setSeconds(0);
    tod.setMilliseconds(0);
    var result;
    result = Date.UTC(tod.getFullYear(), tod.getMonth(), tod.getDate(), tod.getHours(), tod.getMinutes(), tod.getSeconds());
    result = new Date(result);
    return result;
}
*/
var moment = require('moment');// added moment.js library
//проверяем попадает ли дата в массив праздников
function isHoliday(dt, arr){
    var bln = false;
        for ( var i = 0; i < arr.length; i++) {
            if (compare(dt, arr[i])) { //If days are not holidays
                bln = true;
                break;
                }
            }
            return bln;
        }
//функция для сравнения дат
function compare(dt1, dt2){
    var equal = false;
        //if(dt1.getDate() == dt2.getDate() && dt1.getMonth() == dt2.getMonth() && dt1.getFullYear() == dt2.getFullYear()) {
        if(moment(dt1).isSame(dt2, 'day')) {
             equal = true;
            }
        return equal;
        }
module.exports = {
    //UTCdateToday: UTCdateToday,
    isHoliday: isHoliday
    };