import AuthForm from "../components/AuthForm"
import { json, redirect } from "react-router-dom"

const AuthPage = () => {
    return <>
        <AuthForm />
    </>
}

export default AuthPage

export const action = async ({request}) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'singup';

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const response = await fetch('/api/'+mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if(!response.ok) {
        throw json({message: 'Could not deal with such credentials'}, {status: 500})
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem('token', token)
    
    return redirect('/') // need to be improeved to stay on same page if not an AuthPage
}