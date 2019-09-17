## 初始化变量

### 空字符串

	emptyString: new String(), // jshint ignore:line

### 空数组

	emptyArray: Object.freeze ? Object.freeze([]) : []

### 空方法

	emptyFn = function () {}

## 系统方法

### 对象copy

只copy不重复的属性

    applyIf: function (object, config) {
        if (object && config && typeof config === 'object') {
            for (var property in config) {
                if (object[property] === undefined) {
                    object[property] = config[property];
                }
            }
        }

        return object;
    }

### 克隆

    clone: function(item, cloneDom) {
        if (item == null) {
            return item;
        }

        // DOM nodes
        // TODO proxy this to Ext.Element.clone to handle automatic id attribute changing
        // recursively
        if (cloneDom !== false && item.nodeType && item.cloneNode) {
            return item.cloneNode(true);
        }

        var type = toString.call(item),
            i, j, k, clone, key;

        // Date
        if (type === '[object Date]') {
            return new Date(item.getTime());
        }

        // Array
        if (type === '[object Array]') {
            i = item.length;

            clone = [];

            while (i--) {
                clone[i] = Ext.clone(item[i], cloneDom);
            }
        }
        // Object
        else if (type === '[object Object]' && item.constructor === Object) {
            clone = {};

            for (key in item) {
                clone[key] = Ext.clone(item[key], cloneDom);
            }

            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (item.hasOwnProperty(k)) {
                        clone[k] = item[k];
                    }
                }
            }
        }

        return clone || item;
    }

## 判断类型

### 是否为空

	isEmpty: function(value, allowEmptyString) {
        return (value == null) || (!allowEmptyString ? value === '' : false) || (Ext.isArray(value) && value.length === 0);
    }

### 是否为数组

	isArray: ('isArray' in Array) ? Array.isArray : function(value) {
        return toString.call(value) === '[object Array]';
    }

### 是否是合法日期

	isDate: function(obj) {
        return toString.call(obj) === '[object Date]';
    }

### 是否是对线

	isObject: (toString.call(null) === '[object Object]') ?
    function(value) {
        // check ownerDocument here as well to exclude DOM nodes
        return value != null && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
    } :
    function(value) {
        return toString.call(value) === '[object Object]';
    }

### 是否为数字

	isNumber: function(value) {
        return typeof value === 'number' && isFinite(value);
    },

    /**
     * Validates that a value is numeric.
     * @param {Object} value Examples: 1, '1', '2.34'
     * @return {Boolean} True if numeric, false otherwise
     */
    isNumeric: function(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

### 是否为字符串

	isString: function(value) {
        return typeof value === 'string';
    }

### 是否为布尔类型

	isBoolean: function(value) {
        return typeof value === 'boolean';
    }