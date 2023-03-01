function saludo(){
    return function(){
        return "hola saul"
    }
}
console.log(saludo()())