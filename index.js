function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
var uppercase, lowercase;

function logShout(string) {
  string.toUpperCase();
  string=uppercase;
  console.log(uppercase);
}
function logShout(string){
uppercase=string.toUpperCase();
string=uppercase;
console.log (uppercase);
}
function logWhisper(string){
lowercase=string.toLowerCase();
string=lowercase;
console.log (lowercase);
}
function sayHiToGrandma(string) {
  if(string.toLowerCase()===string){
    return "I can't hear you!";
    }if(string.toUpperCase()===string){
      return "YES INDEED!";
    }
  }
}