//saldos de integrantes.
var $saldoLuis;
var $saldoAmalia;
var $saldoFernanda;
var $saldoTodos = $saldoLuis + $saldoAmalia + $saldoFernanda;

//servicios.



//función calcular.
var $form = document.getElementById("form");

$form.addEventListener("submit", function(event) {
    var $luz = parseInt(document.getElementById("luz").value);
    console.log($luz);
    var $gas = parseInt(document.getElementById("gas").value);
    var $agua = parseInt(document.getElementById("agua").value);
    var $internet = parseInt(document.getElementById("internet").value);
    var $abl = parseInt(document.getElementById("abl").value);
    var $comida = parseInt(document.getElementById("comida").value);
    var $cuenta = $luz + $gas + $agua + $internet + $abl + $comida;

    document.getElementById("total").innerHTML = "Total $" + $cuenta;

    
    console.log(document.getElementById("luz").value);
    // console.log(parseInt($luz));
    event.preventDefault();
})
