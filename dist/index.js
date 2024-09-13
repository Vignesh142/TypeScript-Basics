"use strict";
var _a;
let age = 20;
let existsFlag = true;
let sales = 123456789;
let course = "TypeScript";
let level;
function render(document, rootElement) {
    console.log(document);
}
render(123, "app");
let number = [];
number.forEach((num) => console.log(num));
let user = [1, "Steve"];
const small = 1, medium = 2, large = 3;
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "s";
    Sizes["Medium"] = "m";
    Sizes["Large"] = "l";
})(Sizes || (Sizes = {}));
;
let selected = Sizes.Small;
console.log(selected);
function add(a, b, c = 10) {
    return a + b + c;
}
console.log(add(1, 2, 1));
let user1 = {
    name: "John",
    age: 30,
    id: 0,
    retire: (date) => {
        console.log(date);
    }
};
let user3;
let user2 = {
    name: "John",
    id: 0,
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'string') {
        weight = parseInt(weight);
        return weight * 2.3;
    }
    else {
        return weight * 2.3;
    }
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    click: () => { }
};
let qty = "one";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");
}
greet("John");
function getCustomer(id) {
    return id === 1 ? { birthday: new Date() } : undefined;
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map