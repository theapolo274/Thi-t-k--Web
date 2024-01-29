document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.l1 > a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {

            event.preventDefault();


            var submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('active');
            }


            menuItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    var otherSubmenu = otherItem.nextElementSibling;
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                    }
                }
            });
        });
    });
});
