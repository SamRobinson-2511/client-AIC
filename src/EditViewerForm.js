import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function AccountEditForm(){
    const [user, setUser] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();



    function handleFormSubmit(e){
        e.preventDefault();
        const formData ={
            firstName: firstName,
            lastName: lastName,
            image: image,
            email: email,
            password: password,
    }
    // console.log(formData)
     fetch(`viewers`, {
        method: "EDIT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(data => {
            history.push(`/arts`)
        })
    }
return (
    <section className="Account-form">
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstnamebox"
                value={firstName}
                onChange={e => setfirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            <label htmlFor="image">Profile Image</label>
                <input
                    id="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                 />
            <label htmlFor="Email">Email</label>
                <input
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />
            <label htmlFor="password">Password</label>
                <input
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                 />
            <button type="submit">Save Changes</button>
        </form>
    </section>
    )
}