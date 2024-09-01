// btn btn-primary btn-block alternativeButton

const buttons = document.querySelectorAll('.alternativeButton');
const clickCounts = {};

buttons.forEach(button => {
    const buttonId = button.getAttribute('data-id');
    clickCounts[buttonId] = 0;

    button.addEventListener('click', () => {
        clickCounts[buttonId]++;
        clearTimeout(button.clickTimeout);

        if (clickCounts[buttonId] <= 5) {
            button.className = `btn btn-block alternativeButton btn-progress-${clickCounts[buttonId]}`;
        }

        if (clickCounts[buttonId] === 5) {
            alert(`Button ${buttonId} pressed 5 times within a short time!`);
            // alert(`Button ${button.innerText} pressed 5 times within a short time!`);
            clickCounts[buttonId] = 0;
            button.className = 'btn btn-primary btn-block alternativeButton';
            return;
        }

        button.clickTimeout = setTimeout(() => {
            clickCounts[buttonId] = 0;
            button.className = 'btn btn-primary btn-block alternativeButton';
        }, 1000);
    });
});