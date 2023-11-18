//Step 1: Create a variable with a random number from 0 to 9
let random = Math.floor(Math.random() * 10);

// Step 2: Create an array of adjectives
let adjectives = ['happy', 'exciting', 'colorful', 'playful', 'brilliant', 'mysterious', 'dynamic', 'vibrant', 'joyful', 'creative'];

// Step 3: Create an array of nouns
let nouns = ['cat', 'mountain', 'sunshine', 'river', 'robot', 'ocean', 'garden', 'unicorn', 'moon', 'book'];

// Step 4: Create an array of symbols
let symbols = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '-'];

// Step 5: Create variables for a new username and password
let newUsername = adjectives[random] + nouns[random];
let newPassword = adjectives[random] + symbols[random] + nouns[random];

// Display the results in the console
console.log('Random Number:', random);
console.log('Adjectives Array:', adjectives);
console.log('Nouns Array:', nouns);
console.log('Symbols Array:', symbols);
console.log('New Username:', newUsername);
console.log('New Password:', newPassword);
