let firstName = "Jane";
let lastName = "Doe";
const birthYear = 1990;
let isLoggedIn = true;

function createUserProfile(userBirthYear, userName) {
    const age = 2026 - userBirthYear;

    const profileSummary = `Welcome, ${userName}! You are ${age} years old.`;

    return profileSummary;
}

const fullName = firstName + " " + lastName;

const userMessage = createUserProfile(birthYear, fullName);

console.log(userMessage);

console.log(isLoggedIn ? "Status: Online" : "Status: Offline");