function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  } else {
    return 'Please provide a valid distance.';
  }
}

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Test the functions
console.log(scuberGreetingForFeet(300)); // Output: This one is on me!
console.log(scuberGreetingForFeet(2200)); // Output: I will gladly take your thirty bucks.
console.log(scuberGreetingForFeet(3000)); // Output: No can do.
console.log(scuberGreetingForFeet(-100)); // Output: Please provide a valid distance.

console.log(ternaryCheckCity('NYC')); // Output: Ok, sounds good.
console.log(ternaryCheckCity('LA')); // Output: No go.

console.log(switchOnCharmFromTip('generous')); // Output: Thank you so much.
console.log(switchOnCharmFromTip('not as generous')); // Output: Thank you.
console.log(switchOnCharmFromTip('average')); // Output: Bye.
