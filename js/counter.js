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

    if ((arg.classList.contains('plus-button')) || (arg.classList.contains('menu-button'))) {
        plusFunction(arg.dataset.id);
        changeCounter(arg.dataset.id);
        document.getElementById(`counter-${arg.dataset.id}`).classList.remove('hide');
        document.getElementById('order-button').classList.remove('hide');
    }

    if (arg.classList.contains('minus-button')) {
        minusFunction(arg.dataset.id);
        changeCounter(arg.dataset.id);
    }

    checkOrder();
});

function plusFunction(id) {
    cart[id]++;
    document.getElementById(`counter-${id}`).classList.remove('hide');
}

function minusFunction(id) {
    cart[id]--;

    if (cart[id] <= 0) {     
        $(`.${id}`).toggleClass('active');
        $(`.button-${id}`).toggleClass('hide');
        $(`.plus-${id}`).toggleClass('animateToRight');
        $(`.minus-${id}`).toggleClass('animateToLeft');
        document.getElementById(`counter-${id}`).classList.add('hide');

        cart[id] = 0;
    }
}

function changeCounter(id) {
    document.getElementById(`counter-${id}`).firstChild.data = cart[id];
}

function checkOrder() {
    let check = 0;

    for (var id in cart) {
        if (cart[id] > 0) {check += 1;}
    }

    if (check == 0) {
        document.getElementById('order-button').classList.add('hide');
    }
}