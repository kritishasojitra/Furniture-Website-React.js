import {Navigate} from 'react-router-dom'





const Privateroute=({Children})=>{

    let login=localStorage.getItem("islogin")
        console.log(login);
        
    


    return(
    
     login ? Children : <Navigate to="/Loign"></Navigate>

    )
}

export default Privateroute;