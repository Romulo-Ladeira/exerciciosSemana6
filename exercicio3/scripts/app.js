let arrayNumeros =[1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayInvertido = []

const inversor = () =>{
    for(let i= 0;i < arrayNumeros.length ;i++){
        arrayInvertido.push(arrayNumeros[arrayNumeros.length -(i+1)])
    } 
}
inversor()
console.log(arrayNumeros)
console.log(arrayInvertido)
