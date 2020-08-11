import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}