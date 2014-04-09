var test = require('tape')
var bboxPolygon = require('./')

test('bboxPolygon', function(t){
  t.plan(2)

  var poly = bboxPolygon([0,0,10,10])

  t.ok(poly.geometry.coordinates, 'should take a bbox and return the equivalent polygon feature')
  t.equal(poly.geometry.type, 'Polygon', 'should be a Polygon geometry type')
})