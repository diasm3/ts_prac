var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5; //type: number
var comapny = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var age;
var ids = [1, 2, 3, 4, 5];
var arr = [1, 'Traversy', true];
// Tuple
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
var pid;
pid = '22', 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'Brad'
};
// Type Assertion
var cid = 1;
// let customerId = <number>cid
var customerId = cid;
// Functions 
function addNum(x, y) {
    return x + y; // number 로 입력하고 number return 한다
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
var user1 = {
    name: 'John',
    city: 'New York',
    id: 1
};
user1.id = 5;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.id = id;
    }
    Person.prototype.register = function () {
        return "Name: " + this.name + ", Age: " + this.age + ", City: " + this.city;
    };
    return Person;
}());
var brad = new Person(1, 'Brad', 36, 'New York');
var mike = new Person(2, 'Mike', 33, 'New York');
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name, 0, 'New York') || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
console.clear();
var emp = new Employee(3, 'John', 'Manager');
console.log(emp.register());
// console.log(brad.register())
// console.log(brad.name)  
// console.log(mike.name)
console.log(Direction1.Up);
console.log("hello world");
// Generic
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4, 5]);
var strArray = getArray(['Brad', 'John', 'Mary']);
numArray.push(4);
strArray.push('helloworld');
