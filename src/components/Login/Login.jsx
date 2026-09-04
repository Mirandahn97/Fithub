import { useAuth } from "../../providers/auth.provider";

export function Login() {

const {setLoginData}= useAuth()




    function handleSubmit(e) {


        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;

        const formData = new FormData(form) 
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson);
        const bodyData = JSON.stringify(formJson)
        
    //     formData.append('username', username)
    //     console.log(username);
        
    //     formData.append('password', password)
    //     console.log(password);
        
    //  console.log(formData);
     
        

        fetch('http://localhost:3000/api/auth/login', { method: 'POST', body: bodyData, headers:{
            "Content-Type":'application/json'
        } })
            .then(
                res => res.json()
            ).then(
                data => setLoginData(data)
            )
    }


    return (

        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Username" name="username"/>
            <input type="password" placeholder="Password" name="password"/>
            <button type="submit">Login</button>
        </form>

    )
}