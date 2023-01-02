// 傳兩個參數
function eulerTriangle(n, m) {
  if (n === 0 && m === 0) {
    return 1;
  }
  if (m < 0 || m > n) {
    return 0;
  }
  return (n - m) * eulerTriangle(n - 1, m - 1) + (m + 1) * eulerTriangle(n - 1, m);
}

console.log(eulerTriangle(3, 2));

// 傳一個參數，列出第n行的所有結果
function eulerTriangle(n) {
    const row = [];
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
  
  console.log(eulerTriangle(4));
  // Output: [1, 11, 11, 1]
  console.log(eulerTriangle(5));
  // Output: [1, 26, 66, 26, 1]
  console.log(eulerTriangle(6));
  // Output: [1, 57, 302, 302, 57, 1]
  

