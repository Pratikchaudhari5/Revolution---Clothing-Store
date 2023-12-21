const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.getElementById('lg-bag').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the <a> tag
    window.location.href = 'cart.html'; // Redirect to the cart.html page
  });

  




  document.addEventListener('DOMContentLoaded', function () {
    // Get the table body where the cart items are displayed
    const tbody = document.querySelector('#cart tbody');

    // Add event listeners to all remove buttons
    const removeButtons = document.querySelectorAll('.fa-times-circle');
    removeButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        // Remove the corresponding row when the remove button is clicked
        const row = event.target.closest('tr');
        row.remove();
        // Recalculate the total price
        calculateTotal();
      });
    });

    // Add event listeners to all quantity input fields
    const quantityInputs = document.querySelectorAll('#cart input[type="number"]');
    quantityInputs.forEach(function (input) {
      input.addEventListener('change', function () {
        // Update the subtotal when the quantity changes
        updateSubtotal(input);
        // Recalculate the total price
        calculateTotal();
      });
    });

    // Function to update the subtotal for a given row
    function updateSubtotal(input) {
      const row = input.closest('tr');
      const price = parseFloat(row.querySelector('td:nth-child(4)').innerText.replace('Rs.', ''));
      const quantity = parseInt(input.value);
      const subtotal = price * quantity;
      row.querySelector('td:nth-child(6)').innerText = 'Rs.' + subtotal;
    }

    // Function to calculate the total price
    function calculateTotal() {
      const subtotals = document.querySelectorAll('#cart tbody td:nth-child(6)');
      let total = 0;
      subtotals.forEach(function (subtotal) {
        total += parseFloat(subtotal.innerText.replace('Rs.', ''));
      });
      // Update the total in the Cart Totals section
      document.querySelector('#Subtotal table tr:last-child td:last-child').innerText = 'Rs.' + total;
    }
  });
  