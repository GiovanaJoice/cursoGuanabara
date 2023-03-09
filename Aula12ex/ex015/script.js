function verificar () {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
            // criança
                img.setAttribute('src', 'bebeH.jpg')
            } else if (idade < 21) {
            // jovem
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50) {
            // adulto
                img.setAttribute('src', 'adultoH.jpg')
            } else {
            // idoso
                img.setAttribute('src', 'idosoH.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                    img.setAttribute('src', 'bebeM.jpg')
                } else if (idade < 21) {
                // jovem
                    img.setAttribute('src', 'jovemM.jpg')
                } else if (idade < 50) {
                // adulto
                    img.setAttribute('src', 'adultoM.jpg')
                } else {
                // idoso
                    img.setAttribute('src', 'idosoM.jpg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos. <br><br>`
        res.appendChild(img)
    }
}