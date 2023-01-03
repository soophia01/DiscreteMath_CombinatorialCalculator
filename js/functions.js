// part 1
// Permutation
function Perm(sample, objects) {
    perm = sample;
    for (i = sample - 1; i > sample - objects; i--) {
        perm *= i;
    }
    return perm;
}

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
    }
    return false;
}

// 分別計算結果
//// Permutation
function clickPerm() {
    document.getElementById("permutation-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("permutation-result").innerHTML = Perm(
        sample,
        objects
    );
}

//// Combination
function clickComb() {
    document.getElementById("combination-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("combination-result").innerHTML = Comb(
        sample,
        objects
    );
}

//// Arrangement
function clickArra() {
    document.getElementById("arrangement-result").innerHTML = "";
    sample = document.getElementById("sample").value;
    objects = document.getElementById("objects").value;
    if (invalid(sample, objects)) return;
    document.getElementById("arrangement-result").innerHTML = Math.pow(
        sample,
        objects
    );
}

///// Selections
function clickSele() {
    document.getElementById("Selections-result").innerHTML = "";
    sample = parseInt(document.getElementById("sample").value);
    objects = parseInt(document.getElementById("objects").value);
    if (invalid(sample, objects)) return;
    document.getElementById("Selections-result").innerHTML = Comb(
        sample + objects - 1,
        objects
    );
}

// 計算全部結果
function computeAll() {
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

////////////////////////////////////////////////////
// part 2
// Catalan Number
function catalan(n) {
    if (n == 0) {
        return [1];
    }
    if (n == 1){
        return [1, 1];
    }
    const catalanNumbers = [1, 1];
    for (let i = 2; i <= n; i++) {
        let result = 0;
        for (let j = 0; j < i; j++) {
            result += catalanNumbers[j] * catalanNumbers[i - j - 1];
        }
        catalanNumbers.push(result);
    }
    return catalanNumbers;
}


// Triangular Number
function triangular(n) {
    const triangularNumbers = [0];
    for (let i = 1; i <= n; i++) {
        triangularNumbers.push((i * (i + 1)) / 2);
    }
    return triangularNumbers;
}

// Harmonic Number
function harmonic(n) {
    let fractions = [1];
    let sum = new Fraction(0);
    for (let i = 1; i <= n; i++) {
        let fraction = new Fraction(1, i);
        sum = sum.add(fraction);
        fractions.push(sum.toFraction());
    }
    return fractions;
}

// Fibonacci
function fibonacci(n) {
    let results = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            results.push(0);
        } else if (i === 1) {
            results.push(1);
        } else {
            results.push(results[i - 1] + results[i - 2]);
        }
    }
    return results;
}


// Lucas Number
function lucas(n) {
    let results = [];
    if (n == 0) {
        results.push(2);
    } else if (n == 1) {
        results.push(2, 1);
    } else {
        results.push(2, 1);
        for (let i = 2; i <= n; i++) {
            let c = results[i - 1] + results[i - 2];
            results.push(c);
        }
    }
    return results;
}


// Eulerian number
function eulerTriangle(n) {
    const row = [];
    if (n == 0){
        return 1
    }
    for (let m = 0; m < n; m++) {
        row.push(eulerTriangleElement(n, m));
    }
    return row;
}

function eulerTriangleElement(n, m) {
    if (n === 0 && m === 0) {
        return 1;
    }
    if (m < 0 || m > n) {
        return 0;
    }
    return (n - m) * eulerTriangleElement(n - 1, m - 1) + (m + 1) * eulerTriangleElement(n - 1, m);
}

// Stirling number
function stirlingNumbers(n) {
    const row = [];
    if (n == 0){
        return 1
    }
    for (let k = 1; k <= n; k++) {
        const number = stirlingNumber(n, k);
        if (number !== 0) {
            row.push(number);
        }
    }
    return row;
}

function stirlingNumber(n, k) {
    if (n === 0 && k === 0) {
        return 1;
    }
    if (n === 0 || k === 0) {
        return 0;
    }
    return (k * stirlingNumber(n - 1, k)) + stirlingNumber(n - 1, k - 1);
}



// check the entry number
function invalid2(n) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
        document.getElementById("n").focus();
        return true;
    } else {
        return false;
    }
}

// 分別計算結果
//// Catalan number
function clickCatalan() {
    document.getElementById("catalan-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("catalan-result").innerHTML = catalan(n);
}

// triangular number
function clickTriangular() {
    document.getElementById("triangular-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("triangular-result").innerHTML = triangular(n);
}

// harmonic number
function clickHarmonic() {
    document.getElementById("harmonic-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("harmonic-result").innerHTML = harmonic(n);
}

// Fibonacci number
function clickFib() {
    document.getElementById("fibonacci-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("fibonacci-result").innerHTML = fibonacci(n);
}

// Lucas number
function clickLuc() {
    document.getElementById("lucas-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("lucas-result").innerHTML = lucas(n);
}

// Eulerian number
function clickEul() {
    document.getElementById("eulerian-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("eulerian-result").innerHTML = eulerTriangle(n);
}

// Stirling number
function clickStir() {
    document.getElementById("stirling-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    document.getElementById("stirling-result").innerHTML = stirlingNumbers(n);
}


// 計算全部結果
function computeAll2() {
    document.getElementById("catalan-result").innerHTML = "";
    document.getElementById("triangular-result").innerHTML = "";
    document.getElementById("harmonic-result").innerHTML = "";
    document.getElementById("fibonacci-result").innerHTML = "";
    document.getElementById("lucas-result").innerHTML = "";
    document.getElementById("eulerian-result").innerHTML = "";
    document.getElementById("stirling-result").innerHTML = "";
    n = document.getElementById("n").value;
    if (invalid2(n)) return;
    clickCatalan();
    clickTriangular();
    clickHarmonic();
    clickFib();
    clickLuc();
    clickEul();
    clickStir();
}