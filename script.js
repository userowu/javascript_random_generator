var title = document.getElementById("title");
var button = document.getElementById("button");
var genshin_food = document.getElementById("output");
var regionInput = document.getElementById("input");

var mondstadt = ["Mondstadt Grilled Fish", "Northern Apple Stew", "Mushroom Pizza",
"Flaming Red Bolognese", "Pile 'Em Up", "Barbatos Ratatouille", "Sweet Madame",
"Goulash"];

var liyue = ["Adeptus' Temptation", "Tianshu Meat", "Bamboo Shoot Soup", "Jueyun Chili Chicken",
"Lotus Flower Crisp", "Triple-Layered Consomme", "Jade Parcels", "Rice Buns"];

var inazuma = ["Unagi Chazuke", "Tricolor Dango", "Sashimi Platter", "Katsu Sandwich",
"Dry-Braised Salted Fish", "Tri-Flavored Skewer", "Invigorating Kitty Meal", "Rainbow Aster"]

var sumeru = ["Aaru Mixed Rice", "Baklava", "Tahchin", "Padisarah Pudding", "Pita Pocket",
"Panipuri", "Mushroom Hodgepodge", "Butter Chicken", "Shawarma Wrap", "Tandoori Roast Chicken"];

var random = mondstadt.concat(liyue, inazuma, sumeru);

button.addEventListener("click", generate);
button.addEventListener("click", restyle);


function generate() {
  var userInput = input.value;

  if (userInput.toLowerCase() == "mondstadt") {
    genshin_food.innerHTML = mondstadt[Math.floor(Math.random() * mondstadt.length)];
  }

  else if (userInput.toLowerCase() == "liyue") {
    genshin_food.innerHTML = liyue[Math.floor(Math.random() * liyue.length)];
  }

  else if (userInput.toLowerCase() == "inazuma") {
    genshin_food.innerHTML = inazuma[Math.floor(Math.random() * inazuma.length)];
  }

  else if (userInput.toLowerCase() == "sumeru") {
    genshin_food.innerHTML = sumeru[Math.floor(Math.random() * sumeru.length)];
  }

  else if (userInput.toLowerCase() == "random") {
    genshin_food.innerHTML = random[Math.floor(Math.random() * random.length)];
  }

  else {
    genshin_food.innerHTML = "pls type a region listed above"
  }

}

hexColors = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF",
"#40E0D0", "#6495ED", "#CCCCFF"]

function restyle() {
  var fontVal = Math.floor(Math.random() * (5 - 3) + 3);
  var strFontval = fontVal.toString() + "vw";
  genshin_food.style.fontSize = strFontval;

  var hShadow = Math.random() * 10;
  var vShadow = Math.random() * 10;
  var blur = Math.random() * 10;
  var randColor = hexColors[Math.floor(Math.random() * hexColors.length)];
  genshin_food.style.textShadow = hShadow + "px " + vShadow + "px " + blur + "px " + randColor

  var randRed = Math.random() * 255;
  var randGreen = Math.random() * 255;
  var randBlue = Math.random() * 255;
  var strRGB = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
  genshin_food.style.color = strRGB;


}
