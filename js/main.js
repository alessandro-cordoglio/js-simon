/* Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
/* VARIABLES */
let RandArray=[]
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
       card.classList.add("card_style")
       card.innerHTML=RandArray[i]
       container.append(card)
    }
}
/* MAIN JS */

RandomNumber(difficulty)
CreateCards(cardNum)
console.log(RandArray)

