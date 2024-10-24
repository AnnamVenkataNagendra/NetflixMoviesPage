import RegisterBox from "./Register-Box";



    function HeaddingComponent()
    {
        return(
            <>
              <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'900px',fontSize:'20px',fontFamily:'unset'}} id="select-header">
                 <h1>Unlimited movies, TV shows and more</h1>
        <div>
            <p>Starts at ₹149. Cancel at any time..</p>
            <p>

          Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div>
            <RegisterBox />
        </div>
        </div>
        
            </>
        )
    }
    export default HeaddingComponent;
    