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
            product.Cantidad++;
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