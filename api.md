## typeof

**typeof可以识别值类型和函数，引用类型识别为object.返回的都是string**

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

**除了==null之外其他都是用===**

## instanceof 
**检测构造函数的protype属性是否出现在某个对象的原型链**  

```
const arr = []
arr instanceof Array // true
arr instanceof Object // false
const obj = {}
obj instanceof Array // false
obj instanceof Object // true
```

## hasOwnProperty()
**检测一个对象是否含有特定的自身属性(继承属性返回false，如：toString、hasOwnProperty)**  

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
**判断参数是什么类型的实例**  

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
**instanceof / isArray**  

```
const arr = []
arr instanceof Array // true
Array.isArray(arr) // true
```

## 伪数组
**一个对象所有的键名都为整数或者为零，并且有length属性**  
**函数的arguments对象，DOM元素集合，字符串都可以算是伪数组**  

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

  *将一个伪数组和可遍历对象(部署了lterator接口的对象：Set、Map、Array)转为数组（浅拷贝）*  

  *Array.from([arrayLike[, mapFn[, thisAry]]])*  

  *Array.from接受三个参数：arrayLike：被转换的对象（必填）；mapFn：map函数（可选）；thisAry：mapFn函数中的this指向对象（可选）*

  1. 字符串  
  ```
  Array.from('shane') // s,h,a,n,e
  ```

  2. 伪数组  
  ```
  const obj = {
    0: 'a',
    2: 'b',
    length: 2
  }
  Array.from(obj) // [a, b]
  const obj1 = {
    0: 'a',
    1: 'b',
    length: 5
  }
  Array.from(obj1) // [a,b,undefind,undefind,undefind] 会根据length来判断数组位数
  const obj2 = {
    3: 'a',
    5: 'b',
    1: 'c'
    length: 3
  }
  Array.from(obj2) // [undefind,c,undefind] 索引不按升序排列会出现找不到下标返回undefind
  ```

  3. mapFn参数
  ```
  const obj = {
    0: 'a',
    1: 'b'
    2: 'c',
    lenght: 3
  }
  Array.from(obj, (n) => n + 1) // [a1, b1, c1]
  ```

  4. thisArg参数
  ```
  const obj = {
    0: 'a',
    1: 'b'
    2: 'c',
    lenght: 3
  }
  const thisObj = {
    handel: function(x) {
      return x + 1
    }
  }
  Array.from(obj, (x) => {
    return this.handel(x) // this指向thisObj，所以有handle这个方法
  }, thisObj) // [a1, b1, c1]
  ```

- Array.isArray()

  *判断是否是数组*

  ```
  const arr = []
  const obj = {}
  Array.isArray(arr) // true
  Array.isArray(obj) // false
  ```

- Array.of()

  *创建一个新的数组*

  *Array.of(element1[, element2[, elementN]])*

  ```
  Array.of(1,2,3) // [1,2,3]
  Array.of(3) // [3] // 正常生成3
  // 与Array的区别
  Array(1,2,3) // [1,2,3]
  Array(3) // [,,] 当只传一个参数的时候，就将参数当长度并生产该参数长度的空位empty
  ```

- Array.prototype.concat()

  *合并多个数组，不改变原数组，而返回一个新数组。当返回的新数组的值改变时，不会印象原数组*

  ```
  const arr1 = [1,2,3]
  const arr2 = [4,5,6]
  const arr3 = arr1.concat(arr2) // [1,2,3,4,5,6]
  const arr4 = arr3.concat(arr1, arr2) // [1,2,3,4,5,6,1,2,3,4,5,6]
  ```

- Array.prototype.copyWithin()

  *浅复制数组的一部分到同数组的另一个位置，并返回，不会改变数组的长度，但会改变原数组*

  ```
  const arr1 = ['a', 'b', 'c', 'd', 'e']
  arr1.copyWithin(0, 3, 4) // ['d', 'b', 'c', 'd', 'e'] 
  ```

- Array.prototype.entries()

  *返回一个新的Array Iterator, 里面包含一个next()方法，该方法返回一个对象：next.done:用于指示迭代器是否完成：在每次迭代时进行更新而且都是false; next.value: [key, value]的数组*

  ```
  const arr = ['a', 'b', 'c', 'd']
  const iterator = arr.entries()
  iterator.next() // { done: false, value: [0, a] }
  iterator.next() // { done: false, value: [1, b] }
  ```

- Array.prototype.every()

  *检测数组里面每个值是否通过指定的函数测试，返回布尔值*

  ```
  const arr = [1,2,3,4]
  arr.every((e) => e > 0) // true
  arr.every((e) => e > 1) // false 只有一个不通过也返回false
  ```

- Array.prototype.fill()

  *在原数组里面填充一个固定的值，改变原数组，长度受到原数组限制。*
  *fill(value, [start, [end ]]) 三个参数：value：用来填充的值，start数组开始位置，end数组结束位置，负数则从后面开始*

  ```
  const arr = [1, 2, 3]
  arr.fill('a', 0 , 2) // ['a', 'a', 3]
  arr.fill('b', 0, 10) // ['b', 'b', 'b'] 当参数超过原数组时，只填充原数组的长度内的值
  ```

- Array.prototype.filter()

  *遍历每项并返回通过通过测试的项，返回新数组，不改变原数组*

  ```
  let arr = [1,2,3,4]
  arr.filter((e) => e > 2) // [3, 4]
  // 实现搜索功能
  const fn = (e) => {
    arr.filter(item => {
      return item.indexOf(e) > -1
    })
  }
  fn(2) // [2]
  ```

- Array.prototype.find()

  *查找数组中第一个匹配的值，若匹配成功则返回该值，否则返回undefind*

  ```
  let arr = [1,2,3]
  arr.find(e => e > 1) // 2 是返回值，findIndex()是返回下标
  ```

- Array.prototype.findIndex()

  *查找数组中第一个匹配的值的下标，若匹配成功则返回该值的下表，否则返回undefind*

  ```
  let arr =[1,2,3]
  arr.findIndex(e => e > 1) // 1 是返回下标
  ```

- Array.prototype.flat()

  *扁平化一个数组，不改变原数组，会ruturn,每次只扁平一层*

  ```
  let arr = [1,2,[3,4]]
  arr.flat() // [1,2,3,4]
  // 扁平空数组
  let arr1 = [1,2, ,3]
  arr1.flat() // [1,2,3]
  // 只扁平一层
  let arr2 = [1,2,[3,[4]]]
  arr2.flat() // [1,2,3,[4]]
  ```

- Array.prototype.flatMap()

  *便利数组内的每个值，并进行相对应操作，返回新数组，不该变原数组*

  ```
  let arr =[1,2,3]
  arr.flatMap(e => {
    e + 1
  }) // 2,3,4
  // 代替方案 reduce()&concat()
  ```

- Array.prototype.forEach()

  *遍历数组 ，与for循环相同，没有return，会改变原数组/与map不同点，map有return不会改变原数组*
  *forEach(item, index => {item,index});itme:遍历的数组元素，index：元素的下标*

  ```
  let arr = [1,2,3]
  arr.forEach(e => {
    console.log(e) // 1,2,3
  })
  ```

- Array.prototype.includes()

 *检查数组里面有没有包含这个值，有返回true，否则false。注意这个值要全部匹配才会返回*
 *includes(item, index);itme:需要匹配的值，index需要匹配的下标*

  ```
  let arr = ['apple', 'banana']
  arr.includes('apple') // true
  arr.includes('a') // false 要全匹配
  arr.includes('apple', 0) // true
  arr.includes('apple', 1) // false 下标不匹配
  ```

- Array.prototype.indexOf()

  *查找数组中第一个匹配的值，并返回下标，若没有匹配则返回-1*  
  *indexOf(itme, start); itme:需要查找的值，start：开始查找的下标*

  ```
  let arr = ['a','b','a']
  arr.indexOf('a') // 0
  arr.indexOf('c') // -1
  arr.indexOf('a', 1) // 2
  ```

- Array.prototype.join()

  *将数组/类数组内的每个项连成一个字符串，并用给到的字符添加到每项间隔中*

  ```
  let arr = ['a', 'b', 'c']
  arr.join(',') // 'a,b,c'
  ```

- Array.prototype.keys()

  *方法返回一个包含数组中每个索引键的Array Iterator对象*

- Array.prototype.lastIndexOf()

  *从最后一项开始查找数组中第一个匹配合适的值，并返回下标，无匹配则返回-1；返回的下标是正序的*

  ```
  let arr = ['a', 'b', 'c', 'd']
  arr.lastIndexOf('c') // 2
  arr.lastIndexOf('e') // -1
  ```

- Array.prototype.map()

  *与forEach相同，但这个有return，不会改变原数组*

  ```
  let arr = [1,2,3]
  arr.map(e = > e + 1) // [2,3,4]
  ```

- Array.prototype.pop()

  *删除数组中最后一项，并返回该项。修改原数组;数组为空是返回undefind*

  ```
  let arr = ['a', 'b', 'c']
  arr.pop() // 'c'
  console.log(arr) // ['a', 'b']
  ```

- Array.prototype.push()

  *在数组最后添加一个指定的值，并返回添加后的该数组长度，改变原数组*

  ```
  let arr = ['a', 'b', 'c']
  arr.push('d') // 3
  console.log(arr) // ['a', 'b', 'c', 'd']
  ```

- Array.prototype.reduce()

  *将数组中的每个元素执行提供的函数方法，并每执行一项将这一项结果返回到下一项，直到每个元素都执行完*
  *reduce((total, curValue, curIndex, arr), initiaValue); total:必填，初始值/计算结束后返回的值;curValue:必填，当前元素；curIndex：可选，当前元素的索引；arr：可选，当前元素所属数组的对象；initalValue：可选，传递给函数的初始值，相当于total的初始值，若该参数不填则total的初始值默认为0*

  ```
  // 1、数组求和
  let arr = [1,2,3]
  arr.reduce((total, curValue) => total + curValue) // 6 0+1+2+3 = 6
  arr.reduce((total, curValue) => total + curValue, 10) // 6 传递10给total，相当于total等于10而不是0，即10+1+2+3 = 16
  // 2、对象数组求和
  let obj = [{a:'a', s: 1},{a:'b', s: 2},{a:'c', s 3}]
  obj.reduce((total, curValue) => total + curValue, 0) // 6
  obj.reduce((total, curValue) => total + curValue, '0') // '0123' // 因为total初始化为字符串，那么后面累加的都是字符串
  // 3、数组最大值
  arr.reduce((total, curValue) => total > curValue ? total : curValue) // 3 
  // 4、查找字符串中字母出现的字数
  let str = 'aaaaabcd'
  str.split('').reduce((total, curValue) => {total[curValue] ? total[curValue]++ : total[curValue] = 1; return total}, {}) // {a:5,b:1,c:1}
  // 5、数组转对象
  let arr = [{name: 's', id: 1},{name: 'h', id: 2},{name: 'e', id: 3}]
  arr.reduce((total, curValue) => total[curValue.id] = curValue, {}) // {1:{name: 's', id: 1},{name: 'h', id: 2}}
  // 6、扁平两维数组
  let arr = [[1,2], [3,4], [5]]
  arr.reduce((total, curValue) => {
    total.concat(curValue)
  }, []) // [1,2,3,4,5]
  ```

- Array.prototype.reduceRigth()

  *与reduce一样，这是从右往左*

- Array.prototype.reverse()

  *将数组中元素颠倒，并返回该数组，改变原数组*

  ```
  let arr = [1,2,3]
  arr.reverse() // [3,2,1]
  ```

- Array.prototype.shift()

  *删除数组中第一个元素，并返回，改变原数组*

  ```
  let arr = [1,2,3]
  arr.shift() // [2,3]
  ```

- Array.prototype.slice()

  *返回一个被由指定开始到指定结束的数组元素，浅拷贝，不会改变原数组*
  *slice(begin, end);begin:数组中开始的索引，end：结束索引，默认数组长度*

  ```
  let arr = [1,2,3,4,5]
  arr.slice(1,2) // [2]
  arr.slice(3) // [4, 5] // 不传end，默认为数组长度
  ```

- Array.prototype.some()

  *判断数组中是否至少有一项通过判断，有返回true，否则false*

  ```
  let arr = [1,2,3]
  arr.some(e => e === 3) // true
  arr.some(e => e > 3) // false
  ```

- Array.prototype.sort()

  *用原地算法对数组进行排序，或指定某种算法进行排序.对原数组进行修改*
  *sort([comparaFunction])；可选参数，指定以某种算法进行排序*

  ```
  let arr = [2,5,1,3]
  arr.sort() // [1,2,3,5]
  arr.sort((a, b) => b - a) // [5,3,2,1]
  ```

- Array.prototype.splice()

  *对数组进行修改或替换现有元素。修改原数组*
  *splice(start, deleteCount, itme1, itme2...);接受多个参数，deleteCount和item都是可选参数。start：要操作的数组下标；deleteCount：要操作的个数；item：要添加的新元素，从start开始*

  ```
  let arr = ['a', 'b', 'c', 'd']
  arr.splice(0, 1) // ['b', 'c', 'd'] 从第0个开始删除，删除一个元素 
  arr.splice(2, 1) // ['b', 'c'] 从第2个元素开始删除，删除一个元素
  arr.splice(2, 0, 'f', 'g') //  ['b', 'c', 'f', 'g'] 从第2个位置开始插入，删除0个元素
  ```

- Array.prototype.toLocaleString()

  *将数组元素转为字符串，不改变原数组*

  ```
  let arr = ['a', 'b', 'c']
  arr.toLocaleString() // 'a,b,c'
  ```

- Array.prototype.toString()

  *将数组中的元素转为字符串*

  ```
  let arr = ['a', 'b', 'c']
  arr.toString() // 'a,b,c'
  ```

- Array.prototype.unshift()

  *在数组开头添加多个元素，改变原数组*

  ```
  let arr = [1,2,3]
  arr.unshift(5,6,7) // [5,6,7,1,2,3]
  ```

## Object

- Object.assign()

  *将所有属性的(可枚举)值从一个或多个源对象复制到目标对象中，返回一个目标对象,会改变目标对象*
  *Object.assign(target, ...sources);target：目标对象，会被合并，...sources:源对象，即要注入目标对象中的对象，可多个,若有相同的键，则后者覆盖前着*

  ```
  let a = {a:1, b:2}
  let b = {b:3, c:4}
  let c = {c:5, d:6}
  Object.assign(a, b, c) // {a:1, b:3, c:5, d:6} // 后者覆盖前者
  console.log(a) // {a:1, b:3, c:5, d:6} 改变目标对象
  // 复制一个对象
  Object.assign({}, b) // {b:3, c:4}
  // 值类型合并对象，会被转为对象
  let a1 = "i'm string"
  let a2 = 123
  Object.assign({}, a1, a2) // {0: "i'm string", 1: 123}
  Object.assign(a1, a2) // String {"i'm string"} 不会合并和改变目标对象
  // 不可进行深拷贝
  ```



- Object.defineProperties()

  *直接在对象上定义新的属性或改变原有属性，并返回该对象*
  *Object.defineProperties(obj, props) 接受两个参数，obj，原对象；props：对象，可写configurable、enumerable、value、writable、get、set*

  ```
  let obj = {a:1}
  Object.defineProperties(obj, {
    'a': {
      value: 2, // 改变原有属性
      writable: false // 变成该值不可改变
    },
    'b': {
      value: 3, // 新加属性
      writable: true // 该值可以改变，默认为true
    }
  }) // {a:2, b:3}
  obj.a = 0 // {a:2, b:3} // a的值不可改变
  obj.b = 0 // {a:2, b:0} // b的值可改变
  obj = {} // {} a的值不可改变，但obj的指向可以改变
  ```
- Object.defindeProerty()

  *直接在对象上新增或修改属性，并返回*
  *Object.defindeProperty(obj, prop, descriptor);obj:对象，prop：对象中被修改的属性，或新增属性，descriptor: 定义或修改属性的描述符*

  ```
  let obj = {a: 1}
  Object.defindeProperty(obj, 'a', {
    value: 2,
    wirtable: false
  }) // {a:2}
  Object.defindeProperty(obj, 'b' , {
    value: 3
  })
  console.log(obj) // {a:2, b:3}
  ```

- Object.entires()

  *将对象中的每一项都变成数组，并将每一项中的键值变成数组中的一项*

  ```
  let obj = {a:1, b:2}
  Object.entires(obj) // [['a', 1], ['b', 2]]
  ```

- Object.freeze()

  *冻结一个对象,不可对该对象做操作*

  ```
  let obj = {a:1}
  Object.freeze(obj)
  obj.a = 2 // {a:1} 不可操作
  obj['b'] = 1 // {a:1} 不可新增
  ```

- Object.getOwnPropertyDescriptor()

  *查看对象中某个属性的属性描述符*

  ```
  let obj = {a:1}
  Object.getOwnPropertyDescriptor(obj, a) // {configurable: true, enumerable: true, value: 1, writable: true}
  ```

- Object.getOwnPropertyDescriptors()

  *查看对象自身的属性描述符*

  ```
  let obj = {a: 1}
  Obejct.getOwnPropertyDescriptors(obj) // {a: {configurable: true, enumerable: true, value: 1, writable: true}}
  ```

- Object.getOwnPropertyNames()

  *查看对象中的所有属性名*

  ```
  let obj = {a:1, b:2}
  Object.getOwnPropertyNames(obj) // ['a', 'b']
  ```

- Object.getOwnPropertySymbol()

  *查找对象中所有symbol属性; symbol:唯一的、独一无二的*

  ```
  let obj = {}
  let a = Symbol('a')
  obj[a] = 'localSymbol'
  Object.getOwnPropertySymbol(obj) // [Symbol(a)]
  ```

- Object.getPrototypeOf()

  *返回指定对象的原型*

  ```
  let obj = {}
  Object.getPrototypeOf(obj) // 内部[[Prototype]]属性的值
  ```

- Object.is()

  *判断两个值是否相等*

  ```
  let obj = {a:1}
  let obj1 = obj
  let obj2 = {a:1}
  Object.is(obj, obj1) // true
  Object.is(obj, obj2) // false
  ```

- Object.isExtensible()

  *判断对象是否可扩展（是否可以在它上面添加新属性）*

  ```
  // 对象默认可扩展
  let obj = {}
  Object.isExtensible(obj) // true
  // 对象改为不可扩展
  Object.preventExtensions(obj)
  Object.isExtensible(obj) // false
  // 密封对象不可扩展
  let obj1 = Object.seal({})
  Object.isExtensible(obj1) // false
  // 冻结对象不可扩展
  let obj2 = Object.freeze({})
  Obejct.isExtensible(obj2) // false
  ```

- Object.isFrozen()

  *判断一个对象是否冻结*

  ```
  let obj = {}
  Object.isFrozen(obj) // false
  Object.freeze(obj) // 冻结
  Object.isFrozen(obj) // true
  ```

- Object.isSealed()

 *判断一个对象是否被密封*

 ```
 let obj = {}
 Object.isSealed(obj) // false 对象默认不是密封
 Object.preventExtensions(obj) // 改为不可扩展，对象变成密封
 Object.isSealed(obj) // true
 ```

- Object.keys()

  *返回对象的属性，若属性为数字时，则由大到小排序返回*

  ```
  let obj = {a:1, b:2}
  Object.keys(obj) // ['a', 'b']
  // 在es6以前参数是字符串则会抛错
  Object.keys('abc') // err
  // 在es6则会返回下标
  Object.keys('abc') // ['0', '1', '2']
  ```

- Obejct.preventExtensions()

  *将一个对象变为不可扩展（不可添加新属性）*

  ```
  let obj = {a:1}
  Object.preventExtensions(obj)
  obj['b'] = 2
  obj // {a:1}
  ```

- Object.prototype.hasOwnProperty()

  *返回布尔值，查找对象中是否有指定的键*

  ```
  let obj = {a:1}
  obj.hasOwnProperty('a') // true
  obj.hasOwnProperty('b') // false
  ```

- Object.prototype.isPropertypeOf()

  *检测一个对象是否在另一个对象的原型链上*

  ```
  function Obj() {}
  Obj.prototype.fn = function () {}
  let obj = new Obj()
  let obj1 = 'a'
  Obj.prototype.isPropertyOf(obj) // true
  Obk.prototype.isPropertyOf(obj1) // false
  ```

- Object.protoptye.propertyIsEnumerable()

  *判断对象中属性是否可枚举*

  ```
  let obj = {a:1}
  obj.propertyIsEnumerable('a') // true
  obj.propertyIsEnumerable('b') // false
  ```

- Object.prototype.toLocaleString()

  *返回一个对象的字符串表示*

  ```
  let obj = {a:123}
  obj.a.toLocaleString() // '1,2,3'
  let arr = [1,2,3]
  arr.toLocaleString() // '1,2,3'
  ```