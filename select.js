var s = document.getElementById('s');
var options = [ 'zero', 'one', 'two' ];

options.forEach(function(element, key) {
  if (element == 'zero') {
    s[s.options.length] = new Option(element, s.options.length, false, false);
  }
  if (element == 'one') {
    s[s.options.length] = new Option(element, s.options.length, true, false); // Will add the "selected" attribute
  }
  if (element == 'two') {
    s[s.options.length] = new Option(element, s.options.length, false, true); // Just will be selected in "view"
  }
});