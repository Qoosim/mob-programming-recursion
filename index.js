function sum(number, total = 0) {
    if (number <= 0) {
      return total;
    }
    return sum(number - 1, total + number);
  }
  
  console.log(sum(4));
  console.log(sum(10));
  