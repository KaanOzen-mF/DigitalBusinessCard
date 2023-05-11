import React from "react"

export default function Buttons() {
    return (
        <div className="buttons--container">
            <button id="email">
                <img src="./image/email-logo.png"/>
                <a href="mailto:kaanozn98@gmail.com">Email</a>
            </button>
            <button id="linkedin">
                <img src="./image/linkedin-logo.png"/>
                <a href="http://linkedin.com/in/kaan-ozen">LinkedIn</a>
            </button>
        </div>
    )
}