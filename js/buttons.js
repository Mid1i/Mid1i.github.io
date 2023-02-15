document.addEventListener('click', function(event) {
    let arg = event.target;
    let id = arg.dataset.id;

    if (arg.classList.contains(`button-${id}`)) {
        $(`.${id}`).toggleClass('active');
        $(`.button-${id}`).toggleClass('hide');
        $(`.plus-${id}`).toggleClass('animateToRight');
        $(`.minus-${id}`).toggleClass('animateToLeft');
    }

    if (arg.classList.contains(`${arg.id}`)) {
        $(`.${arg.id}`).toggleClass('active');     
    }
});
