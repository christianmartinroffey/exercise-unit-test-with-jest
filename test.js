// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
// test for euro to dollars
 //import the function from app.js
   
const { fromEuroToDollar } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
   
    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

// test for dollars to yen
 //import the function from app.js
const { fromDollarToYen } = require('./app.js')

test("one Yen should be 153.48 ", function(){

    // use the function like its supposed to be used
    const yen = fromDollarToYen(5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 6 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(767.4000000000001); //
})


// test for yen to pounds
test("add parameters", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromYenToPound(1000)

    
    const expected = 0.7818608288 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(6.254886630179828); //
})