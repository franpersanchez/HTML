

             document.getElementById("input").value="Inserte número";


function getVal() {
    numero = document.getElementById("input").value;
    

    primo=true;

for (let i=2; i<numero;i++){

    if (numero%i==0){
       primo= false;
    }
    

    }

    if (primo==true) {
        document.getElementById("demo").innerHTML = "El número "+numero+" es primo";
    } else {
        document.getElementById("demo").innerHTML = "El número "+numero+" no es primo";
    }

}

