const themeSwitch = document.querySelector('.theme-switch-input');
const body = document.querySelector('body');
const menuOpenButton = document.querySelector('.menu-open-btn');
const menuCloseButton = document.querySelector('.menu-close-btn');

// Функція для зміни теми та збереження її в локальному сховищі
function toggleTheme() {
    if (themeSwitch.checked === false) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Зберігаємо стан теми в локальному сховищі
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Зберігаємо стан теми в локальному сховищі
    }
}

// Перевірка, яка тема встановлена за замовчуванням
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    themeSwitch.checked = true;
    toggleTheme();
} else {
    themeSwitch.checked = false;
}

// Додавання події для перемикання теми
themeSwitch.addEventListener('change', toggleTheme);

// функція додавання та видалення класу

  const menu = document.querySelector('.header-menu');

  menu.addEventListener('click', function(event) {
    if (event.target.matches('.header-menu-link')) {

      const links = menu.querySelectorAll('.header-menu-link');
      links.forEach(link => {
        link.classList.remove('exception');
      });

      event.target.classList.add('exception');
    }
  });
 

// Відкриття меню при кліку на кнопку відкриття
  menuOpenButton.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  menuOpenButton.classList.remove('is-open')
  menuOpenButton.classList.add('hidden');
  menuCloseButton.classList.remove('hidden');
});

// Закриття меню при кліку на кнопку закриття
  menuCloseButton.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
  menuOpenButton.classList.remove('hidden');
  menuCloseButton.classList.add('hidden');
  });

  async function loadBooks(category) {
    try {
        const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${category}`);
        
        if (!response.ok) {
            throw new Error('Failed to load books');
        }
        
        const data = await response.json();

        console.log(data);
        displayBooks(data.books);
    } catch (error) {
        console.error('Error loading books:', error);
    }
};

loadBooks();