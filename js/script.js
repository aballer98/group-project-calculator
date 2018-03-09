// input value

function addChar(input, character) {
  if (input.value == null || input.value == "0")
    input.value = character
  else
    input.value += character
}

//calculates  Cosine

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

//calculates  sin


function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

//calculates  tan

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

//calculates  sqrt


function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

//calculates  In

function ln(form) {
  form.display.value = Math.log(form.display.value);
}

//calculates  exp


function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

//calculates  substring

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1)
}

//calculates   %
var val = 0.0;

function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

//calculates '&#177'

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length)
  else
    input.value = "-" + input.value
}


//form  'this is the whole form including all elements'

function compute(form) {

  form.display.value = eval(form.display.value);
}

//form ''

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value)
}

//calculates ' calculates all elements and functions the results'

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
        ch != "(" && ch != ")" && ch != "%") {
        alert("invalid entry!")
        return false
      }
    }
  }
  return true
}
