

function Name()
{
    return(
        <>
        <div className="select-sign" style={{height:'0px'}}>
           <h1 style={{color:'red'}} className="mt-5">NETFLIX</h1>
            <div className="mt-5">
                <select style={{background:'transparent',outline:'none', color:'white',padding:'10px',borderRadius:'10px'}}>
                <option>English</option>
                <option>Hindi</option>
                </select>
                <button className="ms-3 btn btn-danger p-2">
                    <h6>Sign In</h6>
                </button>
            </div>
           </div>
           
        </>
    )
}
export default Name;