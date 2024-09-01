function transition_old(from, to, effect) {
    const fromDiv = document.getElementById(from);
    const toDiv = document.getElementById(to);

    // Prepare the new div for the transition
    toDiv.classList.remove('inactive-left', 'inactive-right', 'inactive-top', 'inactive-bottom');
    toDiv.classList.add('active');

    // Add the appropriate inactive class based on the effect
    switch (effect) {
        case 'forward':
            toDiv.style.left = '100%';
            fromDiv.classList.add('inactive-left');
            break;
        case 'back':
            toDiv.style.left = '-100%';
            fromDiv.classList.add('inactive-right');
            break;
        case 'top-down':
            toDiv.style.top = '100%';
            fromDiv.classList.add('inactive-top');
            break;
        case 'bottom-up':
            toDiv.style.top = '-100%';
            fromDiv.classList.add('inactive-bottom');
            break;
    }

    // Trigger reflow to ensure the transition starts
    void toDiv.offsetWidth;

    // Start the transition
    toDiv.style.left = '0';
    toDiv.style.top = '0';

    // Remove the inactive class from the old div after the transition
    setTimeout(() => {
        fromDiv.classList.remove('active', 'inactive-left', 'inactive-right', 'inactive-top', 'inactive-bottom');
        fromDiv.style.left = '';
        fromDiv.style.top = '';
    }, 500); // Match the duration of the CSS transition
}
function transition_new(from, to, effect) {
    const fromDiv = document.getElementById(from);
    const toDiv = document.getElementById(to);

    // Prepare the new div for the transition
    toDiv.classList.remove('inactive-left', 'inactive-right', 'inactive-top', 'inactive-bottom');
    toDiv.classList.add('active');

    // Set initial position for the new div based on the effect
    switch (effect) {
        case 'forward':
            toDiv.style.left = '100%';
            fromDiv.style.left = '0';
            break;
        case 'back':
            toDiv.style.left = '-100%';
            fromDiv.style.left = '0';
            break;
    }

    // Trigger reflow to ensure the transition starts
    void toDiv.offsetWidth;

    // Start the transition
    toDiv.style.left = '0';
    fromDiv.style.left = effect === 'forward' ? '-100%' : '100%';

    // Clean up classes after the transition
    setTimeout(() => {
        fromDiv.classList.remove('active');
        fromDiv.style.left = '';
        toDiv.classList.remove('inactive-left', 'inactive-right', 'inactive-top', 'inactive-bottom');
    }, 500); // Match the duration of the CSS transition
}
function transition(from, to, direction) {
    const fromDiv = document.getElementById(from);
    const toDiv = document.getElementById(to);

    // Prepare the new div for the transition
    toDiv.classList.remove('inactive-left', 'inactive-right');
    toDiv.classList.add('active');

    // Set initial position for the new div based on the direction
    if (direction === 'forward') {
        toDiv.style.left = '100%';
        fromDiv.style.left = '0';
    } else if (direction === 'back') {
        toDiv.style.left = '-100%';
        fromDiv.style.left = '0';
    }

    // Trigger reflow to ensure the transition starts
    void toDiv.offsetWidth;

    // Start the transition
    toDiv.style.left = '0';
    fromDiv.style.left = direction === 'forward' ? '-100%' : '100%';

    // Clean up classes after the transition
    setTimeout(() => {
        fromDiv.classList.remove('active');
        fromDiv.classList.add(direction === 'forward' ? 'inactive-left' : 'inactive-right');
        fromDiv.style.left = '';
    }, 500); // Match the duration of the CSS transition
}