import React from "react";
import { useState } from "react";
export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })
    
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            alert("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            alert("Thanks for signing up for our Memepage!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form--login" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--login--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--login--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--login--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the Meme</label>
                </div>
                <button onClick={handleSubmit}
                    className="formo--login--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}