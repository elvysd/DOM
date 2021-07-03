var s = document.getElementById('s');
var options = [ '4', '8', '16' ];


options.forEach(function(element, key) {
  console.log(element + 1)
  if (element == '4') {
    s[s.options.length] = new Option(element, 4, false, true);

  }
  if (element == '8') {
    s[s.options.length] = new Option(element, 8, true, false); // Will add the "selected" attribute

  }
  if (element == '16') {
    s[s.options.length] = new Option(element, 16, true, false); // Will add the "selected" attribute
  }
});

r = 4;

document.getElementById('s').addEventListener('change', function (e) {
  console.log(e.target.value);
  if (e.target.value == 4) {
    console.log("adada");
    r = e.target.value;
    generate(r);
  }
  else if (e.target.value == 8) {
    console.log("adada");
    r = e.target.value;
    generate(r);
  }
  else if (e.target.value == 16) {
    console.log("adada");
    r = e.target.value;
    generate(r);
  }
  else {
    console.log("adddddd");
  }
})






