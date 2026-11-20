const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ai-gengar.png") {
    myImage.setAttribute("src", "images/Gengar.jpg");
  } else {
    myImage.setAttribute("src", "images/ai-gengar.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Ingresa tu nombre.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Gengar es el terror de la región de Kanto, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Gengar es el terror de la región de Kanto, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
