module.exports = function (RED) {
    function HolidayNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var Holidays = require('date-holidays')

        node.on('input', function (msg) {

            var types = [];

            if (config.typePublic)
                types.push('public');

            if (config.typeBank)
                types.push('bank');

            if (config.typeSchool)
                types.push('school');

            if (config.typeObservance)
                types.push('observance');

            if (config.typeOptional)
                types.push('optional');

            var hd = new Holidays(
                config.country,
                config.state,
                config.region,
                {
                    languages: config.languages,
                    types: types
                });

            var holiday = hd.isHoliday(msg.payload);
            var dayOfWeek = new Date(msg.payload).getDay().toString();
            var isWeekend = config.weekend.split(",").includes(dayOfWeek);
            
            if (!!holiday || isWeekend) {
                if (!!holiday)
                    msg.holiday = holiday;

                if (isWeekend)
                    msg.weekend = true;

                node.send([msg, null]);
            }
            else {
                node.send([null, msg]);
            }
        });
    }
    RED.nodes.registerType("holiday", HolidayNode);
}