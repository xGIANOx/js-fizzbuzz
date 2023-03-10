const ulElement = document.querySelector("ul")




for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
      const liElement = `<li>("Buzz")</li>`
      liElement.innerHTML += liElement
    } else {
      console.log(i);
      
    }
  }
