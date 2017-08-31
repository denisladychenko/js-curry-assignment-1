'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  (listing, item) =>
    name =>
      name === listing.name ? listing.price : 0



/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      // TODO
//returns the array of objects { customer, total }
     return carts.reduce((previousCust, cart) =>{

        const totalOfCart = cart.items.reduce((totalForTheCart, item) =>{
          //this is the total for the customer
          totalForTheCart += listings.reduce((price, currListing) =>{
            //accumulates the total for the items in the cart
             price += listedPrice(currListing)(item);
             //return the price of the item in the cart
             return price;
          },0)
          //return carts total
          return totalForTheCart
        },0)
        //add the object to the array
        previousCust.push({
          customer : cart.customer,
          total : totalOfCart
        })
        //returns the array to pass it as a previous parameter
        return previousCust
     },[])
        

     
  }
module.exports = {
  listing,
  cart,
  calculateTotals
}
