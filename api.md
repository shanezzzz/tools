## typeof

*typeof可以识别值类型和函数，引用类型识别为object.返回的都是string*

1. 值类型  
```
  typeof a // undefind
  typeof 'a' // string
  typeof 1 // number
  typeof true // boolean
  typeof Symbol('a') // symbol
```

2. 函数  
```
  typeof console.log() // function
  typeof function () {} // function
```

3. 引用类型  
```
  typeof null // objeck
  typeof ['a', 'b'] // object
  typeof {a: 1} // object
```

## ==和===

*除了==null之外其他都是用===*

## instanceof 
*检测构造函数的protype属性是否出现在某个对象的原型链*  

```
const arr = []
arr instanceof Array // true
arr instanceof Object // false
const obj = {}
obj instanceof Array // false
obj instanceof Object // true
```

## hasOwnProperty()
*检测一个对象是否含有特定的自身属性(继承属性返回false，如：toString、hasOwnProperty)*  

```
const obj = {}
obj.name = ''
obj.hasOwnProperty('name') // true
obj.name = null
obj.hasOwnProperty('name') // true
obj.name = nudefind
obj.hsaOwnProperty('name') // true
obj.hasOwnProperty('toString') // false
obj.hasOwnProperty('hasOwnProperty') // false
```

## typeof
*判断参数是什么类型的实例*  

```
// 基本类型返回对相应的类型
typeof 123 // Number
typeof 'name' // String
typeof true // Boolean
typeof new Function() // Function
typeof name // undefind
// 引用类型均返回object
typeof {a:1} // object
typeof [1,2,3] // object
typeof null // object
```

## 判断是否为数组
** instanceof / isArray **  

```
const arr = []
arr instanceof Array // true
Array.isArray(arr) // true
```

## 伪数组
*一个对象所有的键名都为整数或者为零，并且有length属性*  
*函数的arguments对象，DOM元素集合，字符串都可以算是伪数组*  

```
const obj = {
  0: a,
  1: b,
  2: c
  length: 3
}
obj[0] // a
obj[1] // b
obj.lenght // 3
```

## Array
- Array.from()
** **