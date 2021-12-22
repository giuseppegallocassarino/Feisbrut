import { useReducer } from "react";

const Login = (props) => {
    const username = props.username || "user";
    const password = props.password || "******";

    

    return(
        <div>
           
            <form>
                <label>Username: </label>
                <input className="usernameLog" type="text">
                </input>
                <label>password: </label>
                <input type="password">
                </input>
               
            </form>

            
        </div>
    )
};

export default Login;