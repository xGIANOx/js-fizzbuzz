const rowElement = document.querySelector(".row")
 



for (let i = 1; i <= 100; i++) {

    //document.getElementById('ulList').style.display = 'flex'
    //document.getElementById('ulList').style.flexDirection = 'row'
    //document.getElementById('ulList').style.flexWrap = 'wrap'
    //document.getElementById('ulList').style.listStyle = 'none'
    //document.getElementById('ulList').style.padding = '1rem'
    





    if (i % 3 === 0 && i % 5 === 0) {
      let i = 'fizzbuzz'
      const colElement = `<div class="col fizzbuzz">${i}</div>`
      rowElement.innerHTML += colElement
    } else if (i % 3 === 0) {
      console.log("Fizz");
      let i = 'fizz'
      const colElement = `<div class="col fizz">${i}</div>`
      rowElement.innerHTML += colElement

    } else if (i % 5 === 0) {
      console.log("Buzz");
      let i = 'buzz'
      const colElement = `<div class="col buzz">${i}</div>`
      rowElement.innerHTML += colElement
    } else {
      console.log(i);
      const colElement = `<div class="col number">${i}</div>`
      rowElement.innerHTML += colElement
            
    }

  }
