# Recursion
[main source](https://www.youtube.com/watch?v=IJDJ0kBx2LM&list=WL&index=3&t=312s)

Recursion is a method/function calls it self. That method/function returns a value, maybe it doesn't. And it have a condition to stop calling. 

```ts
function recursionExam(a: number) {
    if(a> 10 ) {
        return
    }
    return recursionExam(a++)
}
``` 
| Pros | Cons |
| ---- | ---- |
| Bridges the gap between elegance and complexity | Slowness due to CPU overload |
| Reduces the need for complex loops and auxiliary data structures | Can lead to out of memory errors / stack overflow exceptions |
| Can reduce the time complexity easily with memoization | Can be unnecessarily complex if poorly constructed
| Work really well with recursive structures like tree and graph |