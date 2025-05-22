function toggleMode() {
    const html = document.documentElement
        html.classList.toggle('light')
        //pegar a tag img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando camisa preta sem oculos')


    }else {
        //se tiver sem light mode, manter a img normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando camisa preta de oculos')
        //pegar a tag img


        //substituir a img
    }

}