export default function HolaComponent() {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 text-center">
            <div className="animation-container">
              <div
                id="hello"
                className="display-1 font-weight-bold animate__animated animate__fadeInDown"
              >
                Hello!
              </div>
              <h2
                className="display-4 font-weight-bold animate__animated animate__fadeInDown"
              >
                My name is Sergio.
              </h2>
              <div className="description animate__animated animate__fadeInDown">
                <i className="fas fa-quote-left"></i>
                <p>
                ... and I develop the unthinkable!
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}