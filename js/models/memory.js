import { Card } from "../models/card.js";
import { ControllerMemory } from "../controllers/controller-memory.js";

export class Memory{

    #cards;

    constructor(){
        this.#cards = [];
    }

    newGame(pairsNumer){
        let value = "0x1F90C";
        for(let i = 0; i < 2*pairsNumer; i++){
            value = parseInt(value);
            if((i%2 === 0)&&(i !== 0)){
                value++;
            }
            //this.#cards.push(new Card(value));
            const card = new Card(value);
            const localisation = Math.floor(Math.random()*this.#cards.length)
            this.#cards.splice(localisation, 0, card);
        }
    }
    


    getCardsNumber(){
        return this.#cards.length;
    }

    getCard(index){
        return this.#cards[index];
    }

    toData(){
        let myCards = [];
        for(let i = 0; i < this.getCardsNumber(); i++){
            const tableau = {
                value: this.getCard(i).value,
            }
            myCards.push(tableau);
        }

        const myMemory = {
            myCards,
        }

        return myMemory;

    }

    fromData(myMemory){
        this.#cards = [];
        for(let i = 0; i < myMemory.myCards.length; i++){
            this.#cards.push(myMemory.myCards[i]);
        }
        return this.#cards;
    }


}