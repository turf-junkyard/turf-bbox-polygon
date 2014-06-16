turf-bboxPolygon
================
[![Build Status](https://travis-ci.org/Turfjs/turf-bboxPolygon.svg?branch=master)](https://travis-ci.org/Turfjs/turf-bboxPolygon)

Takes a bbox and returns the equivalent polygon feature.

```javascript
var bboxPoly = require('turf-bbox-polygon')
var bbox = [0,0,10,10]

var poly = bboxPoly(bbox)
console.log(poly)
```