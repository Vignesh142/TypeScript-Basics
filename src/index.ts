let age : number = 20;
let existsFlag: boolean = true;
let sales = 123_456_789;
let course = "TypeScript";
let level;//any type

function render(document: any, rootElement: string){
    console.log(document);
}
render(123, "app");

//array
let number: number[] = [];
number.forEach((num) => console.log(num));

//tuple
let user: [number, string]= [1, "Steve"];

//enums
const small =1, medium =2, large =3;

enum Sizes {Small='s', Medium ='m', Large='l'};

let selected: Sizes = Sizes.Small;
console.log(selected);

//function
function add(a: number, b: number, c=10): number{//void
    return a+b+c;
}
console.log(add(1,2,1));

//objects
let user1: {
    name: string, 
    age: number, 
    readonly id: number,
    retire: (date: Date) => void
} = {
    name: "John",
    age: 30,
    id: 0,
    retire: (date) => {
        console.log(date);
    }
}
// user1.id = 1; //cannot edit

//type alisas
type Employee = {
    name: string, 
    readonly id: number,
    retire: (date: Date) => void
}
let user3: Employee;
let user2: Employee = {
    name: "John",
    id: 0,
    retire: (date) => {
        console.log(date);
    }
}
//union type
function kgToLbs(weight: number | string): number{
    //Narrowing
    if(typeof weight === 'string'){
        weight = parseInt(weight);
        return weight*2.3;
    }else{
        return weight*2.3;
    }
}
kgToLbs(10);
kgToLbs("10");
//intersection type
type Draggable = {
    drag: () => void
}
type Clickable = {
    click: () => void
}
type Button = Draggable & Clickable;
let textBox: Button = {
    drag: () => {},
    click: () => {}
}
//literal type
type Quantity = "one" | "two" | "three";
let qty: Quantity = "one";
//nummalbe type
function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else    
        console.log("Hello");
}
greet("John");
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | undefined{
    return id===1 ? {birthday: new Date()} : undefined;
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); //optional chaining
//optional ele access
//customers?.[0]
//optional call
let log: any = null;
log?.('a');

//interface
interface IEmployee{
    name: string;
    id: number;
    retire: (date: Date) => void
}
