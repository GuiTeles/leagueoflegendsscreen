const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classlist.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classlist.remove('span-active');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocus));