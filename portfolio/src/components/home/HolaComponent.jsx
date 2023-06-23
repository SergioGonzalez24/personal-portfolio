export default function HolaComponent() {
    return (
        <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-12 text-center">
            <div class="animation-container">
              <div
                id="hello"
                class="display-1 font-weight-bold animate__animated animate__fadeInDown"
              >
                Hello!
              </div>
              <h2
                class="display-4 font-weight-bold animate__animated animate__fadeInDown"
              >
                My name is Sergio.
              </h2>
              <div class="description animate__animated animate__fadeInDown">
                <i class="fas fa-quote-left"></i>
                <p>
                ... and I develop the unthinkable!
                </p>
                <i class="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}