function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    var minuto = data.getMinutes ()
    msg.innerHTML = `Agora são ${hora}:${minuto}.`
    if (hora >= 0 && hora < 12) {
        // dia
        img.src = "dia_site.jpg"
        document.body.style.background = "#8BA1AF"
    } else if (hora >= 12 && hora <= 18){
        // tarde
        img.src = 'tarde_site.jpg'
        document.body.style.background = "#BF9E75"
    } else {
        // noite
        img.src = 'noite_site.jpg'
        document.body.style.background = "#192B30"
    }
}