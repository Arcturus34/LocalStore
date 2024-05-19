import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    //#card = null;
    #memory;

    constructor()
    {
        super();
        this.#memory = new Memory();
    }

    /*createCard(){
        const tab1 = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        const tab2 = ["C","D","E","F"];

        const first_number = tab1[Math.floor(Math.random()*16)];
        const second_number = tab2[Math.floor(Math.random()*5)];

        let value = "0x1F9"+first_number+second_number;
        value = parseInt(value);
        this.#card = new Card(value);
        this.notify();
    }

    get card(){
        return this.#card;
    }
    */

    get memory(){
        return this.#memory;
    }

    newGame(){
        this.#memory.newGame(10);
        this.notify();
        this.saveGame();
    }

    saveGame(){
        //localStorage.setItem("memory",this.#memory);
        //localStorage.setItem("memory",JSON.stringify(this.#memory));
        //localStorage.setItem("memory",JSON.stringify(this.#memory.toData()));
        sessionStorage.setItem("memory",JSON.stringify(this.#memory.toData()));
    }

    loadGame(){
        //const savedData = localStorage.getItem("memory");
        const savedData = sessionStorage.getItem("memory")
        if(savedData){
            this.#memory.fromData(JSON.parse(savedData));
            this.notify();
            return true;
        }
        else{
            return false;
        }
    }

    start(){
        const bool = this.loadGame();
        if(bool === false){
            this.newGame();
        }
    }
}