module.exports = function(RED) {
	function WeekdayNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.sun = config.sun;
		this.mon = config.mon;
		this.tue = config.tue;
		this.wed = config.wed;
		this.thu = config.thu;
		this.fri = config.fri;
		this.sat = config.sat;

		node.on('input', function(msg) {
			var now = new Date();
			var day = now.getDay();
			var allowed = false;
			switch (now.getDay()) {
				case 0 : { if (node.sun) { allowed = true; } break; }
				case 1 : { if (node.mon) { allowed = true; } break; }
				case 2 : { if (node.tue) { allowed = true; } break; }
				case 3 : { if (node.wed) { allowed = true; } break; }
				case 4 : { if (node.thu) { allowed = true; } break; }
				case 5 : { if (node.fri) { allowed = true; } break; }
				case 6 : { if (node.sat) { allowed = true; } break; }
			}
			if (allowed) {
				node.send([[msg],[]]);
			}else{
				node.send([[],[msg]]);
			}
		});
	}
	RED.nodes.registerType("weekday",WeekdayNode);
};
