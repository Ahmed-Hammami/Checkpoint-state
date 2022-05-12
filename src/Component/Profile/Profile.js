
import React,{useState} from 'react'
function Profile(props) {
  const [show,setShow]=useState(true)
  
  
  
  
  function gettime() {
    var d=new Date()
  document.getElementById('time').innerHTML=d.toLocaleTimeString();

  }
setInterval(() => {
  gettime()
  
}, 1000);  
  return (
    <div className="App">
     {
       show? <><h1>{props.name}</h1>
       <h2>{props.profession}</h2>
       <h3>{props.bio}</h3>
       <img  src={props.img} alt='fff'></img>
       <h1 id='time'></h1>

       </>
       
       :null
     }
     <br/>
     
<button onClick={()=>setShow(!show)} onMouseOver={gettime}>Toggle</button> 


    </div>
  );
}

export default Profile;