let page = window.location.pathname.split("/").pop();
let pages = {
    home: page !== 'home.html' ? './home.html' : '#',
    artikel: page !== 'artikel.html' ? './artikel.html' : '#',
    detail_artikel: page !== 'detail_artikel.html' ? './detail_artikel.html' : '#',
    detail_produk: page !== 'detail_produk.html' ? './detail_produk.html' : '#',
    tentang_perusahaan: page !== 'tentang_perusahaan.html' ? './tentang_perusahaan.html' : '#',
    belanja: page !== 'belanja.html' ? '#' : '#',
}

console.log(page);

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

document.querySelector('body').insertAdjacentElement('afterbegin', navbar);