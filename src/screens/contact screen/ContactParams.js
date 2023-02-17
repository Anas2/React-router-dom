import { useParams } from 'react-router-dom';

function ContactParams(){
    const {fname} = useParams();
    return(
        <div>

            <h1>{fname}</h1>
            {/* <Common title="Contact" /> */}
        </div>
        
    )
}

export default ContactParams