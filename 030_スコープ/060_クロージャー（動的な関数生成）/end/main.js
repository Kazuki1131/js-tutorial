function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    //addNumberFactory関数が呼び出されるとaddNumber関数を返す
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);

const result1 = add5(10);
const result2 = add10(10);

console.log(result1); //15
console.log(result2); //20
