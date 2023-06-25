export default function HolaTools() {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            {/* <img
              src="./assets/img/61808340-854c-4a1d-af62-411cb4d610a5.jpg"
              alt="Sergio's Picture"
            />  */}
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="slogan-container">
              <h1 className="display-1 font-weight-bold">
                Imagine It, I'll Create It
              </h1>
              <div className="buttons">
                <a
                  href="/Projects"
                  className="btn btn-primary btn-lg"
                  >Projects</a
                >
                <a href="/About" className="btn btn-secondary btn-lg">About</a>
                <a href="/Contact" className="btn btn-tersiary btn-lg">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
}