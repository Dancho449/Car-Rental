import React from "react"
import {
    useLoaderData,
    useNavigate
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
        .then(data => {
            localStorage.setItem("loggedIn", true)
            navigate("/host", { replace: true })
        })
        .catch(err => setError(err))
        .finally(() => setStatus("idle"))
    }
    
    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="form-container">
            <h1>Sign in to your account</h1>
            {error && <h3 className="warning">{error}</h3>}
            {message && <h3 className="warning">{message}</h3>}

            <form 
                onSubmit={handleSubmit}
                className="form" 
            >
                <input
                    name="email"
                    type="email"
                    value={loginFormData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                />
                <p>Hint: D@ncho.com</p>
                <input
                    name="password"
                    type="password"
                    value={loginFormData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <p>Hint: p123</p>
                <button
                    disabled={status === "submitting"}
                    >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )
}

//Action function future implementation

/*const errorMessage = useActionData()
const message = useLoaderData()
const navigation = useNavigation()


export async function action({ request }) {
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        console.log(data)
        localStorage.setItem("loggedIn", true)
        return redirect(pathname)
    } catch(err) {
        return err.message
    }
}*/