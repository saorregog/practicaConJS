// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN STRING Y RETORNE LA CANTIDAD DE VOCALES QUE TIENE.

function vowelCount(string) {
  console.log(
    string
      .toUpperCase()
      .split("")
      .filter(function (element) {
        return (
          element === "A" ||
          element === "E" ||
          element === "I" ||
          element === "O" ||
          element === "U" ||
          element === "Á" ||
          element === "É" ||
          element === "Í" ||
          element === "Ó" ||
          element === "Ú"
        );
      }).length
  );
}

vowelCount("Lenguaje de programación");
