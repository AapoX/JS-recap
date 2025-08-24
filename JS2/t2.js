// Task 1

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

// Task 2

function arrayMethods() {
  const numArray = [];
  for (let i = 0; i < 5; i++) {
    const input = prompt(`Enter Number ${i + 1}:`);
    numArray.push(Number(input));
  }
  console.log('Numbers:', numArray);

  const numInc = Number(prompt('Enter a number to Search: '));
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

// Task 3

function extractEvenNumbers() {
  let numbers = [];
  let userInput;

  do {
    userInput = prompt("Enter a number (or 'done' to finish):");
    if (userInput !== 'done') {
      let num = parseFloat(userInput);
      if (!isNaN(num)) {
        numbers.push(num);
      }
    }
  } while (userInput !== 'done');

  console.log('Numbers you entered:', numbers);

  let evenNums = [];
  for (let num of numbers) {
    if (num % 2 == 0) {
      evenNums.push(num);
      console.log(`${num} is even`);
      document.body.innerHTML += `<p>${num} is even</p>`;
    }
  }

  if (evenNums.length == 0) {
    console.log('No even numbers found');
    document.body.innerHTML += '<p>No even numbers found</p>';
  }

  console.log('Done!');
  document.body.innerHTML += '<p>Finished checking numbers</p>';
}

// Task 4 and 5

function sortArray(nums, direction) {
  let result;
  if (direction == 'asc') {
    result = nums.slice().sort((a, b) => a - b);
  } else {
    result = nums.slice().sort((a, b) => b - a);
  }
  return result;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
let arr2 = [5, 2, 8, 1, 9];

console.log('First array:', arr1);
console.log('Low to high:', sortArray(arr1, 'asc'));
console.log('High to low:', sortArray(arr1, 'desc'));

console.log('Second array:', arr2);
console.log('Low to high:', sortArray(arr2, 'asc'));
console.log('High to low:', sortArray(arr2, 'desc'));


// Task 6

function movieRatingTracker() {
  let movieList = [];

  let howMany = prompt('How many movies you wanna rate?');
  let movieCount = parseInt(howMany);

  for (let i = 1; i <= movieCount; i++) {
    let movieName = prompt('Movie title:');
    let movieRating = prompt('Rate it 1-5:');
    let rating = parseFloat(movieRating);

    let movie = {
      title: movieName,
      rating: rating,
    };

    movieList.push(movie);
  }

  let sorted = movieList.slice();
  sorted.sort((a, b) => b.rating - a.rating);

  let bestMovie = sorted[0];

  document.body.innerHTML += '<h2>Your Movie Ratings</h2>';
  for (let i = 0; i < sorted.length; i++) {
    document.body.innerHTML += `<p>${sorted[i].title} - ${sorted[i].rating} stars</p>`;
  }

  document.body.innerHTML += `<h3>Best movie: ${bestMovie.title} (${bestMovie.rating} stars)</h3>`;

  console.log('Your movies:', movieList);
  console.log('Sorted list:', sorted);
  console.log('Top rated:', bestMovie);
}
