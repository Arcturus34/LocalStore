import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCards();
    }

    displayCard(card){
        const cards = document.querySelector(".cards");
        let enfant = document.createElement("div");
        enfant.classList.add("card");
        enfant.innerHTML = "&#x"+(card.value).toString(16);
        cards.appendChild(enfant);

        /*enfant.addEventListener("click", () => {
            this.#controllerMemory.createCard();
        });
        */
    }

    displayCards(){
        for(let i = 0; i < this.#controllerMemory.memory.getCardsNumber(); i++){
            this.displayCard(this.#controllerMemory.memory.getCard(i));
        }
    }
}