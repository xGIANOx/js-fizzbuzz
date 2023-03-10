const ulElement = document.querySelector("ul")
 



for (let i = 1; i <= 100; i++) {

    document.getElementById('ulList').style.display = 'flex'
    document.getElementById('ulList').style.flexDirection = 'row'
    document.getElementById('ulList').style.flexWrap = 'wrap'
    document.getElementById('ulList').style.listStyle = 'none'
    document.getElementById('ulList').style.padding = '1rem'
    





    if (i % 3 === 0 && i % 5 === 0) {
      let i = 'fizzbuzz'
      const liElement = `<li class="fizzbuzz">${i}</li>`
      ulElement.innerHTML += liElement
    } else if (i % 3 === 0) {
      console.log("Fizz");
      let i = 'fizz'
      const liElement = `<li class="fizz">${i}</li>`
      ulElement.innerHTML += liElement

    } else if (i % 5 === 0) {
      console.log("Buzz");
      let i = 'buzz'
      const liElement = `<li class="buzz">${i}</li>`
      ulElement.innerHTML += liElement
    } else {
      console.log(i);
      const liElement = `<li class="number">${i}</li>`
      ulElement.innerHTML += liElement
            
    }

  }
