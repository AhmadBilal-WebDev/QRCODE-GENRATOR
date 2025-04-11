const myText = document.getElementById("text");
console.log(myText);

const mySize = document.getElementById("sizes");
console.log(mySize);

const genrateBtn = document.getElementById("GenrateBtn");
console.log(genrateBtn);

const downloadBtn = document.getElementById("DownloadBtn");
console.log(downloadBtn);

const bodyDiv = document.querySelector(".BodyDiv");
console.log(bodyDiv);

let sizes = mySize.value;

function QRCodeLibarary() {
  bodyDiv.innerHTML = "";
  new QRCode(bodyDiv, {
    text: myText.value,
    height: sizes,
    width: sizes,
    colorLight: "#fff",
    colorDark: "#000",
  });
  // myText.value = "";
}

mySize.addEventListener("change", (event) => {
  sizes = event.target.value;
  if (myText.value.length > 0) {
    QRCodeLibarary();
  }
});

genrateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (myText.value.length > 0) {
    QRCodeLibarary();
  } else {
    alert("Fill the Input please");
  }
});

downloadBtn.addEventListener("click", () => {
  let myImg = document.querySelector("BodyDiv img");
  if (myImg !== null) {
    let imgAtt = myImg.getAttribute("src");
    downloadBtn.setAttribute("hrfe", imgAtt);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});
