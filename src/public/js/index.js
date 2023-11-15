const socket = io()

console.log("Carga de index.js")
socket.on('nuevoPost', product => {
    console.log("nuevoPost recibido")
    let lista = document.getElementById('listaProductos')
    
    let id = document.createElement('li')
    let title = document.createElement('li')
    let price = document.createElement('li')
    let code = document.createElement('li')
    let hr = document.createElement('hr')
    
    id.textContent = 'Id: Nuevo Producto'
    title.textContent = 'Titulo: ' + product.title
    price.textContent = 'Precio: ' + product.price
    code.textContent = 'Codigo: ' + product.code

    lista.appendChild(id)
    lista.appendChild(title)
    lista.appendChild(price)
    lista.appendChild(code)
    lista.appendChild(hr)
})
