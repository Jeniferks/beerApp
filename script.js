function mostrar__home(){
    document.getElementById('top__container').style.display = 'flex'
    document.getElementById('about__container').style.display = 'none'
    document.getElementById('product__container').style.display = 'none'
}

function mostrar__sobre(){
    document.getElementById('top__container').style.display = 'none'
    document.getElementById('about__container').style.display = 'flex'
    document.getElementById('product__container').style.display = 'none'
}


function mostrar__receitas(){
    document.getElementById('top__container').style.display = 'none'
    document.getElementById('about__container').style.display = 'none'
    document.getElementById('product__container').style.display = 'flex'
}