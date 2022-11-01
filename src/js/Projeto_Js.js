function dobro(){
    alert("***Cálcule o dobro de um número***");
    
    let num = Number(prompt("Digite um número: "));
    let dob = (num * 2);
    
    alert("O dobro do seu número é: " + dob);
}

function media(){
    alert("***Cálcule sua média***");
    
    let nota1 = Number(prompt("Digite a primeira nota: "));
    let nota2 = Number(prompt("Digite a segunda nota: "));
    let media = ((nota1 + nota2) / 2);
   
    alert("A sua média é de: " + media + " pontos.");
}

function viagem(){
    alert("***Cálcule quantos dias sua viagem irá durar***");
    
    let viag = Number(prompt("Digite quantas horas sua viagem terá: "));
    let horas = viag / 24;
    
    alert("Sua viagem vai durar: " + horas + " dias.");
}

function dezporcento(){
    alert("***Cálcule os 10% de uma conta***");

    let valorConta = Number(prompt("Qual o valor da conta: "));
    let taxa = (valorConta * 0.10);
    let valorTotal = valorConta + taxa;
    
    alert("O valor da conta com os 10% é de: " + valorTotal + " reais.");
}

function horasVida(){
    alert("***Converta sua idade em horas***");

    let idade = Number(prompt("Qual a sua idade: "));
    let ano = 8760;
    let hora = idade * ano;
    
    alert("Você já viveu " + hora + " horas de vida!");
}

function antecessor(){
    alert("***Cálcule antecessor de um número***");
    
    let numero = Number(prompt("Digite um valor: "));
    let ant = numero - 1;
    
    alert("O antecessor do valor digitado é: " + ant);
}

function areaRetangulo(){
    alert("***Cálcule a área do retângulo***");

    let altura = Number(prompt("Digite a altura: "));
    let base = Number(prompt("Digite a base: "));
    let arearet = base * altura;
    
    alert("A área do retângulo é de: " + arearet + " metros².");
}

function idadeDia(){
    alert("***Converta sua idade em dias***");

    let idadeAno = Number(prompt("Digite a sua idade: "));
    let idadeDia = (idadeAno * 365);
    
    alert("Você tem " + idadeDia + " dias de idade!");
}

function percentVotos(){
    alert("***Cálcule o percentual de cada voto***");   
   
    let valido = Number(prompt("Digite o total de votos válidos: "));
    let nulo = Number(prompt("Digite o total de votos nulos: "));
    let branco = Number(prompt("Digite o total de votos brancos: "));
    let totalVotos = valido + nulo + branco;
    let percVal = (valido * 100) / totalVotos.toFixed(2);
    let percNul = (nulo * 100) / totalVotos.toFixed(2);
    let percBra = (branco * 100) / totalVotos.toFixed(2);
   
    alert("O percentual de votos brancos é de: " + percBra 
    + "%, o de nulos é de: " + percNul + "% e os válidos é de: " + percVal + "%.");
}

function reajusteSalario(){
    alert("***Cálcule o reajuste de 10% no salário***");

    let salario = Number(prompt("Digite o valor do seu salário mensal: "));
    let reajuste = salario * 0.10;
    let salNovo = salario + reajuste;
   
    alert("Seu salário com o reajuste subirá para: " + salNovo + " reais.")
}

function valorConsumidor(){
    alert("***Cálcule o valor final de um carro para o cliente***");

    let custoConcei = Number(prompt("Digite o valor de fábrica: "));
    let percDist = custoConcei * 0.45;
    let percImp = custoConcei * 0.28;
    let custoFinal = custoConcei + percDist + percImp;
    
    alert("O valor para o consumidor será de: " + custoFinal + " reais.");
}

function salarioVendedor(){
    alert("***Cálcule o saláio de um vendedor de carros***");

    let carrosVend = Number(prompt("Digite quantos carros foram vendidos: "));
    let totalVend = Number(prompt("Digite o valor total das vendas: "));
    let salario = 3000;
    let valCar = 200;
    let comis = totalVend * 0.05;
    let salaTotal = salario + (valCar * carrosVend) + comis;
    
    alert("O salário desse vendedor é de: " + salaTotal + " reais.");
}

function tabuada(){
    alert("******Tabuada******");
    
    let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = Number(prompt("Digite a tabuada que deseja ver: "));

    document.write(("******Tabuada do " + i + "******" + "<br/>"))

    for (k = 0; k <= 10; k++) {
        let res = tab[k] * i;
        document.write(tab[k] + " x " + i + " = " + res + "<br/>");
    }
}

function pesoIdeal(){
    alert("***Peso ideal***");
    
    let altura = Number(prompt("Digite a sua altura com pontuação: "));
    let sexo = (prompt("Digite o seu sexo: "));
    let homem = (72.7 * altura) - 58;
    let mulher = (62.1 * altura) - 44.7;
    
    if (sexo == "Masculino" || sexo == "masculino") {
        alert("Seu peso ideal é de: " + homem + " quilos.");
    }
    else if (sexo == "Homem" || sexo == "homem"){
        alert("Seu peso ideal é de: " + homem + " quilos.");
    }
    else if (sexo == "Mulher" || sexo == "mulher"){
        alert("Seu peso ideal é de: " + mulher + " quilos.");
    }
    else if (sexo == "Feminino" || sexo == "feminino"){
        alert("Seu peso ideal é de: " + mulher + " quilos.");
    }
}

function parOuImpar(){
    alert("***Par ou Ímpar***");
   
    let numer = Number(prompt("Digite o número: "));
    let par = numer % 2;
   
    if (par == 0) {
        alert("O número " + numer + " é par!");
    } else {
        alert("O número " + numer + " é impar!");
    }
}

function imc(){
    alert("***Cálcule o seu IMC***");

    let peso =  Number(prompt("Digite o seu peso: "));
    let altur =  Number(prompt("Digite sua altura: "));
    let imc = peso / (altur**2);

    if (imc < 20.7){
        alert("Abaixo do peso!"); 
    }
    else if (imc >= 20.8 && imc <= 26.4) {
        alert("Peso ideal!");
    }
    else if (imc >= 26.5 && imc <= 27.8) {
        alert("Pouco acima do peso!");
    }
    else if (imc >= 27.9 && imc <= 31.1) {
        alert("Acima do peso!");
    }
    else {
        alert("Obesidade!");
    }
}