rec_even = (x) => { // recursive_even
  if (x == 0)
    return "even";
  if (x == 1)
    return "odd";
  if (x < 0)
    return rec_even(x + 2);
  return rec_even(x - 2);
};

test_numbers = [9, 911, 0, 2, -1, -51, 12];
var test_length = test_numbers.length;

for (let i=0; i<test_length; i++)
  console.log(`${test_numbers[i]} is ${rec_even(test_numbers[i])}`)