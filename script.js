function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')

  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são exatamente ${hora} horas.`

  if(hora >= 0 && hora < 12){
    //foto manha!
    img.src = 'imagens/amanhecer1.png'
    document.body.style.background = '#80ccff'
  }else if(hora >= 12 && hora <= 18){
    //foto tarde!
    img.src = 'imagens/entardecer1.png'
    document.body.style.background = '#ffb366'
  }else{
    //foto noite!
    img.src = 'imagens/noite1.png'
    document.body.style.background = '#9966ff'
  }
}