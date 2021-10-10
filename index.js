function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400) {
    return 'This one is on me!';
  }
  else if (x > 2000 && x <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (x > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(str){
  // Write your code here!
  if (str === "NYC") {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(str){
  // Write your code here!
  switch(str){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
  }
  

}