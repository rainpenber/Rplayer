



function getColor() {
    /* 学习笔记：querySelector() 方法返回匹配指定 CSS 选择器元素的第一个子元素。
* 该方法只返回匹配指定选择器的第一个元素。如果要返回所有匹配元素，
* 需要使用 querySelectorAll() 方法替代．*/
    // const img = document.querySelector('#cover');
    const img = fs.open('../assets/cover.jpg', 'r', (err, fd) => {
        if (err) throw err;
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });

    /*const getDarkColor=(palettes)=>{
        let distance = [];
        const black = [0,0,0];
        let calc = function(v1, v2){
            let i,
                d = 0;

            for (i = 0; i < v1.length; i++) {
                d += (v1[i] - v2[i])*(v1[i] - v2[i]);
            }
            return Math.sqrt(d);
        };
        palettes.map((palette,index)=>{

        })
        return distance.sort().reverse()[0];
    };*/

}
export default getColor;
