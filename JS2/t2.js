function manyArrays() {
  const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  console.log(`Fruits: ${fruits}`);
  console.log(` Length of Fruits: ${fruits.length}`);
  console.log(`Element at Index 2: ${fruits[2]}`);
  console.log(`Last Element of Fruits: ${fruits[fruits.length - 1]}`);

  const vegetables = [];
  for (let i = 0; i < 3; i++) {
    const input = prompt('give me a vegetable');
    vegetables.push(input);
  }
  console.log(`Vegetables: ${vegetables}`);
  console.log(`Length of Vegetables: ${vegetables.length}`);
}

function arrayMethods() {
  const numArray = [];
  for (let i = 0; i < 5; i++) {
    const input = prompt(`Enter Number ${i + 1}:`);
    numArray.push(Number(input));
  }
  console.log('Numbers:', numArray);

  const numInc = Number(
    prompt('Enter a number to Search: ')
  );
  if (numArray.includes(numInc)) {
    console.log(`Number ${numInc} is found in the array`);
  } else {
    console.log(`Number ${numInc} is not found in the array`);
  }

  numArray.pop();
  console.log('Updated Numbers:', numArray);
  numArray.sort((a, b) => a - b);
  console.log('Sorted Numbers:', numArray);
}
