let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resultado')
let valores =[]

function isnumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }

}
function inlista(n, 1){
    if(1.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}
function adicionar(){
    if(isnumero(num.value) && !inlista(num.value)){
    } else {
    window.alert('Valor invalido ou ja encontrado na lista!')
    }
}