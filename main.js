
//Generates random numbers for x and y coordinates of treasure
var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

var dimension = 400;

var target = {
  x: getRandomNumber(dimension),
  y: getRandomNumber(dimension)
};

var clicks = 0;

//Runs every time the map is clicked
$('#map').click(function (event) {
  //Counts clicks
  clicks++;

  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);

  //Displays the distant hint in the dom
  $('#distance').text(distanceHint);
  
  /*Alerts a message when the distance between the click event and the treasure
  is less than 8*/
  if (distance < 8) {
    alert('You found the treasure in ' + clicks + ' clicks!');
  }
});

//Finds the distance between the click event and the treasure
var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY*diffY));
};


//Sets up messages to be diplayed depending on the distance of the click event from the treasure
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
