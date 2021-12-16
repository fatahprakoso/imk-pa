let page = window.location.pathname.split("/").pop();
const body = document.querySelector('body');

let pages = {
    home: page !== 'home.html' ? './home.html' : '#',
    artikel: page !== 'artikel.html' ? './artikel.html' : '#',
    tentang_perusahaan: page !== 'tentang_perusahaan.html' ? './tentang_perusahaan.html' : '#',
    belanja: page !== 'belanja.html' ? '#' : '#',
}

// Navbar Generator
const navbar = document.createElement('nav');
navbar.classList.add('ph-nav-color', 'fixed-top');
navbar.innerHTML = `
    <div class="container-fluid mt-1 mb-1">
        <div class="row">
          <div class="col">
            <div class="d-flex align-items-center justify-content-center">
              <a class="navbar-brand ph-nav-main-text my-auto" href="${pages.home}"
                >PasarHijau!</a
              >
            </div>
          </div>
          <div class="col-7">
            <div class="d-flex justify-content-between align-items-center">
              <a class="nav-link ph-nav-text-size" href="${pages.belanja}">Belanja</a>
              <a class="nav-link ph-nav-text-size" href="${pages.artikel}"
                >Artikel</a
              >
              <a class="nav-link ph-nav-text-size" href="${pages.tentang_perusahaan}"
                >Tentang Perusahaan</a
              >
              <form class="d-flex mt-1 mb-1">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <a
              class="navbar-text text-center ph-nav-text-size my-auto"
              style="text-decoration: none"
              href="#"
              id="login-register"
              >Login/Register</a
            >
          </div>
        </div>
    </div>
`

body.insertAdjacentElement('afterbegin', navbar);


// Footer Generator
const footer = document.createElement('footer');
footer.classList.add('container');
footer.style.marginTop = '275px';
footer.innerHTML = `
        <div class="row row-cols-5 py-5 border-top">
          <div class="col-6 d-flex flex-column justify-content-center">
            <a href="${pages.home}" class="navbar-brand link-primary">
              <h1>PASAR HIJAU!</h1></a
            >
          </div>

          <div class="col-2">
            <h5>Belanja</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Buah Segar</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Sayur Segar</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Snack Buah</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Snack Sayur</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Paket Hadiah</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Buah Kering</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>Bantuan</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Help Center</a>
              </li>
              <li class="nav-item mb-2">
                <a href="${pages.tentang_perusahaan}" class="nav-link p-0 text-muted">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>About</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="${pages.tentang_perusahaan}" class="nav-link p-0 text-muted">About Us</a>
              </li>
              <li class="nav-item mb-2">
                <a href="${pages.tentang_perusahaan}" class="nav-link p-0 text-muted">Responsibility</a>
              </li>
              <li class="nav-item mb-2">
                <a href="${pages.tentang_perusahaan}" class="nav-link p-0 text-muted"
                  >Technology & Innovation</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="${pages.tentang_perusahaan}" class="nav-link p-0 text-muted"
                  >Explore Our Stories</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row row-cols-2">
          <div class="col-10">
            <p style="color: #818181cb">
              © 2021 PasarHijau All right reserved.
            </p>
          </div>
          <div class="col-2">
            <img src="./../res/NAVBAR/medsos.png" alt="..." />
          </div>
        </div>
`

body.insertAdjacentElement('beforeend', footer);