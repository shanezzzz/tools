/**
 * 编码参数
 * @param {String} param 参数
 * @returns {String}
 */
export function encodeBtoaParameter(param) {
  try {
    const paramString = String(param)
    const encodeParam = window.btoa(window.encodeURIComponent(paramString))
    return encodeParam
  } catch(e) {
    return param
  }
}

/**
 * url参数解码
 * 可解码混合url参数（已加密+未加密）
 * @param {String|Array} param 需要查询url参数
 * @returns {String} 未编码参数return null
 * ** 调用实例 **
 ```javascript
  // if urlparam: num=1
  decodeUrlParameter('num'); // return 1
  //or
  decodeUrlParameter(); // return num=1
 ```
 *
 */
export function decodeUrlParameter(param) {
  if (!window.location.search) return null;

  const locationParam = window.location.search; // 获取url参数
  const pureLoactionParam = locationParam.toString().split('?')[1]; // 筛选

  try {
    // 有压缩参数可解，直接解码并返回对应值
    const decodeParam = window.decodeURIComponent(window.atob(pureLoactionParam)); // 解码
    if (!param) return decodeParam;

    // 有参数，返回参数所对应的值
    const tempParamArray = decodeParam.split('&');
    const tempParamObj = {};
    tempParamArray.forEach(item => {
      const tempItem = item.split('=')
      tempParamObj[tempItem[0]] = tempItem[1];
    })
    return tempParamObj[param];
  } catch (e) {
    // 有参数，判断是否为混合参数，有并拆接混合参数
    const tempParamArray = pureLoactionParam.split('&');
    const tempParamObj = {}; // 保存解码后的值
    tempParamArray.forEach(item => {
      try {
        // 解码压缩参数
        const decodeParam = window.decodeURIComponent(window.atob(item)); // 解码
        const tempItem = decodeParam.split('=');
        tempParamObj[tempItem[0]] = tempItem[1];
      } catch (e) {
        // 未压缩参数
        const tempItem = item.split('=');
        tempParamObj[tempItem[0]] = tempItem[1];
      }
    })
    return tempParamObj[param];
  }
}

/**
 * 去除url域名和参数
 * @param {String|Array} url
 * @returns {String}
 * **
 * 
 ```javascript
 toolsGetUrlRelativePath('http://www.baidu.com/cn/abc.png?a=1'); 
 // return: /cn/abc.png
 ```
 * **
 */
export function getUrlRelativePath(url) {
  // 判断是否数组
  if (url instanceof Array) {
    const arrayUrl = []; // 去除域名后的数组
    url.forEach(item => {
      try {
        const arrUrl = item.toString().split('//'); // 去除https://
        const start = arrUrl[1].indexOf('/'); // 去除域名
        const relUrl = arrUrl[1].substring(start); // 合并

        // 去除参数
        if (relUrl.indexOf('?') !== -1) {
          relUrl = relUrl.split('?')[0];
        }
        arrayUrl.push(relUrl);
      } catch(e) {
        console.log('tools toolsGetUrlRelativePath catch err:', e);
        arrayUrl.push(item);
      }
    })
    return arrayUrl;
  } else {
    // 字符串
    try {
      const arrUrl = url.toString().split('//'); // 去除https://
      const start = arrUrl[1].indexOf('/'); // 去除域名
      const relUrl = arrUrl[1].substring(start); // 合并

      // 去除参数
      if (relUrl.indexOf('?') !== -1) {
        relUrl = relUrl.split('?')[0];
      }

      return relUrl;
    } catch(err) {
      console.log('tools toolsGetUrlRelativePath catch err:', err);
      return url;
    }
  }
}

/**
 * 将已转义的字符转为html标签
 * @param {String} str 
 * @returns {String}
 */
export function htmlspecialcharsDecode(str) {
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&quot;/g, "''");
  str = str.replace(/&#039;/g, "'");
  return str;
}

/**
 * js原生页面平滑滚动回顶部
 * window.requestAnimationFrame(callback) // 每秒执行60次该callback
 */
export function goTop() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if (top > 0) {
    window.requestAnimationFrame(goTop)
    window.scrollTo(0, top - top / 8);
  }
}

/**
 * 节流
 */
export function debounce(fn, delay) {
  let timer; // 定时器

  /**
   * 闭包，外部执行的函数
   * @{any}...args 函数调用时传的参数
   */
  return function(...args) {
    let context = this; // 函数执行时的this绑定

    // 当函数再次执行时，重置定时器
    timer && clearTimeout(timer);

    // 延时执行函数
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}

/**
 * 深拷贝
 */
export function deepClone(obj) {
  // 是值类型就返回
  if (typeof obj != 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  obj instanceof Array ? result = [] : result = {}

  // 引用类型
  for (let key in obj) {
    // 保证key不是原型的属性,除了值都不需要拷贝
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]) // 递归调用
    }
  }
  return result
}