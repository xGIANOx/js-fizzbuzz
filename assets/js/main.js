// const ulElement =document.querySelector("ul")


for (let i = 1; i <= 100; i++){
    console.log(i)
    
    let number = i
    let multiple3 = 3
    let multiple5 = 5
    if (number % multiple3 === 0 && number % multiple5 === 0){
       // const liElement = `<li>${i}</li>`
       // ulElement.innerHTML += liElement
        console.log('fizzbuzz')
     } else if (number % multiple5 === 0){
     console.log('buzz')
     } else if (number % multiple3 === 0) {
        console.log('fizz')
     }
      
        
     

}
