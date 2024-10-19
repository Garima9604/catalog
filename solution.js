const fs = require("fs");

function decode(value, base) {
  return BigInt(parseInt(value, base)).toString(10);
}

function findY(points) {
  const k = points.length;
  let c = BigInt(0);
  for (let i = 0; i < k; i++) {
    const xi = BigInt(points[i][0]);
    const yi = BigInt(points[i][1]);
    let li = BigInt(1);
    for (let j = 0; j < k; j++) {
      if (i != j) {
        const xj = BigInt(points[j][0]);
        li *= xi - xj;
        li /= xi - xj;
      }
    }
    c += li * yi;
  }
  return c;
}

fs.readFile("input.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const jsonData = JSON.parse(data);
  const keys = jsonData.keys;
  const n = keys.n;
  const k = keys.k;

  const points = [];

  for (let i = 1; i <= n; i++) {
    const entry = jsonData[i];
    if (entry) {
      const base = parseInt(entry.base);
      const value = entry.value;
      const decodedY = decode(value, base);
      points.push([i, decodedY]);
      console.log(` x = ${i} and y = ${decodedY}`);
    }
  }

  if (points.length >= k) {
    const secret = findY(points);
    console.log("c = ", secret.toString());
  } else {
    console.log("Nhi Mila");
  }
});
