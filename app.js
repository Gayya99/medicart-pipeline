
function calculateTotal(price, quantity) {
  return price * quantity;
}

module.exports = { calculateTotal };

if (require.main === module) {
  console.log("MediCart Pharmacy System");
  console.log("Checkout total:", calculateTotal(500, 2));
}
