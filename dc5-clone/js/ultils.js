document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuIconPath = document.getElementById('menu-icon-path');
    const body = document.body;

    if (menu.classList.contains('hidden')) {
        // Expand menu
        menu.classList.remove('hidden');
        menu.classList.add('h-auto');
        
        menu.style.height = `${menu.scrollHeight}px`; // Set the height to its scroll height for transition

        // Change icon to X
        menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');

        // Prevent body scroll
        body.classList.add('overflow-hidden');
    } else {
        // Collapse menu
        menu.style.height = '0px';
        setTimeout(() => {
            menu.classList.add('hidden');
            body.classList.remove('overflow-hidden'); // Allow body scroll
        }, 300); // Matches the duration of the transition

        // Change icon back to hamburger
        menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
});

document.querySelectorAll('.btn-expand').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const parentGroup = this.closest('.group');
        parentGroup.classList.toggle('collapsed');
    });
});