const pet = {
  name: "Rex",
  happiness: 45,
  hunger:15,
  isAwake: true,
}

function feed(petobject) {
  if (petobject.hunger > 0) {
    petobject.hunger -= 10;
    petobject.happiness += 5;
    console.log(`${petobject.name} has been fed. Hunger is now ${petobject.hunger}. Happiness is now ${petobject.happiness}.`);
  } else {
    console.log(`${petobject.name} is not hungry.`);
  }
}
function play(petobject) {
  if (petobject.isAwake) {
    petobject.happiness += 10;
    console.log(`${petobject.name} is playing. Happiness is now ${petobject.happiness}.`);
  } else {
    console.log(`${petobject.name} is asleep and cannot play.`);
  }
}
function gotosleep(petobject) {
  petobject.isAwake = false;
  console.log(`${petobject.name} is now asleep.`);
}

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}:`);
    if (pet.hunger >= 60)
        feed(pet);
    else if (pet.happiness <= 50)
        play(pet);
    else if (pet.isAwake)
        gotosleep(pet);
}

pet.happiness = 30;
pet.hunger = 70;
pet.isAwake = true;


