const addshow = () => {
    const polozkyMenu = document.querySelector('#menu-polozky');
    const tlacitkoMenu = document.querySelector('#menu-tlacitko');

    if (polozkyMenu.classList.contains('show')) {
        polozkyMenu.classList.remove('show');
        tlacitkoMenu.innerHTML = '<i class="fas fa-bars"></i>';

    } else {
        polozkyMenu.classList.add('show');
        tlacitkoMenu.innerHTML = '<i class="fas fa-times"></i>';

    }
};

document.querySelector('#menu-tlacitko').addEventListener('click',addshow);

