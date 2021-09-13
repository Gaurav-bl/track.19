
const getData = () => {
    let country = document.getElementById("inputSearch").value;

    let res = fetch (
        `https://coronavirus-19-api.herokuapp.com/countries/${country}`
    )
    .then((response) => response.json())
    .then((data) => {
        let countryResponse = document.getElementById("country");
        countryResponse.innerHTML = data["country"];
        let casesResponse = document.getElementById("cases");
        casesResponse.innerHTML = data["cases"];
        let deathResponse = document.getElementById("death");
        deathResponse.innerHTML = data["deaths"];
        let recoverResponse = document.getElementById("recovered");
        recoverResponse.innerHTML = data["recovered"];
        console.log(data);
    }
    )
    .catch(
        (e) => {
        let countryResponse = document.getElementById("country");
        countryResponse.innerHTML = "404 - Not Found";
        let casesResponse = document.getElementById("cases");
        casesResponse.innerHTML = "";
        let deathResponse = document.getElementById("death");
        deathResponse.innerHTML = "";
        let recoverResponse = document.getElementById("recovered");
        recoverResponse.innerHTML = "";
        console.log(data);
    }
    );
}

let input = document.getElementById("inputSearch")

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    getData();
  }
}
);

if(input.value == "")
    {
        let res = fetch (
            `https://coronavirus-19-api.herokuapp.com/all`
        )
        .then((response) => response.json())
        .then((data) => {
            let countryResponse = document.getElementById("country");
            countryResponse.innerHTML = "Worldwide";
            let casesResponse = document.getElementById("cases");
            casesResponse.innerHTML = data["cases"];
            let deathResponse = document.getElementById("death");
            deathResponse.innerHTML = data["deaths"];
            let recoverResponse = document.getElementById("recovered");
            recoverResponse.innerHTML = data["recovered"];
            console.log(data);
        }
        )
    }

