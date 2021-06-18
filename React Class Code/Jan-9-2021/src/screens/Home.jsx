import {useHistory} from 'react-router-dom'
import Contact from './Contact'
function Home() {
const history =useHistory();

const routeInfo={
    pathname:'/contact',
    data:{name:'arsalan',roll:'1'},
}


    const switchToContact=()=>{
        history.push(routeInfo)
    }


  return (
    <div >
    <h1>Home Page</h1>
    <button onClick={()=>switchToContact()}>Contact</button>
    <Contact fullName="Yaqoob bhai"/>
    </div>
  );
}

export default Home;
