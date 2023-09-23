
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

    salLiq = salBruto - Imposto();
    const res = `Salario é R$${salLiq}`;
    document.getElementById("resul1").innerHTML = res;
}

function DecSalario(){
    let salBruto = String(document.getElementById("salBru").value);
    let mesesTrab = String(document.getElementById("mes").value);
    let salTotal;
    salTotal = (salBruto / 12) * mesesTrab - Imposto();
    const res = `Salario é R$${salTotal}`;
    document.getElementById("resul2").innerHTML = res;
}

function Ferias(){
    let salBruto = String(document.getElementById("salBru").value);
    let salTot;
    salTot = Imposto() - salBruto/3;
    salTot = salTot.toFixed(2);
    const res = `Salario é R$${salTot} + R$${salBruto}`;
    document.getElementById("resul3").innerHTML = res;
}