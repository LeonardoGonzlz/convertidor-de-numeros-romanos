const ROMANOS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const DECIMALES =  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const VALOR_DECIMAL = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V":5, "IV": 4, "I":1}

function convertToRomano(num) {

  let result = "";

        if (num > 0){

          for (let i in DECIMALES){
              if (num % DECIMALES[i] != num){
                num -= DECIMALES[i]
                result += ROMANOS[i]
                break
              };
          };
        return result += convertToRomano(num)
         }
            else{
              return result
            };
};

var resultado = 0;

function convertToDecimal(romano){
  let numSumar;

  if (romano.substring(0, 2) == "CM" || romano.substring(0, 2) == "CD" || romano.substring(0, 2) == "XC" || romano.substring(0, 2) == "XL" || romano.substring(0, 2) == "IX" || romano.substring(0, 2) == "IV"){
    numSumar = romano.substring(0, 2);
  }else{
    numSumar = romano[0];
  }
  numSumar = VALOR_DECIMAL[numSumar]

  if (numSumar > 0){

    for(let i in DECIMALES){

      if(numSumar =>  DECIMALES[i]){

        resultado += numSumar
        let eliminar = ROMANOS[i].length
        romano = romano.slice(eliminar)

        return convertToDecimal(romano)

      }
    }
  }
  else{
    return resultado
  }
};




document.addEventListener("click", (e)=>{
  e.preventDefault();
  resultado = 0;
  let button = e.target.id
  let $romano = document.getElementById("romano");
  let $decimal =document.getElementById("decimal");

  if(button == "conversor-decimal" && parseInt($romano.value) != NaN){
    $decimal.value = convertToDecimal($romano.value.toUpperCase())
    if ($decimal.value == 0){
      $decimal.value = ""
      alert("verifica los datos e intentanlo nuevamente")
    }
  } 


  if (button == "conversor-romano" && parseInt($decimal.value) != NaN){
    $romano.value = convertToRomano(parseInt($decimal.value))

    if ($romano.value == ""){
      alert("verifica los datos e intentanlo nuevamente")
    }
  }

});