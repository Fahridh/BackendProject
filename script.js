document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kirim permintaan POST ke API
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login gagal');
        }
    })
    .then(data => {
        // Tangani respons dari API (login berhasil)
        document.getElementById('loginMessage').textContent = 'Login berhasil';
        // Lakukan redirect atau tindakan selanjutnya setelah login berhasil
        window.location.href = '/dashboard';
    })
    .catch(error => {
        // Tangani error dari permintaan atau respons API (login gagal)
        document.getElementById('loginMessage').textContent = 'Login gagal. Silakan coba lagi.';
        console.error('Error:', error);
    });
});
