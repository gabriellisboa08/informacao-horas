/** @format */

function carregar() {
    //função carregar chama a função Verificar hora
    VerificarHora();
}
function VerificarHora() {
    if (formatarHora() >= 0 && formatarHora() < 12) {
        var divmsg = document.getElementById("msg");
        var foto = document.getElementById("foto");
        divmsg.innerText = `Bom dia! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas `;
        foto.src = "manha.png"; //carregando a imagem dentro da div
        document.body.style.background = "#e2cd9f"; //aolicando CSS via JS
    } else if (formatarHora() >= 12 && formatarHora() < 18) {
        var divmsg = document.getElementById("msg");
        var foto = document.getElementById("foto");
        divmsg.innerText = `Boa tarde! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas`;
        foto.src = "tarde.png";
        document.body.style.background = "#b9846f";
    } else if (formatarHora() >= 18 && formatarHora() <= 23) {
        var divmsg = document.getElementById("msg");
        var foto = document.getElementById("foto");
        divmsg.innerText = `Boa noite! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas`;
        foto.src = "noite.png";
        document.body.style.background = "#515154";
    }
}

function resgateMoment() {
    // Esta função carrega o método new Date() e retorna data
    let data = new Date();
    return data; // função resgateMoment() retorna data ou seja resgateMoment() == data
}
function formatarHora() {
    //Formata a hora
    let data = resgateMoment(); //data = retorno da função resgateMoment()
    let hora = data.getHours(); //getHours() puxa o hora do new Date() 
    return hora;
}
function formatarMin() { //resgata os minutos
    let data = resgateMoment(); //data = retorno da função resgateMoment()
    let min = data.getMinutes().toString();
    min = min.length == 1 ? 0 + min : min;
    min = Number(min);
    return min;
}

function formatarSec() {
    let data = resgateMoment();
    let sec = data.getSeconds();
    return sec;
}
