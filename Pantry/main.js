function populate(s1,s2) { /*s1,s2 are variable to represent the two select elements on the page*/
  var s1 = document.getElementById(s1);/*Creating an Object so we dont have to keep repeating this*/
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if (s1.value =="Bread"){
    var optionArray = ["|","white|White","wheat|Wheat","other|Other"]; /* lower case white is value--Upper case White is label*/
  } else if (s1.value =="Drinks"){
    var optionArray = ["|","water|Water","pop|Pop","juice|Juice"];
  } else if (s1.value =="Produce")
    var optionArray = ["|","fruit|Fruit","vegitables|Vegitables","both|Both"];
  for (var option in optionArray) {/**/
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair [0];
    newOption.innerHTML = pair [1];
    s2.options.add(newOption);
  }

}