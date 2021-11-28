//遍历二叉树
//深度 先序
let res = []
function depth (node) {
    if (!node) return null
    if (node) {
        res.push(node)
        depth(node.left)
        depth(node.right)
    }
}
depth(root)



//广度
let res = []
let stach = []
const bfs = function(node) {
    if (!node) return null
    stach.push(node)
    while(stach.length) {
        let item = stach.shift()
        res.push(item)
        if (item.left) stach.push(item.left)
        if (item.right) stach.push(item.right)
        
    }
}