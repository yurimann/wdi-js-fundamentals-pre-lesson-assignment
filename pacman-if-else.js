var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }

}
