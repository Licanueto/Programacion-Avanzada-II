var from = 0;
var to = 11;

getElements(from, to);
getMax();

function getMax(){
    fetch('https://utn-2019-avanzada2-tp5.herokuapp.com/records/total')
        .then(result => {
            return result.json();
        }).then(result => {
            total = result;
        })
        .catch(err => {
            console.log(err)
        })
}

function getElements(from, to) {
    fetch('https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=' + from + '&to=' + to)
        .then(result => {
            return result.json();
        }).then(result => {
            var body = document.getElementById("body");
            body.innerHTML = ""
            result.forEach(item => {
                body.innerHTML = body.innerHTML + '<tr><td data-label="ID">' + item.id + '</td><td data-label="Name">' + item.first_name + '</td><td data-label="Last Name">' + item.last_name + '</td><td data-label="Email">' + item.email + '</td><td data-label="Gender">' + item.gender + '</td><td data-label="Last IP Connected">' + item.last_connected_ip + '</td></tr>'
            })
        })
        .catch(err => {
            console.log(err)
        })

}

function next() {
    if(to < total){

    
    from = from + 11;
    if((total - from) > 11){
        to = to + 11;
    }else
    {
        console.log((total - from))
        to = to + (total - from);
    } 
    console.log(from, to)
    getElements(from, to);
}
else{
    alert("no se puede ir mas adelante")
}
    
}

function back() {
    if (from > 0 & to > 11) {  
        if((total - from) < 11)
        { 
            to = to - (total - from)
            from = from - 11;
            console.log(from, to)
        }
        else{
            from = from - 11;
            to = to - 11;
        }
       
        getElements(from, to);
    }
    else{
        alert("no se puede ir mas atras")
    }
}


