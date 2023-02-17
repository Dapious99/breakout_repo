    function tellFortune(x, y, z, n){
     let description = "You will be an/a " + x + " in " + y + " and married to " + z + " with " + n + " kids"
    
      return description
    }
    console.log(tellFortune("Actor", "America", "Alicia", 2))
    console.log(tellFortune("Boxer", "Uk", "Oyin", 4))
    console.log(tellFortune("Accountant" , "Nigeria", "Uche", 3))
    
    function calculateDogAge(NN){
      let theYears = NN*7
      let dogYears ="Your doggie is "+ theYears +" years old in dog years"
      return dogYears
    }
    console.log(calculateDogAge(2))
    console.log(calculateDogAge(4))
    console.log(calculateDogAge(14))
    
    function calculateSupply(a, b){
      let result="You will need " + a + " to last you until the ripe old age of " + b
      return result
    }    
    console.log(calculateSupply("2years", "mangoes"))
    console.log(calculateSupply("5years", "oranges"))
    console.log(calculateSupply("4years", "pineapples"))

    function calcCircumference(NN){
      let circumference = 2*3.124*NN
      let description = "The circumference of a circle is " + circumference
      return description
    }
    console.log(calcCircumference(7))
    console.log(calcCircumference(19))
    function calcArea(NN){
      let circumference = 2*3.124*NN
      let result = "The area of a circle is " + circumference
      return result
    }
    console.log(calcArea(12))
    console.log(calcArea(36))

    function celsiusToFahrenheit(c){
      let celsius = c*1.8+32
      let result = "The conversion of celsius to fahrenheit is " + celsius
      return result
    }
    console.log(celsiusToFahrenheit(4))
    function fahrenheitToCelsius(f){
      let fahrenheit = f*0.5-32
      let result = "The conversion of fahrenheit to celsius is " + fahrenheit
      return result
    }
    console.log(fahrenheitToCelsius(45))