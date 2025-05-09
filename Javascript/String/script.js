function getInputs() {
    const input1 = document.getElementById('string1').value;
    const input2 = document.getElementById('string2').value;
    return{input1, input2};
}

function calcLength() {
    const {input1} = getInputs();
    display(input1.length);
}

function toUpper() {
    const {input1} = getInputs();
    display(input1.toUpperCase());
}

function toLower() {
    const{input1} = getInputs();
    display(input1.toLowerCase());
}

function calcCharAt() {
    const{input1} = getInputs();
    const position = parseInt(document.getElementById('position').value);
    display(input1.charAt(position));
}

function calcIndexOf() {
    const{input1} = getInputs();
    const character = document.getElementById("character1").value;
    display(input1.indexOf(character));
}

function calcLastIndexOf() {
    const{input1} = getInputs();
    const character = document.getElementById("character2").value;
    display(input1.lastIndexOf(character));
}

function concatenating() {
    const { input1, input2 } = getInputs();
    const result = input1.concat(" ", input2);
    display(result);
}

function trimString() {
    const{input1} = getInputs();
    display(input1.trim());
}

function findIncludes() {
    const{input1} = getInputs();
    const incString = document.getElementById("includes").value;
    display(input1.includes(incString));
}

function findStartsWith() {
    const{input1} = getInputs();
    const startString = document.getElementById("startsWith").value;
    display(input1.startsWith(startString));
}

function findEndsWith() {
    const{input1} = getInputs();
    const endString = document.getElementById("endsWith").value;
    display(input1.endsWith(endString));
}

function findSplit() {
    const{input1} = getInputs();
    const splitString = document.getElementById("split").value;
    display(input1.split(splitString));
}

function findSlice() {
    const{input1} = getInputs();
    const startIndex = document.getElementById("startindex").value;
    const endIndex = document.getElementById("endindex").value;
    if (startIndex !== "" && endIndex !=="") {
        display(input1.slice(startIndex, endIndex));
    } else if (startIndex) {
        display(input1.slice(startIndex));
    } 
}

function findSubstring() {
    const{input1} = getInputs();
    const startIndex = document.getElementById("startindex").value;
    const endIndex = document.getElementById("endindex").value;
    if (startIndex !== "" && endIndex !=="") {
        display(input1.substring(startIndex, endIndex));
    } else if (startIndex) {
        display(input1.substring(startIndex));
    } 
}

function display(result) {
    document.getElementById('display').value = result;
}

function clearFields() {
    location.reload();
}
