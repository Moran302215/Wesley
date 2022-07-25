import ImageAPI from "./ai.js";

let analyse = document.getElementById("analyse1")
let img = "https://unsplash.com/photos/AKwRzpi_EOc"
let text = document.getElementById("analysistext")

let generate1 = document.getElementById("generate1")
let analyse1 = document.getElementById("analyse1")
let analyse2 = document.getElementById("analyse2")

let analysis = document.getElementById("analysis")

function randomImg() {
  document.getElementById("img-container").innerHTML =
  '<img src="https://source.unsplash.com/random/'+250+'x'+250+'">';
}
analyse2.addEventListener("click", randomImg);


//Generates a random image off unsplash when button on panel is clicked
// ? Function

function getError() {
  let issue = document.getElementById("issue").value;
  console.log(issue);
  alert("Thankyou for reporting: " + issue + ". We will look into this.");
}

let button = document.getElementById("buttonSubmit");
button.addEventListener("click", getError);
//Alerts when an issue is reported

async function analyseImage() {
  console.log("analysing")
  let img = document.getElementById("exampleimg").src;
  const data = await ImageAPI.analyseImage(img);
  if (data?.description?.captions[0]?.text) {
    analysistext.innerHTML = "This image contains: " + data.description.captions[0].text + "."
  }
}

analyse1.addEventListener("click", analyseImage);

//Analyses example image on page