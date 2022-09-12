const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const btnRestr = document.querySelector('#btnRestar');
const rs = document.querySelector('#resultado') ;

btnRestr.addEventListener('click',btnRestar);

function btnRestar(){
    const resultado = Number(input1.value)- Number(input2.value);
    rs.innerText = "Resta= "+resultado; 
}
function btnOnclick(){
    const sumaImputs = Number(input1.value) + Number(input2.value);
    rs.innerText= "Resultado= "+sumaImputs;
}