import {useHistory} from 'react-router-dom'


function Contact(props) {
    const history =useHistory();
    console.log(history);
    let names = props.fullName || history.location.data.name
  return (
    <div >
    <h1>Contact Page</h1>
    <h3>{names}</h3>
    </div>
  );
}

export default Contact;
