# date-bengali-revised

> Revised Bengali Calendar

[![NPM version](https://badge.fury.io/js/date-bengali-revised.svg)](https://www.npmjs.com/package/date-bengali-revised/)
[![Build Status](https://api.travis-ci.com/commenthol/date-bengali-revised.svg?branch=master)](https://travis-ci.com/commenthol/date-bengali-revised)

Revised Bengali Calendar calculations with conversion from/ to Gregorian Date.  
The revised version of the Bengali calendar was officially adopted in Bangladesh in 1987.

The module supports:

- conversion from Gregorian Date to Bengali Date and vice versa
- conversion from javascript Date object to Bengali Date and vice versa
- formatting

Credits to Nuhil Mehdy for his project [bangla-calendar][].
The inital algorithm and the bengali names were taken from there. Thanks.

## Table of Contents

<!-- !toc (minlevel=2 omit="Table of Contents") -->

* [Usage](#usage)
  * [Construct a new Bengali Date](#construct-a-new-bengali-date)
  * [from Gregorian Date](#from-gregorian-date)
  * [to Gregorian Date](#to-gregorian-date)
  * [from Date](#from-date)
  * [to Date](#to-date)
  * [formatting](#formatting)
* [Contribution and License Agreement](#contribution-and-license-agreement)
* [License](#license)
* [References](#references)

<!-- toc! -->

## Usage

### Construct a new Bengali Date

**Parameters**

_year_: `{Number|String}`, bengali year in bengal or latin digits  
_month_: `{Number|String}`, bengali month  
_day_: `{Number|String}`, bengali day

```js
// ES5
import Calendar from 'date-bengali-revised'
// CommonJs
const Calendar = require('date-bengali-revised').default

let cal = new Calendar(1425, 1, 1)
//> { year: 1425, month: 1, day: 1}

// with bengali digits
cal = new Calendar('১৪২৫', '১', '১')
//> { year: 1425, month: 1, day: 1}

// with bengali month name
cal = new Calendar('১৪২৫', 'বৈশাখ', '১')
//> { year: 1425, month: 1, day: 1}
```

### from Gregorian Date

**Parameters**

_year_: `{Number}`, gregorian year  
_month_: `{Number}`, gregorian month  
_day_: `{Number}`, gregorian day

**Returns**: _this_ for chaining

```js
import Calendar from 'date-bengali-revised'
let cal = new Calendar()
cal.fromGregorian(2018, 4, 14)
//> { year: 1425, month: 1, day: 1}
```

### to Gregorian Date

Convert Bengali Date back to Gregorian Date

**Returns**: `{Object}` `{year, month, day}` as gregorian date

```js
let cal = new Calendar(1425, 1, 1)
let gdate = cal.toGregorian()
//> { year: 2018, month: 4, day: 14 }
```

### from Date

Calculate bengali calendar date from javascript Date object

**Parameters**

_date_: `{Date}` - javascript Date object

**Returns**: _this_ for chaining

```js
let cal = new Calendar()
let date = new Date('2018-04-14T06:00:00Z')
cal.fromDate(date)
//> { year: 1425, month: 1, day: 1}
```

### to Date

**Returns**: `{Date}` - javascript Date object

```js
let cal = new Calendar(1425, 1, 1)
let date = cal.toDate(date).toISOString()
//> '2018-04-14T06:00:00Z'
```

### formatting

**Parameters**

_formatStr_: `{String}` - formatting string

| Input | Description  |
| ----- | ------------ |
| Y     | Year with any number of digits and sign |
| Q     | Season Name  |
| M     | Month number |
| MMMM  | Month name   |
| D     | Day of month |
| dddd  | Day name     |

**Returns**: `{String}` formatted date

```js
let cal = new Calendar(1425, 1, 1)
cal.format()
//> '১ ১, ১৪২৫'
cal.format('dddd D MMMM, Y [Q]')
//> 'শনিবার ১ বৈশাখ, ১৪২৫ [গ্রীষ্ম]'
```

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your
code to be distributed under the MIT license. You are also implicitly
verifying that all code is your original work or correctly attributed
with the source of its origin and License.

## License

Copyright (c) 2018-present commenthol (MIT License)

See [LICENSE][] for more info.

## References

<!-- !ref -->

* [bangla-calendar][bangla-calendar]
* [LICENSE][LICENSE]

<!-- ref! -->

[LICENSE]: ./LICENSE
[bangla-calendar]: https://github.com/nuhil/bangla-calendar
