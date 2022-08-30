function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var anoDeNascimento = document.querySelector('input#anoDeNascimento')
  var resultado = document.querySelector('div#resultado')

  if (
    anoDeNascimento.value.length == 0 ||
    Number(anoDeNascimento.value) > ano
  ) {
    window.alert('Dados inválidos, digite novamente')
  } else {
    var idade = ano - Number(anoDeNascimento.value)
    var img = document.createElement('img')
    var rock = ''
    img.setAttribute('id', 'foto')

    if (idade >= 10 && idade <= 22) {
      rock = 'Fall Out Boy'
      img.setAttribute('src', 'fall-out-boy-2000.png')
    } else if (idade >= 23 && idade <= 32) {
      rock = 'Red Hot Chilli Peppers'
      img.setAttribute('src', 'red-hot-90.png')
    } else if (idade >= 43 && idade <= 52) {
      rock = 'Pink Floyd'
      img.setAttribute('src', 'pink-floyd-70.png')
    } else if (idade >= 33 && idade <= 42) {
      rock = 'Guns N Roses'
      img.setAttribute('src', 'gunsN-Roses-80.png')
    } else if (idade >= 53 && idade <= 62) {
      rock = 'Beatles'
      img.setAttribute('src', 'beatles-60.png')
    }
  }

  resultado.style.textAlign = 'center'
  resultado.innerHTML = `Sua idade é ${idade} e o Rock é ${rock}`
  resultado.appendChild(img)
}