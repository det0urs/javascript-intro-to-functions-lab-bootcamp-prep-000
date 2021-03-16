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