# JS Object

## 1. Object
- Js là một object-based language, mọi thứ trong js đều là object.
- Một object trong js là một entity có các state và hành vi (property và method).

```js
const Car = {
    color: 'red',
    price: '10000'
}
```
**Có 3 cách để tạo ra một object trong js**
- Object by object literal
- By creating instance of Object
- By using an Object constructor
```js
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
obj = new emp(103, "Vimal Jaiswal", 30000);
```

**Một số object builtin function**
- Object.keys()     : trả về một mảng của các keys
- Object.values()   : trả về một mảng các values
- Object.entries()  : trả về một mảng gồm các key => values
- Object.assign()   : gán một object cho một obj khác
- Object.create()   : tạo ra một object mới với các thuộc tính và prototype được chỉ định
- Object.is()       : check xme 2 values có cùng giá trị hay không.
- ...etc

## 2. Array
- forEach()
- unshift()
- shift()
- includes()
- indexOf()
- map()
- filter()
- slice()
- splice()

## 3. Date
- var date = new Date();
- date.getDate()
- date.getMonth()
- date.getFullYear()
- date.getHours()
- date.getMinutes()
- date.getMilliseconds()

## Js number
**Một số constants trong js:**
- MIN_VALUE
- MAX_VALUE
- POSITIVE_INFINITY
- NEGATIVE_INFINITY
- NaN
