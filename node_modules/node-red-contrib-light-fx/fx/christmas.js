'use strict';

//const async = require('async');

module.exports = function(RED) {

    function AnamicoLightFxChristmas(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        const colours = [
            'FF0012',   // Vivid Red    https://www.schemecolor.com/christmas-red-and-green.php
            '00FF3E',   // Malachite
            '00B32C',   // Dark Pastel Green
            'FFD429',   // Sunglow
            '3FA9F5'    // Picton Blue
        ];
        var offset = 0;

        const statusColours = [
            'green',
            'red',
            'blue'
        ];

        node.nodeId = node.id.replace(/\./g, '_');
        node.festive = node.context().global.get(node.nodeId + '_festive');
        if (typeof node.festive  === 'undefined') {
            node.festive = true;
        }
        node.log('festive = ' + node.festive);

        node.lightNames = null;
        if (config.lightNames && config.lightNames.split) {
            node.lightNames = config.lightNames.split('\n').reduce(function(memo, name) {
                const trimmed = name.trim();
                if (trimmed.length > 0) {
                    memo.push(trimmed);
                }
                return memo;
            }, []);
        }

        if (!node.lightNames) {
            node.status({
                fill:   "red",
                shape:  "dot",
                text:   "You need at least one named light"
            });
            return;
        }
        node.status({});

        /**
         * timer to display christmas effects
         *
         * todo: make this more efficient
         */
        function festive() {
            offset = (offset + 1) % colours.length;
            var index = offset;
            node.status({
                fill:   statusColours[offset % 3],
                shape:  "dot",
                text:   "Festive"
            });
            node.lightNames.forEach(function (lightName) {

                node.send({
                    payload: {
                        lights: [ lightName ],
                        on: true,
                        hex: colours[index],
                        bri: 100
                    }
                });
                index = (index + 1) % colours.length;
            });
        }

        if (node.festive === true) {
            node.timer = setInterval(festive, 1000);
        }

        /**
         * handle inputs
         */
        node.on('input', function(msg) {
            if (msg.payload.on === true) {
                node.context().global.set(node.nodeId + '_festive', true);
                if (!node.timer) {
                    festive();
                    node.timer = setInterval(festive, 1000);
                }
            } else if (msg.payload.on === false) {
                node.context().global.set(node.nodeId + '_festive', false);
                if (node.timer) {
                    clearInterval(node.timer);
                    node.timer = null;
                    node.status({});
                }
            }
        });

        /**
         * clean up on node removal
         */
        node.on('close', function() {
            clearInterval(node.timer);
            node.timer = null;
        });
    }
    RED.nodes.registerType("AnamicoLightFxChristmas", AnamicoLightFxChristmas);
};
