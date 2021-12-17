import { Modal } from 'bootstrap';

const log_in_up = document.getElementById('login-register');
let modalWrap = null;

log_in_up.addEventListener('click', () => {
  if (modalWrap) modalWrap.remove();

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div
      class="modal fade"
      id="signInUpModal"
      tabindex="-1"
      aria-labelledby="signInUpModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <h3>Login</h3>
                </div>
                <div class="col">
                  <h3>Register</h3>
                </div>
              </div>
              <div class="row mt-3 mb-3">
                <div class="col">
                  <div class="mt-3 mb-3">
                    <label for="emailLogin" class="form-label"
                      >Username or Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="emailLogin"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label for="passLogin" class="form-label"
                      >Password</label
                    >
                    <input
                      class="form-control"
                      id="passLogin"
                      placeholder="***"
                    />
                  </div>
                  <div class="row mt-4 align-items-center">
                    <div class="col-3">
                      <a href="./profil_pembeli.html" class="btn btn-primary">
                        Log-In
                      </a>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="mt-3 mb-3">
                    <label for="emailRegister" class="form-label"
                      >Username or Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="emailRegister"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label for="passRegister" class="form-label"
                      >Password</label
                    >
                    <input
                      class="form-control"
                      id="passRegister"
                      placeholder="***"
                    />
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <a href="./profil_pembeli.html" class="btn btn-primary">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

  document.body.append(modalWrap);

  const modal = new Modal(modalWrap.querySelector('.modal'));
  modal.show();
})