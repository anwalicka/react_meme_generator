import React from "react";
import './Form.css';
import image from './img/image.png'
export default function Form() {
    return (
        <main>
            <form className="form">
                <input placeholder="Top text" className="form__input" type="text" />
                <input placeholder="Bottom text" className="form__input" type="text" />
                <button className="form__button">
                    <span className="form__button--text">
                    Get a new meme image 🖼
                    </span>
                </button>
            </form>
        </main>
    )
}