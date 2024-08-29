(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    // Tambah Produk
    const hargaProdukInput = document.getElementById('harga_produk');
    
    hargaProdukInput.addEventListener('input', function() {
        const inputValue = this.value;
        const inputGroup = this.parentElement.querySelector('.input-group-number');

        if (inputValue === '') {
            inputGroup.style.display = 'block';
        } else {
            inputGroup.style.display = 'none';
        }
    });
  
    //Login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk mengirimkan permintaan standar

        // Lakukan validasi login (misalnya, Anda bisa menggunakan if else statement di sini)
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'username' && password === 'password') {
            // Jika login berhasil, arahkan ke halaman homepage
            window.location.href = 'index.html'; // Ganti dengan nama file homepage yang sesuai
        } else {
            alert('Login gagal. Silakan coba lagi.');
        }
    });

    //Register
    function register() {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
    
        if (username === '' || password === '') {
            alert('Mohon isi semua kolom');
            return;
        }
    
        // Logika register ke backend akan ditambahkan di sini
        alert(`Proses registrasi dengan username: ${username}`);
    }
    
    //Toggleform
    function toggleForm(formId) {
        // Toggle antara form login dan register
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
    
        if (formId === 'login-form') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else if (formId === 'register-form') {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
    }
})(jQuery);

