const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

// loop for add event on multiple -  %  + button

for (let i = 0; i < incrementBtn.length; i++) {

    incrementBtn[i].addEventListener('click', function () {
        // collect the value of the quantity textcontent, based on clicked increment button Sibling

        let increment = Number(this.previousElementSibling.textContent);

        // plus increment variable value by 1
        increment++;

        // show the increment variable value on quality element based on clicked increment button sibling

        this.previousElementSibling.textContent = increment;

        totalCalc();


    });


    decrementBtn[i].addEventListener('click', function () {
        // collect the value of the quantity textcontent, based on clicked decrement button Sibling

        let decrement = Number(this.nextElementSibling.textContent);

        // minus decrement  variable value by 1 based on condition
        decrement--;

        // show the decrement variable value on quality element based on clicked decrement button sibling

        this.nextElementSibling.textContent = decrement;

        totalCalc();


    });


}


// function of calculating total amount of product

const totalCalc = function () {

    // declare all initial variable

    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;


    // for calculating subtotal value from every single product

    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

    }

    //  show the subtotal variable value on subtotalElem element

    subtotalElem.textContent = subtotal.toFixed(2);

    //  calculate the totalTax

    totalTax = subtotal * tax;

    // show the totaltax on taxelemnt 
    taxElem.textContent = totalTax.toFixed(2);

    // calculate the total
    total = subtotal * totalTax;


    // show the total variable value on totalElem element
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);

}