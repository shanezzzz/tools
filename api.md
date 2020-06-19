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
