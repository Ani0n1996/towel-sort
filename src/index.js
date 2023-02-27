
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) {
        return arr;
    }
    matrix.forEach((el, i) => {
        if (!(i%2)) {
            el.forEach(elel => {
                arr.push(elel)
            })
        } else {
            for(let i=el.length -1; i>=0; i--) {
                arr.push(el[i])
            }
        }
    });
    return arr;
};
