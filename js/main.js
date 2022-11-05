/* Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
/* VARIABLES */
let RandArray=[]
let UserArray=[]
let WrongNumb=[]
const container= document.querySelector(".my_container")
let difficulty= 100
let cardNum= 5
/* FUNCTIONS */
function RandomNumber(difficulty){
    while(RandArray.length<5){
        const rand=Math.floor(Math.random() * difficulty) + 1;
        if (RandArray.includes(rand)) {
            RandArray.splice(rand)
        }else{
            RandArray.push(rand)
        }
        console.log(RandArray)
    }
}
function CreateCards(cardNum){
    for (let i = 0; i < cardNum ; i++) {
       const card= document.createElement("div")
       card.classList.add("card_style", "show")
       card.innerHTML=RandArray[i]
       container.append(card)
    }
}
//funzione x nascondere i numeri generati
function timeout(){
    const boxes= document.querySelectorAll(".show")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("hide")
    } 
}
//funzione core
function SimonSays(){
    for (let i = 0; i < 5; i++) {
        const numberchoice=Number(prompt("Inserisci i numeri che hai visto precedentemente(un numero per volta)"))
        if (RandArray.includes(numberchoice)) {
            UserArray.push(numberchoice)
        }else{
            WrongNumb.push(numberchoice)
        }
    }
    if (UserArray.length==5) {
        alert(`Hai vinto, Hai indovinato tutti numeri: ${UserArray}`)
    }else{
        alert(`Hai perso, hai indovinato ${UserArray.length} numeri/o: ${UserArray} `)
    }

}
/* MAIN JS */
RandomNumber(difficulty)
CreateCards(cardNum)
setTimeout(timeout, 1000)
setTimeout(SimonSays, 2000)

