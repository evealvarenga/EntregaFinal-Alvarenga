productsList = [
    { ID: 1, Tipo: "Empanada", Sabor: "Bondiola", Precio: 130, Cantidad: 1, img:"./img/bondiolaok.jpg" },
    { ID: 2, Tipo: "Empanada", Sabor: "Carne picante", Precio: 110, Cantidad: 1, img: "./img/picante.jpg"},
    { ID: 3, Tipo: "Empanada", Sabor: "Carne suave", Precio: 105, Cantidad: 1, img: "./img/suave.jpg" },
    { ID: 4, Tipo: "Empanada", Sabor: "Pollo", Precio: 115, Cantidad: 1 , img: "./img/pollook.jpg"},
    { ID: 5, Tipo: "Empanada", Sabor: "Jamón y Queso", Precio: 120, Cantidad: 1 , img: "./img/jamonqueso.jpg"},
    { ID: 6, Tipo: "Empanada", Sabor: "Cebolla y Queso", Precio: 130, Cantidad: 1 , img: "./img/cebollaqueso.jpg"},
    { ID: 7, Tipo: "Empanada", Sabor: "Cheese Burger", Precio: 130, Cantidad: 1 , img: "./img/cheesebuger.jpg"},
    { ID: 8, Tipo: "Empanada", Sabor: "Humita", Precio: 135, Cantidad: 1 , img: "./img/humita.jpg"},
    { ID: 9, Tipo: "Pizza", Sabor: "Moderna", Precio: 1500, Cantidad: 1 , img: "./img/moderna.jpg"},
    { ID: 10, Tipo: "Pizza", Sabor: "Alemana", Precio: 2100, Cantidad: 1 , img: "./img/alemana.jpg"},
    { ID: 11, Tipo: "Pizza", Sabor: "Especial de cebolla", Precio: 1550, Cantidad: 1 , img: "./img/especialdecebolla.jpg"},
    { ID: 12, Tipo: "Pizza", Sabor: "Fugazzeta de jamón", Precio: 1600, Cantidad: 1 , img: "./img/fugazzetadejamon.jpg"},
    { ID: 13, Tipo: "Pizza", Sabor: "Fugazzeta de peperoni", Precio: 2200, Cantidad: 1 , img: "./img/fugazzetadepeperoni.jpg"},
    { ID: 14, Tipo: "Pizza", Sabor: "Inferno", Precio: 2320, Cantidad: 1 , img: "./img/infierno.jpg"},
    { ID: 15, Tipo: "Pizza", Sabor: "Mortadela y pesto", Precio: 2150, Cantidad: 1 , img: "./img/mortadelaypesto.jpg"},
    { ID: 16, Tipo: "Pizza", Sabor: "Vegetariana", Precio: 2000, Cantidad: 1 , img: "./img/vegetariana.jpg"},
]

const productJSON = JSON.stringify(productsList)

localStorage.setItem("productsList",productJSON)