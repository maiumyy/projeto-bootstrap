window.onload = function () {
    const recipeName = localStorage.getItem('recipeName');
    const recipeEmail = localStorage.getItem('recipeEmail');
    const recipeDescription = localStorage.getItem('recipeDescription');
    const recipeCategory = localStorage.getItem('recipeCategory');

    if (recipeName) document.getElementById('recipeName').value = recipeName;
    if (recipeEmail) document.getElementById('recipeEmail').value = recipeEmail;
    if (recipeDescription) document.getElementById('recipeDescription').value = recipeDescription;
    if (recipeCategory) document.getElementById('recipeCategory').value = recipeCategory;
};

document.getElementById('recipeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    var valid = true;

    var emailField = document.getElementById('recipeEmail');
    var descriptionField = document.getElementById('recipeDescription');

    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(emailField.value)) {
        emailField.classList.add('is-invalid');
        emailField.classList.remove('is-valid');
        valid = false;
    } else {
        emailField.classList.add('is-valid');
        emailField.classList.remove('is-invalid');
    }

    if (descriptionField.value.length < 20) {
        descriptionField.classList.add('is-invalid');
        descriptionField.classList.remove('is-valid');
        descriptionField.setCustomValidity('A descrição deve ter pelo menos 20 caracteres.');
        valid = false;
    } else {
        descriptionField.classList.add('is-valid');
        descriptionField.classList.remove('is-invalid');
        descriptionField.setCustomValidity('');
    }

    Array.from(form.elements).forEach(function (element) {
        if (!element.checkValidity()) {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
        } else {
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
            valid = false;
        }
    });

    if (valid) {
        localStorage.setItem('recipeName', document.getElementById('recipeName').value);
        localStorage.setItem('recipeEmail', emailField.value);
        localStorage.setItem('recipeDescription', descriptionField.value);
        localStorage.setItem('recipeCategory', document.getElementById('recipeCategory').value);

        alert('Formulário enviado com sucesso!');
    }
});