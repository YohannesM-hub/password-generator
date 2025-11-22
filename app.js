const generateBtn=document.getElementById('btn');
const firstBtnDisplay=document.getElementById('firstBtn');
const secoundBtnDisplay=document.getElementById('secoundBtn');
const clearBtn=document.getElementById('clear_btn');

const characters=[
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "!","@","#","$","%","^","&","*","(",")","-","_","=",
    "+","[","]","{","}","|",";",":","'","\"",",",".","<",
    ">","/","?","`","~"
]


generateBtn.addEventListener('click',()=>{
    
    let firstNumArray=[];
    let secoundNumArray=[];

    for (let index = 0; index <11 ; index++) {
        let randomNum=Math.floor(Math.random()*94)
        firstNumArray.push(characters[randomNum]);
    }
    for (let index = 0; index < 9; index++) {
        let randomNum=Math.floor(Math.random()*94)
        secoundNumArray.push(characters[randomNum]);
    }

    let firstString=firstNumArray.join('')
    let secoundString=secoundNumArray.join('')

    firstBtnDisplay.innerHTML=firstString;
    firstBtnDisplay.classList.add('on');

    secoundBtnDisplay.innerHTML=secoundString;  
    secoundBtnDisplay.classList.add('on');
})

firstBtnDisplay.addEventListener('click',()=>{
    if(firstBtnDisplay.classList.contains('on')){
    let firstText=firstBtnDisplay.textContent;
    navigator.clipboard.writeText(firstText);

    firstBtnDisplay.innerText='copied!';

    setTimeout(() => {
        firstBtnDisplay.innerText=firstText;
    }, 200);
    }else{
        firstBtnDisplay.innerText='generate';

        setTimeout(() => {
            firstBtnDisplay.innerText='--------------';
        }, 200); 
    }
    
})
secoundBtnDisplay.addEventListener('click',()=>{
    if(secoundBtnDisplay.classList.contains('on')){
    let secoundText=secoundBtnDisplay.textContent;
    navigator.clipboard.writeText(secoundText);

    secoundBtnDisplay.innerText='copied!';

    setTimeout(() => {
        secoundBtnDisplay.innerText=secoundText;
    }, 200);
    }else{
        secoundBtnDisplay.innerText='generate';

        setTimeout(() => {
            secoundBtnDisplay.innerText='--------------';
        }, 200); 
    }
    
})
