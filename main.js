var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

var dimension = 400;

var target = {
  x: getRandomNumber(dimension),
  y: getRandomNumber(dimension)
};

var clicks = 0;

$("#map").click(function (event) {

});
