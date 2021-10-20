function carregar () {
var divmsg = document.getElementById('msg')
var foto = document.getElementById('foto')

}
VerificarHora()
function resgateHora() {
  let data = new Date()
  return data
}
function formatarHora () {
  let data = resgateHora()
  let hora = data.getHours() //resgatando
  //let horaFormatada = (hora.length == 1)? "0" + hora : hora
  return hora
}
function formatarMin() {
  let data = resgateHora()
  let  min = data.getMinutes()
  //let minFormatado = (min.length == 1 ) ? "0" + min : min
  return min
}
function formatarSec() {
  let data = resgateHora()
  let sec = data.getSeconds()
  return sec
}

function VerificarHora() {
  if (formatarHora() >= 0 && formatarHora() < 12 ){
    var divmsg = document.getElementById('msg')
var foto = document.getElementById('foto')
    divmsg.innerText = `Bom dia! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas `
    foto.src = 'manha.png' //carregando a imagem dentro da div
    document.body.style.background = '#e2cd9f' //aolicando CSS via JS
  } else if(formatarHora() >= 12 && formatarHora() < 18 ) {
    divmsg.innerText = `Boa tarde! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas`
    foto.src = 'tarde.png'
    document.body.style.background = '#b9846f'
  }else if (formatarHora() >= 18 && formatarHora() <= 23) {
    divmsg.innerText = `Boa noite! Agora são exatamente ${formatarHora()}:${formatarMin()}:${formatarSec()} horas`
    foto.src = 'noite.png'
    document.body.style.background = '#515154'
  }

}





