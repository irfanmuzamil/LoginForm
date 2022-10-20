import React from 'react'
import { useState } from "react"
function Form() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [entry, setEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };

           setEntry = ([...entry, newEntry]);
           console.log(entry);
    }


    return (
        <>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="Email">Email</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /> <br />
                <label htmlFor="password">password</label>
                <input type="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                <button> submit</button>
            </form>


            <div>
                {
                    entry.map((item) => {
                        return (
                            <div>
                                <p>{item.email}</p>
                                <p>{item.password}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Form