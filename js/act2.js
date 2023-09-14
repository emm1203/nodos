function Agregar(){
    var favoritos = document.getElementById('fav').value
    let Nuevofavorito = document.createElement('li')
    let imprimir = document.createTextNode(favoritos)
    Nuevofavorito.appendChild(imprimir)
    let lista = document.getElementsByTagName("li")
    lista[2].insertAdjacentElement('afterend', Nuevofavorito)
    //Nuevofavorito.textContent = favoritos
    // let lista = document.getElementsByTagName("li")
    // Nuevofavorito.appendChild(imprimir)
    // Para imprimir abajo seria algo como aparece arriba

}
{
    let reemplazo = document.createElement('h3')
    reemplazo.setAttribute('class','nuevoSub')
    let reemplazoTex = document.createTextNode('Elije tu género músical favorito');
    reemplazo.appendChild(reemplazoTex);
    var padre = document.getElementsByTagName("h3")[1].parentNode;
        padre.replaceChild(reemplazo, document.getElementsByTagName("h3")[1])
    var borrar=document.getElementById('pie');
        borrar.innerHTML="Redes Sociales";
    let seccion=document.getElementById('pie');
    let   seccionNueva=document.createElement('section');
    encabezado=document.createElement('h1');
  
    let articulo1=document.createElement('article');
    imagen=document.createElement('img');
    imagen.setAttribute('src','img/tiktok.jpg');
    imagen.setAttribute('a','https://www.tiktok.com/');
    articulo1.appendChild(imagen);
  
    seccionNueva.appendChild(encabezado);
    seccionNueva.appendChild(articulo1);
    seccion.insertAdjacentElement('afterend',seccionNueva);
}





