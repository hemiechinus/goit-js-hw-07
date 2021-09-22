const navEl = document.getElementById('categories');
console.log('В списке', navEl.children.length, 'категории.')
navEl.querySelectorAll('.item h2').
    forEach(element =>
        console.log(`Категория: ${element.textContent}
Количество элементов: ${element.nextElementSibling.children.length}`));
