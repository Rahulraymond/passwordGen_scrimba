const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const passGenBtn = document.getElementById("pass-gen-btn")
const pass1 = document.getElementById("password1")
const pass2 = document.getElementById("password2")


passGenBtn.addEventListener("click",()=>{
    clear(pass1)
    for(let i=0; i<15; i++){
    let randomChar = Math.floor(Math.random()*90)
    pass1.value += characters[randomChar]
    }
    clear(pass2)
    for(let i=0; i<15; i++){
        let randomChar = Math.floor(Math.random()*characters.length)
        pass2.value += characters[randomChar]
        }
})

function clear(inputField){
    inputField.value =""
}
function copyToClipboard(inputId) {
    var inputField = document.getElementById(inputId);
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Password has been copied to clipboard.")
}
