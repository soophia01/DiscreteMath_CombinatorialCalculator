// Permutation
function Perm(sample, objects) {
    perm = sample;
    for (i = sample - 1; i > sample - objects; i--) {
        perm *= i;
    }
    return perm;
}
console.log(Perm(4, 1))

// Factorial
function Factorial(sample) {
    fact = 1;
    for (i = 2; i <= sample; i++) {
        fact *= i;
    }
    return fact;
}

// Combination
function Comb(sample, objects) {
    return Perm(sample, objects) / Factorial(objects);
}

// check the entry number
//// 可以再多加彈跳視窗
function invalid(sample, objects) {
    if (parseInt(sample) < 0 || isNaN(parseInt(sample))) {
        document.getElementById("sample").focus();
        return true;
    } else if (parseInt(objects) < 0 || isNaN(parseInt(objects))) {
        document.getElementById("objects").focus();
        return true;
    } return false;
}

// 分別計算結果
//// Permutation
function clickPerm(){
    document.getElementById("permutation-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("permutation-result").innerHTML = Perm(sample, objects);
}

//// Combination
function clickComb(){
    document.getElementById("combination-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("combination-result").innerHTML = Comb(sample, objects);
}

//// Arrangement
function clickArra(){
    document.getElementById("arrangement-result").innerHTML = ""
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("arrangement-result").innerHTML = Math.pow(sample, objects);
}

///// Selections
function clickSele(){
    document.getElementById("Selections-result").innerHTML = "";
    sample = parseInt(document.getElementById("sample").value);
    objects = parseInt(document.getElementById("objects").value);
    if (invalid(sample, objects)) return;
    document.getElementById("Selections-result").innerHTML = Comb(sample + objects - 1, objects);
}

// 計算全部結果
function computeAll(){
    document.getElementById("permutation-result").innerHTML = "";
    document.getElementById("combination-result").innerHTML = "";
    document.getElementById("arrangement-result").innerHTML = "";
    document.getElementById("Selections-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    clickPerm();
    clickComb();
    clickArra();
    clickSele();
}