const { rgbToHsv , hsvToRgb }=require('./transform');
//除法函数，用来得到精确的除法结果
const accDiv = (arg1,arg2)=>{
    let t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
};
// 思路：R决定暖色，B决定冷色，G以向量投影决定冷暖色
// true是暖色
const temperatureEvaluate = (palette)=>{
    // input: palette = [[r,g,b],[r,g,b],[r,g,b]...]\
    let warmCount = 0;
    palette.map((color,index)=>{
        warmCount += accDiv(( color[0] - color[2] + accDiv(color[1],(Math.sqrt(2))) ), 255)
    });
    return (warmCount>0)
};

const brightnessEvaluate = (palette) =>{
    // input: palette = [[r,g,b],[r,g,b],[r,g,b]...]\
    let whiteCount = 0;
    // count = 3, then scale is 0 to 3
    // imagine V from 0~100, the max Value is  100*count
    // so the threshold should be accDiv(count,100)
    palette.map((color,index)=>{
        let thisHSV = rgbToHsv(color);
        whiteCount += accDiv(thisHSV[2],palette.length)
    });
    return (whiteCount>(accDiv(palette.length,100)));
};
