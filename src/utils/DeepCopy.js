/**
 * @author MaZiXiao
 * @date 2022-07-12 14:11
 */
function getDataType(asg) {
    let str = Object.prototype.toString.call(asg)
    let mapType = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return mapType[str]
}

export const DeepCopy = function (params) {
    let obj;
    /*
    @getDataType 调用获取数据类型的函数
    * */
    let _type = getDataType(params)
    if (_type === 'array') {
        obj = [];
        for (let i = 0; i < params.length; i++) {
            obj.push(DeepCopy(params[i]))

        }
    } else if (_type === 'object') {
        obj = {};
        for (const key in params) {
            obj[key] = DeepCopy(params[key])
        }
    } else {
        return params
    }
    return obj
}
