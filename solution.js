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
});
