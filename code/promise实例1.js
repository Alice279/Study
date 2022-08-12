

// 使用 promise 实现 每间隔1秒输出 1 2 3
const arr = [1, 2, 3];
arr.reduce((p, x) => {
    return p.then(() => {
      return new Promise((resolve, reject) => {
          setTimeout(() => resolve(console.log(x)), 1000);
        })
    })
}, Promise.resolve())


// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；让三个灯不断交替重复亮灯
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const ligth = function(timer, cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer)
    })
}

const step = function() {
    Promise.resolve().then(() => {
        return light(3000, red);
    }).then(() => {
        return light(2000, yellow);
    }).then(() => {
        return ligth(1000, green);
    }).then(() => {
        return step();
    })
}

step();


// 实现 mergePromise 函数 
// 把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
// 
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
})
const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
})
const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
})
  
function mergePromise (ajaxArray) {
    // 存放每个ajax的结果
    const data = [];
    let promise = Promise.resolve();
    ajaxArray.forEach(ajax => {
        // 第一次的then为了用来调用ajax
        // 第二次的then是为了获取ajax的结果
        promise = promise.then(ajax).then(res => {
        data.push(res);
        return data; // 把每次的结果返回
        })
    })
    // 最后得到的promise它的值就是data
    return promise;
  }
  
mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
});
  
  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]




// 封装一个异步加载图片的方法
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            console.log("一张图片加载完成");
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}


// 限制异步操作的并发个数并尽可能快的完成全部
function limitLoad(urls, handler, limit) {
    let sequence = [].concat(urls); // 复制urls
    // 这一步是为了初始化 promises 这个"容器"
    let promises = sequence.splice(0, limit).map((url, index) => {
      return handler(url).then(() => {
        // 返回下标是为了知道数组中是哪一项最先完成
        return index;
      });
    });
    // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
    return sequence
      .reduce((pCollect, url) => {
        return pCollect
          .then(() => {
            return Promise.race(promises); // 返回已经完成的下标
          })
          .then(fastestIndex => { // 获取到已经完成的下标
              // 将"容器"内已经完成的那一项替换
            promises[fastestIndex] = handler(url).then(
              () => {
                return fastestIndex; // 要继续将这个下标返回，以便下一次变量
              }
            );
          })
          .catch(err => {
            console.error(err);
          });
      }, Promise.resolve()) // 初始化传入
      .then(() => { // 最后三个用.all来调用
        return Promise.all(promises);
      });
  }

limitLoad(urls, loadImg, 3)
    .then(res => {
      console.log("图片全部加载完毕");
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });