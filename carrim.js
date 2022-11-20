function calcular(){
const compras = [];
compras[0] = parseFloat(document.getElementById("calca").value);
compras[1] = parseFloat(document.getElementById("meia").value);
compras[2] = parseFloat(document.getElementById("sapato").value);
compras[3] = parseFloat(document.getElementById("camisa").value);
compras[4] = parseFloat(document.getElementById("acessorio").value);

    var calculoTotal = (compras[0]*70)+(compras[1]*20)+(compras[2]*30)+(compras[3]*70)+(compras[4]*40);
    document.getElementById("total").innerHTML = calculoTotal;
    var itens = compras[0]+compras[1]+compras[2]+compras[3]+compras[4];
    document.getElementById("qntd").innerHTML = itens;
    }
function alerta(){
    alert("Pedido realizado");
}