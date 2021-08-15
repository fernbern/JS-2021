let count = {
  num1: 1,
  num: 2,
  num: 3,
  add: function(){
    return this.num1 + this.num2;
  }
}
console.log(count.add);
console.log(this.num1);
map(const x => x * 100);
