let cart = {
    'burger': 0,
    'pizza': 0,
    'hotdog': 0,
    'cookies': 0,
    'coke': 0,
    'fries': 0,
    'popcorn': 0,
    'sushi': 0,
    'icecream': 0
}

document.addEventListener('click', function(event) {

    let arg = event.target;

    if (arg.classList.contains('plus-button')) {
        plusFuncion(arg.dataset.id);
    }

    if (arg.classList.contains('minus-button')) {
        minusFuncion(arg.dataset.id);
    }
});

function plusFunction(id) {
    cart[id]++;
    renderCart();
}

function minusFunction(id) {
    cart[id]--;

    if (cart[id] < 0) {
        $(`.${id}`).toggleClass('active');
        $(`.plus-${id}`).toggleClass('animateToRight');
        $(`.minus-${id}`).toggleClass('animateToLeft');
        $(`.button-${id}`).toggleClass('hide');
        cart[id] = 0;
    }

    renderCart();
}



function renderCart() {
    console.log(cart);
}