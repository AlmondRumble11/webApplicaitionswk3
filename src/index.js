import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Ready!");
  runCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Ready after waiting!");
    runCode();
  });
}

function runCode() {
  //create elements
  //var i = 0;
  //var breeds = ["Vizsla", "Chow", "Chihuahua", "Dingo", "Bitbull"];
  for (var x = 0; x < 5; x++) {
    getDogPics();
  }
  /*  const containerDiv = document.createElement("div");
    const itemDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const wikiHeader = document.createElement("h1");
    const textPara = document.createElement("p");
    const wikiImg = document.createElement("img");
  
    //asssign classes to elements
    containerDiv.className = "container";
    itemDiv.className = "wiki-item";
    contentDiv.className = "wiki-content";
    imgDiv.className = "img-container";
    wikiHeader.className = "wiki-header";
    textPara.className = "wiki-text";
    wikiImg.className = "wiki-img";

    //add text to header and text box

    wikiHeader.innerHTML = breeds[i];

    wikiImg.src = "";
    textPara.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tellus vel molestie varius, risus neque gravida enim, vel vehicula sapien magna et nibh. Sed convallis eros et gravida vestibulum. Vivamus volutpat pellentesque massa, vitae consequat erat viverra eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut tellus gravida, vulputate est vitae, hendrerit lorem. Vestibulum malesuada rutrum turpis ac pulvinar. Donec nec semper eros.";

    //combine all
    itemDiv.appendChild(wikiHeader);
    contentDiv.appendChild(textPara);
    contentDiv.appendChild(imgDiv);
    imgDiv.appendChild(wikiImg);
    itemDiv.appendChild(contentDiv);
    containerDiv.appendChild(itemDiv);

    //add to webpage
    document.body.appendChild(containerDiv);

    i++;
    //
    //console.log(x);
  }
  getDogPics();*/
}

async function getDogPics() {
  //get breed list
  let urlBreeds = "https://dog.ceo/api/breeds/list/all";
  let res = await fetch(urlBreeds);
  let all = await res.json();

  //console.log(all.message);
  //console.log(Object.keys(all.message).length);

  //get random number to get a breed
  let num = Math.floor(Math.random() * Object.keys(all.message).length);
  console.log(num);
  console.log(Object.keys(all.message)[num]);

  //get the picture of the breed
  let urlPic =
    "https://dog.ceo/api/breed/" +
    Object.keys(all.message)[num] +
    "/images/random";
  let getPic = await fetch(urlPic);
  let pic = await getPic.json();
  console.log(pic.message);

  const containerDiv = document.createElement("div");
  const itemDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const wikiHeader = document.createElement("h1");
  const textPara = document.createElement("p");
  const wikiImg = document.createElement("img");

  //asssign classes to elements
  containerDiv.className = "container";
  itemDiv.className = "wiki-item";
  contentDiv.className = "wiki-content";
  imgDiv.className = "img-container";
  wikiHeader.className = "wiki-header";
  textPara.className = "wiki-text";
  wikiImg.className = "wiki-img";

  //add text to header and text box

  wikiHeader.innerHTML = Object.keys(all.message)[num].toUpperCase();

  wikiImg.src = pic.message;
  textPara.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tellus vel molestie varius, risus neque gravida enim, vel vehicula sapien magna et nibh. Sed convallis eros et gravida vestibulum. Vivamus volutpat pellentesque massa, vitae consequat erat viverra eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut tellus gravida, vulputate est vitae, hendrerit lorem. Vestibulum malesuada rutrum turpis ac pulvinar. Donec nec semper eros.";

  //combine all
  itemDiv.appendChild(wikiHeader);
  contentDiv.appendChild(textPara);
  contentDiv.appendChild(imgDiv);
  imgDiv.appendChild(wikiImg);
  itemDiv.appendChild(contentDiv);
  containerDiv.appendChild(itemDiv);

  //add to webpage
  document.body.appendChild(containerDiv);

  //console.log(dogInfo);
}