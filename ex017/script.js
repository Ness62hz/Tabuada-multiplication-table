

function somar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var res = window.document.getElementById('res')
    var n1 = 0
    var ini1 = Number(inicio.value)
    var fim1 = Number(fim.value)

    for (n1; n1 <= fim1; n1 = n1 + 1){
        var s = n1 * ini1
        res.innerHTML += `<br>${ini1} x ${n1} = ${s}`
    }

}
