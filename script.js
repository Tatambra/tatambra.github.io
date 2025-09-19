// Riferimenti agli elementi
const burgerMenu = document.getElementById('burger-menu');
const dropdownMenu = document.getElementById('dropdown-menu');

// Funzione per aprire/chiudere il menu
burgerMenu.addEventListener('click', () => {
    // Toggle tra mostrare e nascondere il menu
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});


