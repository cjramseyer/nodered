node-red-contrib-weekday
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> node to filter payload depending on whether the selected days of the week are met.

Install
-------

Using the Node Red palette manager.

Alternatively, run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-weekday

Usage
-------
Takes input payload and routes it to output 1 if the current date is on a selected day of the week.
Otherwise routes payload to output 2.
