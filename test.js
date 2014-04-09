var t = require('../index'),
  should = require('should')

describe('bboxPolygon', function(){
  it('should take a bbox and return the equivalent polygon feature', function(done){
    t.bboxPolygon([0,0,10,10], function(err, poly){
      if(err) throw err
      poly.should.be.ok
      poly.geometry.type.should.equal('Polygon')
      poly.geometry.coordinates.should.be.ok
      done()
    })
  })
}) 

var test = require('tape');
var featureCollection = require('./')
var point = require('turf-point')

test('featureCollection', function(t){
  t.plan(7)

  var p1 = point(0,0, {name: 'first point'}),
        p2 = point(0,10),
        p3 = point(10,10),
        p4 = point(10,0)
  var fc = featureCollection([p1,p2,p3,p4])

  t.ok(fc);
  t.equal(fc.features.length, 4)
  t.equal(fc.features[0].properties.name, 'first point')
  t.equal(fc.type, 'FeatureCollection')
  t.equal(fc.features[1].geometry.type, 'Point')
  t.equal(fc.features[1].geometry.coordinates[0], 0)
  t.equal(fc.features[1].geometry.coordinates[1], 10)
});