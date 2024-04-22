let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um Vilão");
let p4=prompt("Digite um LUGAR")
let msg = document.getElementById("msg");

msg.innerHTML=`<p> Olá,${p1} o seu poder é ${p2} e voce vai enfrentar o ${p3} no lugar ${p4} </p>`