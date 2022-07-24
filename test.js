const size = readline().split(' ');
const n = size[0];
const k = size[1];
// const res = Array.from(Array(n * k), () => Array(n * k).fill(0));
const res = [];
for (let i = 0; i < n; i++) {
    const px = readline().split(' ');
    let point = k;  ///k层
    while (point) {
        //1层
        const ceng = [];
        for (let j = 0; j < n; j++) {
            ceng.push(...Array(k).fill(px[j]));
            res.push(ceng);
        }
        point--;
    }
}

print(res)