module.exports = function solveSudoku(matrix) {
    res = matrix;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                res[i][j] = unique(res[i]);
            }
        }
    }
    buff = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[j][i].length > 1) {
                buff.push(i);
            }
        }
    }
    var mass = [];
    var subMassiv = [];

    for (let j = 0; j < buff.length; j++) {
        for (let i = 0; i < 9; i++) {
            if (!Array.isArray(matrix[i][buff[j]])) {

                subMassiv.push(matrix[i][buff[j]]);
            }
        }
        if (subMassiv.length !== 0){
            mass.push(subMassiv);
        }
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < buff.length; j++) {
            if (Array.isArray(matrix[i][buff[j]])) {
                if (Array.isArray(mass[j])) {
                    res[i][buff[j]] = unique2(mass[j], matrix[i][buff[j]]);
                    if (Array.isArray(res[i][buff[j]]))
                        if (res[i][buff[j]].length === 1)
                            res[i][buff[j]] = res[i][buff[j]];
                }
            }
        }
        if (subMassiv.length !== 0)
            mass.push(subMassiv);
    }

    return res;
};


function unique(arr) {
    let suggest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        let index = suggest.indexOf(arr[i]);
        if (index !== -1) suggest.splice(index, 1);
    }
    return suggest;
}

function unique2(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr2.indexOf(arr[i]);
        if (index !== -1) arr2.splice(index, 1);
    }
    return arr2;
}
