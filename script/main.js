class productControl{
    constructor(){
        this.productsList = []
    }

    getList (){
        let jsonList = localStorage.getItem("productsList")

        if(jsonList){
            this.productsList = JSON.parse(jsonList)
        }
    }
    
    show(main_container){
        main_container.innerHTML = ""
        this.productsList.forEach(producto => {
            main_container.innerHTML += `
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

}

class shoppingControl{
    constructor(){
        this.shopList = []
    }

    getList(){
        let getListJSON = localStorage.getItem("shopList")

        if(getListJSON){
            this.shopList = JSON.parse(getListJSON)
        }
    }

    newProduct(ID){
        const product = this.shopList.find ( product => product.ID === ID);
        if(product){
            inList.Cantidad++;
            localStorage.setItem("shopList", JSON.stringify(this.shopList))
        }else{
            this.shopList.push(ID)
            localStorage.setItem("shopList", JSON.stringify(this.shopList))
        }

        this.show(container_cart);
        
    }

    show(container_cart){
        container_cart.innerHTML = ""
        this.shopList.forEach(producto =>{
            container_cart.innerHTML += `
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> ${producto.Sabor}</h5>
                            <p class="card-text">Precio por unidad: $${producto.Precio}</p>
                            <p class="card-text"><small class="text-muted"><botton class="btn btn-outline-warning" id="${producto.ID}">-</botton> <button type="button" class="btn btn-warning" id="cantidad" disable>${producto.Cantidad}</button> <botton class="btn btn-outline-warning" id="increase${producto.ID}">+</botton></small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
            const increaseP = document.getElementById(`increase${producto.ID}`);
            const decreaseP = document.getElementById(producto.ID);

            increaseP.addEventListener("click",() => {
                this.increase(producto.ID);
                
            })
            decreaseP.addEventListener("click",() =>{
                this.decrease(producto.ID);
            })
            this.total();
        })
    }

    increase(ID){
        const product = this.shopList.find ( product => product.ID === ID);
        if(product){
            const i = product.Cantidad++
            const cantidad = document.getElementById("cantidad");
            cantidad.innerHTML = i
            localStorage.setItem("shopList", JSON.stringify(this.shopList))
        }
        this.show(container_cart)
    } 

    decrease(ID){
        const product = this.shopList.find (product => product.ID === ID);
        if (product){
            const i = product.Cantidad--
            if(i <=1){
                this.remove(ID);
            } else{
                const i = document.getElementById(".cantidad")
                cantidad.innerHTML= i                
                localStorage.setItem("shopList", JSON.stringify(this.shopList))
            }
        }
        this.show(container_cart)
    }

    remove(ID){
        const product = this.shopList.find (product => product.ID === ID);
        const index = this.shopList.indexOf(product);
        this.shopList.splice(index,1);
        localStorage.setItem("shopList", JSON.stringify(this.shopList));
        this.show(container_cart)
        this.total();
    }

    cleaner(){
        this.shopList.length = 0;
        container_cart.innerHTML = ""
        localStorage.clear();
        this.total();
    }

    total(){
        let total = 0;
        this.shopList.forEach((product) => {
            total += product.Precio * product.Cantidad;
        })
        document.getElementById("total").innerHTML = `Total: $${total}`;
    }

}

const productC = new productControl()
const shopC = new shoppingControl()
productC.getList()
shopC.getList()
const main_container = document.getElementById("main_container")
const container_cart = document.getElementById("container_cart")
const cleanCart = document.getElementById("cleanCart");
const precioTotal = document.querySelector("total");
productC.show(main_container)
shopC.show(container_cart)

productC.productsList.forEach(product => {
    const stanBy = document.getElementById(`product${product.ID}`)
    stanBy.addEventListener("click", () => {
        shopC.newProduct(product)
        shopC.getList()
        shopC.show(container_cart)
        
        //Toastify
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

cleanCart.addEventListener("click", () => {
    shopC.cleaner()
})
