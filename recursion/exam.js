function revertString(str) {
    if (str === '') {
        return ''
    }
    return revertString(str.slice(1)) + str[0]
}

function isPalindrome(str) {
    if (str.length == 0 || str.length == 1) {
        return true
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false
}

function findBinary(num) {
    let result = ''
    function find(num, result) {
        if (num == 0) return result
        result = num % 2 + result
        return find(Math.floor(num / 2), result)
    }
    return find(num, result)
}

function recursionSum(num) {
    return num <= 1 ? num : num + recursionSum(num - 1)
}

function findFibonaccy(n) {
    if (n == 0 || n == 1) return n
    return findFibonaccy(n - 1) + findFibonaccy(n - 2)
}

