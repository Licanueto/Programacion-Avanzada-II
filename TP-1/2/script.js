var items = [{info:"item 1",id: 1},
               {info:"item 2",id: 2},
               {info:"item 3",id: 3}];

var agregados = []

function loadInfo(){
    items.forEach((item)=>{
        document.getElementById("lista").innerHTML = document.getElementById("lista").innerHTML + '<div class="item"><div class="right floated content"><div onClick="addItem('+item.id+')" class="ui button">Add</div></div><div class="content">'+item.info+'</div></div>'

    })
    var body = document.getElementById("body")
    body.removeChild(document.getElementById("boton"))
}

function itemIsAdded(id){
    var rta = false;
    agregados.forEach(item => {
        if(item.id === id){
            rta = true;
        }
    })
    return rta;
}

function printItems(){
    document.getElementById("agregados").innerHTML = ""
    agregados.forEach((item)=>{
        document.getElementById("agregados").innerHTML = document.getElementById("agregados").innerHTML + '<div class="item"><div class="right floated content"><div onClick="removeItem('+item.id+')" class="ui button">Remove</div><div onClick="subirPuesto('+item.id+')" class="ui button">Prioridad</div></div><div class="content">'+item.info+'</div></div>'
    }) 
}

function addItem(id){
    if(agregados.length > 0){
        if(!itemIsAdded(id)){
             agregados.push(items.find((item)=> item.id === id))
             printItems();
        }
        else{
            alert("item ya agregado");
        }
    }else{
        agregados.push(items.find((item)=> item.id === id))
        printItems();
    }
}

function removeItem(id){
    agregados = agregados.filter(item => item.id !== id)
    printItems();
}

function subirPuesto(id){
    let aux = agregados.filter(item => item.id !== id)
    let itemAux
    agregados.map(item => {if(item.id === id){ itemAux = item}})
    agregados = []
    console.log(agregados)
    agregados.push(itemAux)
    agregados = agregados.concat(aux);
    printItems()

}
    

