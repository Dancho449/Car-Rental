import React from "react"


export default function Login() {
    const [loginForm, setLoginForm] = React.useState({
        email: "",
        password: ""
    })


    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginForm)
    }

    function handleChange(e){
        const { name, value } = e.target
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className="form-container">
            <h1>Sign In to your account</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={loginForm.email}
                />

                <input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                value={loginForm.password}
                />
                <button>Sign In</button>
            </form>
            <p className="login-paragraph">Don&apos;t have an account? <span>Create one now</span></p>
        </div>
    )
}