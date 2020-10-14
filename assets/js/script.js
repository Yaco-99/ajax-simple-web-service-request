generate();
function generate() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://thatsthespir.it/api", true);

  xhr.onload = function () {
    switch (this.status) {
      case 404:
        alert("403 FORBIDDEN - something went wrong");
        break;

      case 403:
        alert("403 FORBIDDEN - something went wrong");
        break;

      case 200:
        console.log("Succes");
        console.log(JSON.parse(this.responseText));
        break;
    }
  };

  xhr.send();

  async function getData() {
    let response = await fetch("https://thatsthespir.it/api");
    let data = await response.json();
    return data;
  }
  getData().then((data) => {
    document.getElementById(
      "quote"
    ).innerHTML = `${data.quote} <br/>-${data.author}`;
    document.getElementById("quoteImg").src = data.photo;
  });
}
