import { Person } from './person';

export class Player implements Person {
    name: string;
    age: number; // optional
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}