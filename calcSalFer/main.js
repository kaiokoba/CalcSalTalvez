
function Imposto(){
    let salBruto = String(document.getElementById("salBru").value);
    let salTo;
    let salInss;
    let salIrrf;
    if(salBruto<=1300){
        salInss = salBruto * 0.075
    }else if(salBruto<=2500){
        salInss = salBruto * 0.09
    }else if(salBruto<=4000){
        salInss = salBruto * 0.12
    }else{
        salInss = salBruto * 0.14
    }

    if(salBruto<=2000){
        salIrrf = 0
    }else if(salBruto<=3000){
        salIrrf = salBruto * 0.075
    }else if(salBruto<=4000){
        salIrrf = salBruto * 0.15
    }else if(salBruto<=5000){
        salIrrf = salBruto * 0.225
    }else{
        salIrrf = salBruto * 0.275
    }
    salTo = salInss + salIrrf;
    return salTo;
}

function SalLiquido(){
    let salBruto = String(document.getElementById("salBru").value);
    let salLiq;

    salLiq = salBruto - Imposto();
    salLiq = Math.trunc(salLiq.toFixed(2));
    const res = `Salario é R$${salLiq}`;
    document.getElementById("resul1").innerHTML = res;
}

function DecSalario(){
    let salBruto = String(document.getElementById("salBru").value);
    let mesesTrab = String(document.getElementById("mes").value);
    let salTotal;
    salTotal = (salBruto / 12) * mesesTrab - Imposto();
    salTotal = salTotal.toFixed(2);
    const res = `Salario é R$${salTotal}`;
    document.getElementById("resul2").innerHTML = res;
}

function Ferias(){
    let salBruto = String(document.getElementById("salBru").value);
    let salTot;
    salTot = salBruto/3 - Imposto();
    salTot = Math.trunc(salTot.toFixed(2));
    const res = `Salario é R$${salTot} + R$${salBruto}`;
    document.getElementById("resul3").innerHTML = res;
}

function Rescisao(){
    let salBruto = String(document.getElementById("salBru").value);
    let mesesTrab = String(document.getElementById("mes").value);
    let salT;
    let salB;
    let salC;
    let salA;
    salT = (salBruto / 12) * mesesTrab - Imposto();
    salB = salBruto/3 - Imposto();
    salC = salBruto - Imposto();
    salA = (salT + salB + salC) * 0.4;
    salA = Math.trunc(salA.toFixed(2));
    const res = `Rescisão é R$${salA}`;
    document.getElementById("resul4").innerHTML = res;
}
