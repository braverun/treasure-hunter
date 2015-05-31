var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

var dimension = 400;

//Generates random numbers for x and y coordinates of treasure
var target = {
  x: getRandomNumber(dimension),
  y: getRandomNumber(dimension)
};

var clicks = 0;

$('#map').click(function (event) {
  clicks++; //Counts clicks
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  $('#distance').text(distanceHint);
});


var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY*diffY));
};

var getDistanceHint = function(distance) {
  if(distance < 10) {
    return 'Boiling Hot!';
  } else if (distance < 20) {
    return 'Really Hot';
  } else if (distance < 40) {
    return 'Hot';
  } else if (distance < 80) {
    return 'Warm';
  } else if (distance < 160) {
    return 'Cold';
  } else if (distance < 320) {
    return 'Really Cold';
  } else {
    return 'Freezing!';
  }
};
