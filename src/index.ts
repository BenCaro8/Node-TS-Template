let bingus = 'dingus';
bingus = bingus + 1;
console.log(bingus);
const truth = true;
console.log(truth);

console.log(myadd(6));

function myadd(var1: number, var2?: number) {
  return var1 + (var2 || 0);
}
