function carregar () {
let divmsg = document.getElementById('msg')
let foto = document.getElementById('foto')
let data = new Date() //variável resgatando informações do sistema (hora,data,etc...)
let hora = data.getHours() //resgatan
let  min = data.getMinutes()
if (hora >= 0 && hora < 12 ){
  divmsg.innerText = `Bom dia! Agora são exatamente ${hora}:${min}:${sec} horas `
  foto.src = 'manha.png' //carregando a imagem dentro da div
  document.body.style.background = '#e2cd9f' //aolicando CSS via JS
} else if(hora >= 12 && hora < 18 ) {
  divmsg.innerText = `Boa tarde! Agora são exatamente ${hora}:${min} horas`
  foto.src = 'tarde.png'
  document.body.style.background = '#b9846f'
}else if (hora >= 18 && hora <= 23) {
  divmsg.innerText = `Boa noite! Agora são exatamente ${hora}:${min} horas`
  foto.src = 'noite.png'
  document.body.style.background = '#515154'
}else {
  divmsg.innerText = '[ERRO] Hora invalida!'
}

}


