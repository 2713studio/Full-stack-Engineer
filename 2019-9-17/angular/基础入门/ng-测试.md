Jasmine 提供非常丰富的API，一些常用的Matchers：

toBe() 等同 ===

toNotBe() 等同 !==

toBeDefined() 等同 !== undefined

toBeUndefined() 等同 === undefined

toBeNull() 等同 === null

toBeTruthy() 等同 !!obj

toBeFalsy() 等同 !obj

toBeLessThan() 等同 <

toBeGreaterThan() 等同 >

toEqual() 相当于 ==

toNotEqual() 相当于 !=

toContain() 相当于 indexOf

toBeCloseTo() 数值比较时定义精度，先四舍五入后再比较。

toHaveBeenCalled() 检查function是否被调用过

toHaveBeenCalledWith() 检查传入参数是否被作为参数调用过

toMatch() 等同 new RegExp().test()

toNotMatch() 等同 !new RegExp().test()

toThrow() 检查function是否会抛出一个错误

而这些API之前用 not 来表示负值的判断。


expect(true).not.toBe(false);
--------------------- 
作者：FlyWine 
来源：CSDN 
原文：https://blog.csdn.net/wf19930209/article/details/80413904 
版权声明：本文为博主原创文章，转载请附上博文链接！