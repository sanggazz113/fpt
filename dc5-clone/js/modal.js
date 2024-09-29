function openModal() {
    document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}

function openModal2() {
    closeModal();
    document.getElementById('myModal2').classList.remove('hidden');
}

function closeModal2() {
    document.getElementById('myModal2').classList.add('hidden');
}



function _showModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function _closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function register(el) {
    var form = $(el).closest('form');

    // Disable submit button
    form.find('.gradient-button').prop('disabled', true);

    if (form.find('[name="name"]').length && form.find('[name="name"]').val().trim() == '') {
        form.find('.gradient-button').prop('disabled', false);
        return false;
    }
    if (form.find('[name="phone"]').length && form.find('[name="phone"]').val().trim() == '') {
        form.find('.gradient-button').prop('disabled', false);
        return false;
    }
    if (form.find('[name="address"]').length && form.find('[name="address"]').val().trim() == '') {
        form.find('.gradient-button').prop('disabled', false);
        return false;
    }
    if (form.find('[name="question"]').length && form.find('[name="question"]').val().trim() == '') {
        form.find('.gradient-button').prop('disabled', false);
        return false;
    }

    var codes = window.location.pathname.split('/'),
        code = (codes.length === 3) ? codes[2] : '';

    
    $.ajax({
        url: 'https://pay.fpt.com/api/fpay/register',
        data: form.serialize() + '&code=' + code,
        type: 'post',
        success: function(res) {
            if (res.success) {
                _closeModal('myModal');
                _showModal('myModal2');
                form[0].reset();
            }

            // Enable submit button
            form.find('.gradient-button').prop('disabled', false);
        },
        error: function(res) {
            // Enable submit button
            form.find('.gradient-button').prop('disabled', false);
        }
    });

    return false;
}