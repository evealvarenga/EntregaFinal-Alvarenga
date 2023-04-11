class productControl{
    constructor(){
        this.productsList = []
        this.main_container = document.getElementById("main_container")
    }

      
    show(){
        this.productsList.forEach(producto => {
            this.main_container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.Sabor}</h5>
                    <p class="card-text">
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio: $${producto.Precio}</li>
                    <li class="list-group-item"><center><botton class="btn btn-outline-warning" id="product${producto.ID}">Comprar</botton></center></li>
                </ul>
            </div>
            ` 
        })
    }

    async getList (shopControl){
        let res = await fetch ("./script/productos.json")
        this.productsList = await res.json()
        this.show()
        this.bottonEvent(shopControl)
        
    }

    bottonEvent(shopControl){
        this.productsList.forEach(product => {
            const stanBy = document.getElementById(`product${product.ID}`)
            stanBy.addEventListener("click", () => {
                shopControl.newProduct(product)
                shopControl.getList()
                shopControl.show(container_cart)
                Toastify({
                    text: "Producto Añadido al Carrito",
                    duration: 1000,
                    gravity: "bottom",
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                        background: "#9e9959",
                        width: "220px",
                        fontSize: "14px",
                        fontFamily: '"Roboto", sans-serif',
                        fontWeight: "300",
                        textAlign: "center",
                        borderRadius: "50px",
                    },
                }).showToast();
            })
        })
    }

}

const productC = new productControl()
const shopC = new shoppingControl()
productC.getList(shopC)
shopC.getList()

const cleanCart = document.getElementById("cleanCart");
const precioTotal = document.querySelector("total");
productC.show(main_container)
shopC.show(container_cart)



cleanCart.addEventListener("click", () => {
    shopC.cleaner()
})