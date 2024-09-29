document.getElementById('messageIcon').addEventListener('click', function() {
    document.getElementById('chatFormContainer').classList.remove('hidden');
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatFormContainer').classList.add('hidden');
});

window.addEventListener('load', function() {
    setTimeout(function() {
        const bubble = document.getElementById('notificationBubble');
        bubble.classList.remove('hidden');
        bubble.classList.add('opacity-100', 'scale-100');
        
        setTimeout(function() {
            bubble.classList.remove('opacity-100', 'scale-100');
            bubble.classList.add('opacity-0', 'scale-0');
        }, 6000);
    }, 1000);
});
