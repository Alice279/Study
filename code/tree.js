//深度优先遍历  先序
let result = []
let dfs = function (node) {
    if (!node) return null
    if (node) {
        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
}
dfs(tree)

//广度优先遍历
let result = []
let stack = [tree]
let count = 0
let bfs = function () {
    let node = stack[count]
    if (node) {
        result.push(node.val)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
        count++
        bfs()
    }
}