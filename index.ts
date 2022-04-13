let id: number = 5 //type: number
let comapny:string = 'Traversy Media'
let isPublished:boolean = true 
let x: any = 'Hello'
let age: number

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'Traversy', true]


// Tuple
let person: [number, string, boolean] = [1,'Brad', true ]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]


// Union
let pid: number | string 

pid = '22',22

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}


// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Brad'
}


// Type Assertion
 cid: any = 1
// customerId = <number>cid
 customerId = cid as number




// Functions 
function addNum(x:number, y:number) : number{
    return x + y  // number 로 입력하고 number return 한다
}


console.log(addNum(1, 2))


// Void
function log(message: string  | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    name : string,
    age? : number,
    city : string,
    id : number
}


const user1: UserInterface = {
    name: 'John',
    city : 'New York',
    id: 1,
}


user1.id = 5

interface MathFunc {
    (x: number, y: number): number

}


const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonIterface {
    id: number
    name: string
    register(): string
}


// Classes
class Person implements PersonIterface {
    name: string
    age: number
    city: string
    id: number

    constructor(id: number, name: string, age: number, city: string) {
        this.name = name 
        this.age = age 
        this.city = city 
        this.id = id
    }

    register(){
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    }

}





const brad = new Person(1, 'Brad', 36, 'New York')
const mike = new Person(2, 'Mike', 33, 'New York')


// Subclasses
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name, 0, 'New York')
        this.position =position

    }
}


console.clear()


const emp = new Employee(3, 'John', 'Manager')

console.log(emp.register())

// console.log(brad.register())

// console.log(brad.name)  
// console.log(mike.name)





///내용을 고쳐서 다시 해보자
//이런 내용들은 다시 고쳐볼까{}






console.log(Direction1.Up)
console.log("hello world")




// Generic
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}


 numArray = getArray<number>([1,2,3,4,5])
 strArray = getArray<string>(['Brad', 'John', 'Mary'])

numArray.push(4)
strArray.push('helloworld')
