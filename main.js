// assinging those race numbers
let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 18;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Your race starts at 9.30 AM and your race number is ${raceNumber}`)
} else if (!early && age > 18) {
  console.log('Late adults run at 11.00 AM');
} else if (age < 18) {
  console.log('Youth registrants run at 12:30 pm. Regardless of registration.');
} else {
  console.log ('Go to the registration desk.');
}