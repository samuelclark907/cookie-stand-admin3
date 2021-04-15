import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (

        <form onSubmit={submitHandler} className="w-2/3 m-auto bg-green-500">
            <div className="w-1/2 m-auto">
                <label htmlFor="username" className="block text-center">User Name</label>
                <input className="w-2/3 ml-20" type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
            </div>

            <div className="w-1/2 m-auto">
                <label htmlFor="password" className="block mt-5 text-center">Password</label>
                <input className="w-2/3 ml-20" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
            </div>

            <button type="submit" className="w-1/2 m-auto mt-5 bg-purple-500">Sign In</button>

        </form>
    );
}
