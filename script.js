document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Pesan berhasil dikirim! Saya akan segera merespons.");
            form.reset();
        } else {
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    }).catch(error => {
        alert("Gagal mengirim pesan, periksa koneksi internet.");
    });
});