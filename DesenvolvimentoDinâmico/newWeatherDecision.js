// varável que representa a previsão do tempo
// pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)

let weatherForecast = "cloudy";

// analogia com a vida real: decidindo se devemos levar um guarda-chuva
if (weatherForecast === "rainy") { // se
    console.log("Devemos levar um guarda-chuva!");
} else if (weatherForecast === "cloudy") { // se não se
    console.log("Por segurança, devemos levar um guarda-chuva!");
} else { // senão
    console.log("Não precisamos levar um guarda-chuva!");
}
