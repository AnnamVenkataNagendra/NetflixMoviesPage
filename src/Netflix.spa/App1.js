
import './App1.css';
import HeaddingComponent from './Headding-component';
import Name from './Name-Component';

  function App1Component()
  {

    return(
        <>
    
        <div className="select-image" style={{height:'800px'}} id='index-app'>
       <div>
       <Name></Name>
       </div>
            <div>
                <HeaddingComponent/>
            </div>
            </div></>
    )
  }
  export default App1Component;