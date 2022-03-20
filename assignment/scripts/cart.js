console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
let item= '';

// CREATE FUNCTION addItem
// INPUT: parameter string 'item'
// CODE adding the idem to the cart
// OUPUT: return true that the item was added

function addItem(item){
    basket.push(item);
    return true;
} // end addItem

console.log('In addItem adding coffee to the basket', addItem('coffee'), 'expect coffee =>', basket);
console.log('In addItem adding milk to the basket', addItem('milk'), 'expect coffee, milk =>', basket);
console.log('In addItem adding sugar to the basket', addItem('sugar'), 'expect coffee, milk, sugar =>', basket);

// CREATE FUNCTION listItems
// INPUT: the basket array
// OUTPUT: a console.log of each individual item on a new line

function listItems(basket){
    for(let i=0; i <basket.length; i++){
        console.log(basket[i])
    } // end for loop
} // end listItems

console.log('testing listItems expect basket values below')
listItems(basket);
addItem('chocoloate syrup');
console.log('added chocolate syrup. what do I have in the basket now?')
listItems(basket);


// CREATE FUNCTION empty

function empty(){
    basket = [];
} // end function empty

empty();
console.log('Testing empty function expect [] =>', basket);

addItem('impulse candy');
console.log('added item, expect impulse candy =>', basket);
empty();
console.log('Testing empty function expect [] =>', basket);