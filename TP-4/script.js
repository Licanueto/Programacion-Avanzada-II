class Producto{

    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

class Item{
    constructor(product){
        this.product = product
        this.cant = 1;
    }
}

var products = [new Producto(1,"prod-1",250),
                new Producto(2,"prod-2",450),
                new Producto(3,"prod-3",300),
                new Producto(4,"prod-4",150),
                new Producto(5,"prod-5",50)];

var cartItems = []

var cards = document.getElementById("cards");
products.forEach(product => {
    cards.innerHTML= cards.innerHTML+'<div class="card"><div class="image"><img src="https://cdn1.cnet.com/img/hT4OfXVxYZrkgNlmWQ08QpABOaY=/1200x675/2018/09/27/a97c3fde-c8b0-46d5-83d5-15c18b1c2cb6/iphone-xs-max-product-analisis-review-5.jpg"></div><div class="content"><div class="header">'+product.name+'</div><div class="meta"><span class="date">$'+product.price+'</span></div><div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div></div><div onClick="add('+product.id+')" class="ui bottom attached button"><i class="add icon"></i>Add to the Cart</div></div>'

})

function itemIsAdded(id){
    var rta = false;
    cartItems.forEach(item => {
        if(item.product.id == id){
            rta = true;
        }
    })
    return rta;
}

function add(id){

    var product = products.find(item => item.id == id);
    if(itemIsAdded(id)){
        cartItems.forEach(item =>{
            if(item.product.id == id){
                item.cant ++;
            }
        })
    }else{
        cartItems.push(new Item(product));
    }

    updateCart();
    console.log(cart);

}
function sub(id){
    cartItems.forEach(item =>{
        if(item.product.id == id){
            item.cant --;
            if(item.cant == 0)
            {
                remove(id);
            }
        }
    })
    updateCart();
}
function remove(id){
    console.log(id)
    var aux = cartItems.filter(item => item.product.id !== id);
    cartItems = aux;
    console.log(cartItems)
    updateCart();

}

function updateCart(){
    var cart = document.getElementById("cart");
    cart.innerHTML = ""
    cartItems.forEach(item =>{
        cart.innerHTML = cart.innerHTML + '<div class="item"><div class="right floated content"><a class="ui tag label">'+item.product.price+'</a><div class="ui icon mini buttons"><button onClick="add('+item.product.id+')" class="ui blue button"><i class="plus icon"></i></button><button onclick="sub('+item.product.id+')" class="ui  button"><i class="minus  icon"></i></button><button onClick="remove('+item.product.id+')" class="ui red button"><i class="times icon"></i></button></div></div><div class="content"><a class="ui circular label">'+item.cant+'</a>'+item.product.name+'</div></div>'
    })
    var total = document.getElementById("total");
    total.innerHTML = "Total: $" + calcularTotal()
}

function calcularTotal(){
    var total = 0;
    cartItems.forEach(item => {
        total = total + (item.product.price * item.cant);
    })
    return total;
}


console.log(products)