const sortNumber = (a,b)=>{
    return a - b;
};
const getSimilarColor=(color,palettes)=>{
    // input: palettes = [[r,g,b],[r,g,b],....]
    // remove target color from palette array
    let removed = palettes.splice(palettes.indexOf(color),1);
    // console.log(palettes);
    let distance = [];
    // const black = [0,0,0];
    let calc = function(v1, v2){
        let i,
            d = 0;
        for (i = 0; i < v1.length; i++) {
            d += (v1[i] - v2[i])*(v1[i] - v2[i]);
        }
        return Math.sqrt(d);
    };
    palettes.map((palette,index)=>{
        distance[index] = calc(color,palette);
    });
    // console.log(distance);
    /*array.sort是按照名称排序的 不对大小排序
    排序完毕后 还需要反推出索引号 应该返回原来的颜色rgb
    取distance中最小值的序号→取palettes数组中对应序号的值
     return them most similar [r,g,b]*/
    return palettes[distance.indexOf(distance.sort(sortNumber)[0])];
};

/*let palette = [
    [1,2,3],
    [3,4,5],
    [4,5,6]
];
let color = palette[1];*/
// console.log(getSimilarColor(color,palette));

//expected: [r,g,b]
/*console.log(getSimilarColor(color,palette));*/






