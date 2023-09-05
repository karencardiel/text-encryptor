//a = ai 
//e = enter 
//i = imes 
//o = ober 
//u = ufat 





function encrypt(){
    var text= document.getElementById("textIngresado").value.toLowerCase();
   //i affect upper and lower case letters
   //g the whole sentence 
   //m affect lines and paragraphs

   var txtCifrado = text.replace(/e/igm, "enter")
                        .replace(/o/igm, "ober")
                        .replace(/i/igm, "imes")
                        .replace(/a/igm, "ai")
                        .replace(/u/igm, "ufat");
                    

document.getElementById("message-title").style.display = "none";
document.getElementById("message-paragraph").innerHTML = txtCifrado;


document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";
}

function decrypt(){
    
    var text= document.getElementById("textIngresado").value.toLowerCase();
   //i affect upper and lower case letters
   //g the whole sentence 
   //m affect lines and paragraphs

    var txtDescifrado = text.replace(/enter/igm, "e")
                            .replace(/ober/igm, "o")
                            .replace(/imes/igm, "i")
                            .replace(/ai/igm, "a")
                            .replace(/ufat/igm, "u");
                                                 


document.getElementById("message-title").style.display = "none";
document.getElementById("message-paragraph").innerHTML = txtDescifrado;
                            
                            
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";
}


function copy(){
    let info = document.getElementById("message-paragraph");
    let copiar = document.getElementById("copiar");

    navigator.clipboard.writeText(document.getElementById("message-paragraph").textContent);
    copiar.textContent="Copied!"; 
}