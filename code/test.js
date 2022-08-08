const list = [
    {id:1, name:'部门A', parentId:0},
    {id:2, name:'部门B', parentId:0},
    {id:3, name:'部门C', parentId:1},
    {id:4, name:'部门D', parentId:1},
    {id:5, name:'部门E', parentId:2},
    {id:6, name:'部门F', parentId:3},
    {id:7, name:'部门G', parentId:2},
    {id:8, name:'部门H', parentId:4}
  ];//原始数据
  function pick (id) {
      const res = [];
      const children = list.filter((item) => {
          return item.parentId == id;
      });
      // console.log(children);
      if (children.length) {
          for (const child of children) {
              const obj = {
                  id: child.id,
                  name: child.name,
                  parentId: id,
                  children: pick(child.id)
              }
              res.push(obj);
          }
          // return res;
      }
      return res;
  }
  
  const result = JSON.stringify(pick(0));
  console.log(result);