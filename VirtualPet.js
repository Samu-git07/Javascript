
// ======================================
// Part 1: Create the Pet Object
// ======================================

let pet = {
    name: "Rex",
    happiness: 50,
    hunger: 50,
    isAwake: true
};


// ======================================
// Part 2: Create the Functions
// ======================================

// Feed the pet
function feed(petObject) {

    petObject.hunger = petObject.hunger - 10;
    petObject.happiness = petObject.happiness + 5;

    console.log(`${petObject.name} is eating. Hunger down, happiness up!`);
}


// Play with the pet
function play(petObject) {

    petObject.happiness = petObject.happiness + 10;
    petObject.hunger = petObject.hunger + 5;

    console.log(`You are playing with ${petObject.name}. It seems happy!`);
}


// Put the pet to sleep
function goToSleep(petObject) {

    petObject.isAwake = false;

    console.log(`${petObject.name} is now sleeping.`);
}


// ======================================
// Part 3: Simulate 5 Hours
// ======================================

for (let i = 1; i <= 5; i++) {

    console.log(`--- Hour ${i} ---`);

    // Check hunger
    if (pet.hunger >= 60) {
        feed(pet);
    }

    // Check happiness
    if (pet.happiness <= 50) {
        play(pet);
    }

    // Time passes
    pet.happiness = pet.happiness - 2;
    pet.hunger = pet.hunger + 2;

    console.log(`Hunger: ${pet.hunger}`);
    console.log(`Happiness: ${pet.happiness}`);
}


// ======================================
// Final Status
// ======================================

console.log(`The day is over! ${pet.name}'s final status:`);

console.log(`Hunger: ${pet.hunger}`);
console.log(`Happiness: ${pet.happiness}`);
console.log(`Awake: ${pet.isAwake}`);