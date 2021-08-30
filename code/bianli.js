//深度优先遍历
let deepTraversal1 = (node, nodeList = []) => {
    if (node !== null) {
        nodeList.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            deepTraversal1(children[i], nodeList)
        }
    }
    return nodeList
}

let deepTraversal2 = (node) => {
    let nodes = []
    if (node !== null) {
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}



//广度优先遍历
let widthTraversal = (node) => {
    let nodes = []
    let stack = []
    if (node) {
        stack.push(node)
        while (stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}



let dfs = function (node) {
    let nodes = []
    if (node) {
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(dfs(children[i]))
        }
    }
    return nodes
}

let bfs = function (node) {
    let nodes = []
    let stack = []
    if (node) {
        stack.push(node)
        while(stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}



let dfs = function(node) {
    let nodes = []
    if (node) {
        nodes.push(node)
        let children = node.children
        for(let i = 0; i < children.length; i++) {
            nodes = nodes.concat(dfs(children[i]))
        }
    }
    return nodes
}

let bfs = function (node) {
    let stack = []
    let nodes = []
    if (node) {
        stack.push(node) 
        while (stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}

let dfs = function (node) {
    let nodes = []
    if (node) {
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(dfs(children[i]))
        }
    }
    return nodes
}

let bfs = function (node) {
    let stack = []
    let nodes = []
    if (node) {
        stack.push(node)
        while(stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}