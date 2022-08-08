const nums = [
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    },
    {
        id: 3,
        text: '节点1_1',
        parentId: 2 //通过这个字段来确定子父级
    },
    {
        id: 4,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
]

// ////////////////////////////////////

function listToTree(data) {
    let temp = {};
    let treeData = [];
    for (let i = 0; i < data.length; i++) {
        temp[data[i].id] = data[i];
    }
    
    for (let i in temp) {
        if (+temp[i].parentId != 0) {
            if (!temp[temp[i].parentId].children) {
                temp[temp[i].parentId].children = [];
            }
            temp[temp[i].parentId].children.push(temp[i]);
        } else {
            treeData.push(temp[i]);
        }
    }
    return treeData;
}

const tree = JSON.stringify(listToTree(nums));
console.log(tree);

// ///////////////////////////////

function listToTree2 (parentId, arr) {
    const res = [];
    const children = arr.filter(item => item.parentId === parentId);
    for (const child of children) {
        const [id, text, parentId] = child;
        const objPre = {
            id,
            text,
            parentId
        }
        const hasChild = arr.filter(item => item.parentId === child.id).length !== 0;
        const obj = hasChild ? {...objPre, children: listToTree2(child.id, arr)} : objPre;
        res.push(obj);
    }
    return res;
}
