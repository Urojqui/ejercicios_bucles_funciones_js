/*Ejercicio 10

Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.*/

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    console.log("La capital de " + country + " es " + capitals[country]);
  } else {
    console.log("Este país no se encuentra en nuestra base de datos");
  }
}

getCapital("Ireland");
getCapital("Spain");
getCapital("Germany");
getCapital("Denmark");