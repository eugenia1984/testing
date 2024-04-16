const counter: number = 0;
const greeting:string = "Hello";

type Car = {
  color: string;
  electric: boolean;
}

const car: Car = {
  color: "red",
  electric: true
}

type EvenNumbers = 2 | 4 | 6 | 8 | 12;
const add = (a: EvenNumbers, b:EvenNumbers): number => a+b;

add(2,4)
