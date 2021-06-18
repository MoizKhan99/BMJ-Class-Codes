import {Redirect,Route} from 'react-router-dom';


const PrivateRoute =({path:newPath,component:NewComp})=>{
    return (
<Route path={newPath} render={()=>{
if(false){
    return <NewComp />
}
else{
return <Redirect to="/" />
}

}}>

    </Route>
    )
}

export default PrivateRoute;