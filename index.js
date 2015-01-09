var polygon = require('turf-polygon');

/**
* Takes a bbox and returns the equivalent polygon feature.
*
* @module turf/bbox-polygon
* @param {Array} bbox - Array of bounding box coordinates in the form: ```[xLow, yLow, xHigh, yHigh]```
* @return {Polygon} poly - A GeoJSON Polygon of the bounding box
* @example
* var bbox = [-97.52, 35.460, -97.5, 35.468];
*
* var poly = turf.bboxPoly(bbox);
*
* //=poly
*/

module.exports = function(bbox){
  var lowLeft = [bbox[0], bbox[1]];
  var topLeft = [bbox[0], bbox[3]];
  var topRight = [bbox[2], bbox[3]];
  var lowRight = [bbox[2], bbox[1]];

  var poly = polygon([[
    lowLeft,
    lowRight,
    topRight,
    topLeft,
    lowLeft
  ]]);
  return poly;
}
