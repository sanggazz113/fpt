document.querySelectorAll('.dropdownButton').forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.closest('.dropdown');
        const dropdownContent = dropdown.querySelector('.dropdownContent');
        const dropdownIcon = dropdown.querySelector('.dropdownIcon');
        
        dropdownContent.classList.toggle('hidden');

        if (!dropdownContent.classList.contains('hidden')) {
            dropdownContent.classList.add('scale-y-100');
            dropdownContent.classList.remove('scale-y-0');
        } else {
            dropdownContent.classList.add('scale-y-0');
            dropdownContent.classList.remove('scale-y-100');
        }

        dropdownIcon.classList.toggle('rotate-180');
    });
});

function selectProvince(element, province) {
    const dropdown = element.closest('.dropdown');
    const selectedProvince = dropdown.querySelector('.selectedProvince');
    const dropdownContent = dropdown.querySelector('.dropdownContent');
    const dropdownIcon = dropdown.querySelector('.dropdownIcon');
    
    selectedProvince.textContent = province;
    dropdownContent.classList.add('hidden');
    dropdownContent.classList.add('scale-y-0');
    dropdownContent.classList.remove('scale-y-100');
    dropdownIcon.classList.remove('rotate-180');
}
