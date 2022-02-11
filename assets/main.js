window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){
        console.log(evt.target.classList)
        if(evt.target.classList.contains('qty')){
            var button = evt.target.parentNode.querySelector('.buy-button')
            var qty = parseInt(evt.target.value)

            button.setAttribute('data-item-quantity', qty)


            var price = button.getAttribute('data-item-price')

            price = (price * qty).toFixed(2).replace('.', ',')
            button.innerHTML = `Bestellen für ${price} €`;
        }
    })
});
