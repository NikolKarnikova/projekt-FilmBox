const addshow = () => {
    const polozkyMenu = document.querySelector('#menu-polozky');
    if (polozkyMenu.classList.contains('show')) {
        polozkyMenu.classList.remove('show');
    } else {
        polozkyMenu.classList.add('show');
    }
};

document.querySelector('#menu-tlacitko').addEventListener('click',addshow);
