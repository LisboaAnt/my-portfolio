import { Link } from "react-router-dom";

const HubProjects = () =>{
    return(
    <div>
         <div>HubProjects</div>

        <p>
            <Link to = "/Project/1">Forma contato 1</Link>
        </p>
        <p>
            <Link to = "/Project/2">Forma contato 2</Link>
        </p>
        <p>
            <Link to = "/Project/3">Forma contato 3</Link>
        </p>
        <p>
            <Link to = "/Project/4">Forma contato 4</Link>
        </p>
        
    </div>);
};
export default HubProjects;