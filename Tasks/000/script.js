document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);

    alert(`Thank you, ${name}. Your email (${email}) has been recorded.`);
});
