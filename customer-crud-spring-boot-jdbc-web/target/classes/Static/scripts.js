


document.addEventListener('DOMContentLoaded', () => {
    // Form validation for create/edit forms
    const forms = document.querySelectorAll('#createForm, #editForm');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const firstName = form.querySelector('#firstName');
            const lastName = form.querySelector('#lastName');
            const email = form.querySelector('#email');
            const firstNameError = form.querySelector('#firstNameError');
            const lastNameError = form.querySelector('#lastNameError');
            const emailError = form.querySelector('#emailError');

            // Reset error messages
            firstNameError.textContent = '';
            lastNameError.textContent = '';
            emailError.textContent = '';
            firstNameError.classList.remove('show');
            lastNameError.classList.remove('show');
            emailError.classList.remove('show');

            // Validate first name
            if (!firstName.value.trim()) {
                firstNameError.textContent = 'First name is required';
                firstNameError.classList.add('show');
                isValid = false;
            }

            // Validate last name
            if (!lastName.value.trim()) {
                lastNameError.textContent = 'Last name is required';
                lastNameError.classList.add('show');
                isValid = false;
            }

            // Validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                emailError.textContent = 'Email is required';
                emailError.classList.add('show');
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                emailError.textContent = 'Invalid email format';
                emailError.classList.add('show');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    });
});

// Delete confirmation
function confirmDelete(button) {
     const id = button.getAttribute('data-id');
     if (confirm('Are you sure you want to delete this customer?')) {
         const form = document.createElement('form');
         form.method = 'POST';
         form.action = `/customers/delete/${id}`;
         document.body.appendChild(form);
         form.submit();
     }
 }
}