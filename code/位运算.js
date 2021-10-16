//循环检查二进制位是否为1
//检查第i位时，让 n 与 2^i 进行运算
//当且仅当 n 的第 i 位为1时，运算结果不为0
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};


//n & (n−1)，运算结果为把 n 的二进制位中的最低位的 1 变为 0 
var hammingWeight = function(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};