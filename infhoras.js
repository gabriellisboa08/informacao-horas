function carregar () {
let divmsg = document.getElementById('msg')
let divimg = document.getElementById('img')
let data = new Date() //variável resgatando informações do sistema (hora,data,etc...)
let hora = data.getHours() //resgatando hora  
let  min = data.getMinutes()

if (hora >= 0 && hora < 12 ){
  divmsg.innerText = `Bom dia! Agora são exatamente ${hora}:${min} horas `
  divimg.src = 'manhã.jpg'
  
} else if(hora >= 12 && hora < 18 ) {
  divmsg.innerText = `Boa tarde! Agora são exatamente ${hora}:${min} horas`
  divimg.src = 'tarde.jpg'

}else if (hora >= 18 && hora <= 23) {
  divmsg.innerText = `Boa noite! Agora são exatamente ${hora}:${min} horas`

}else {
  divmsg.innerText = '[ERRO] Hora invalida!'
}

}


