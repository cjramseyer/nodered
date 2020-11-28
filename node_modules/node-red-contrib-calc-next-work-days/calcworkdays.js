var func = require('./lib/functions.js');
var moment = require('moment');// added moment.js library

module.exports = function(RED) {
    function CalcWorkDays(config) {
        RED.nodes.createNode(this,config);
        this.countdays = config.countdays;
        this.weekends = config.weekends;
        var node = this;
        node.on('input', function(msg) {
//-------------------------------------------
            //принимаем дату на вход
            //var tod = new Date(func.UTCdateToday(msg.date));
            var tod = new Date(moment.utc(msg.date));

            var holidays = []; //массив с праздничными днями
            holidays = msg.holidays;
            var workweekends = []; //массив с рабочими выходными днями (сб или вс перенесенные)
            workweekends = msg.workweekends||'';
            var originalDt = new Date(msg.date); //дата начала отсчета
            var results = []; //массив с результатами
            
            if (holidays.length>0) 
            {
            
                var firstdate = new Date(tod); //присваиваем дату начала отсчета
                var countnextworkdays = msg.countworkdays||node.countdays;

                if (countnextworkdays === 0) 
                    {
                        countnextworkdays = 7;
                    }

                var selectweekends = node.weekends||msg.typeweekend;
                
                switch(selectweekends) {
                    case 'satsun':
                    var fwek = 0;
                    var swek = 6;
                    break;
                  
                    case 'frisat':
                    var fwek = 5;
                    var swek = 6; 
                    break;
                  
                    case 'withoutweekends':
                    var fwek = 8;
                    var swek = 9; 
                    break

                    default:
                    var fwek = 5;
                    var swek = 6;
                    break;
                  }

                for (var i=0; i<Number(countnextworkdays); i++) //количество сколько следующих рабочих дней рассчитать
                    {
                        var j=false;
                        while (j==false)
                            {
                                //if (!(((firstdate.getDay()===fwek || firstdate.getDay()===swek) && !func.isHoliday(firstdate, workweekends)) || (firstdate.getDay()!==fwek && firstdate.getDay()!==swek && func.isHoliday(firstdate, holidays))))
                                if (!(((moment(firstdate).get('date')===fwek || moment(firstdate).get('date')===swek) && !func.isHoliday(firstdate, workweekends)) || (moment(firstdate).get('date')!==fwek && moment(firstdate).get('date')!==swek && func.isHoliday(firstdate, holidays))))
                                    {
                                        //results.push(new Date(firstdate));
                                        results.push(moment(firstdate));
                                        j = true;
                                    }
                                firstdate.setDate(firstdate.getDate()+1);
                            }     
                    }
                var resdt = [];
                msg.workdays=[];
                for (i in results) 
                    {
                        resdt=[];
                        resdt.push(results[i]);
                        resdt.push(Number(i)+1);
                        msg.workdays.push(resdt);
                    }
                    
                    node.send(msg);
            }
            else
            {
                node.error("Arrays holidays is empty!", msg);
            }             
    });
    }
    RED.nodes.registerType("calc-next-work-days",CalcWorkDays);
}