import React, { useState } from 'react';
import './survey.css';
import { Link } from "react-router-dom";

export function Survey() {
    const [answers, setAnswers] = useState({
        Przestrzen: '',
        Podworko: '',
        InneZwierzeta: '',
        DlugieSpacery: '',
        Dzieci: '',
        Agresja: '',
        MozeSam: '',
        Choroby: '',
        Lekliwosc: '',
        Dieta: '',
        userID: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/users/submitSurvey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers)
        })
    };

    return (
        <div className="survey">
            <form className="survey__form">
                <div className='survey__form__question'>
                    <div></div>
                    <div className='survey__form__question__container__label'>Tak</div>
                    <div className='survey__form__question__container__label'>Nie</div>
                    <div className='survey__form__question__container__label'>Obojętne</div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 1: Czy masz mieszkanie/dom o powierzchni większej niż 75m2?</p>
                    <div className='survey__form__question__container'><input type="radio" name="Przestrzen" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Przestrzen" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Przestrzen" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 2: Czy posiadasz podwórko (ogródek/działkę)? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Podworko" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Podworko" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Podworko" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 3: Czy posiadasz już jakieś zwierzęta? </p>
                    <div className='survey__form__question__container'><input type="radio" name="InneZwierzeta" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="InneZwierzeta" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="InneZwierzeta" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 4: Czy lubissz długie spacery? </p>
                    <div className='survey__form__question__container'><input type="radio" name="DlugieSpacery" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="DlugieSpacery" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="DlugieSpacery" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 5: Czy posiadasz/planujesz dzieci? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Dzieci" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Dzieci" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Dzieci" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 6: Czy mógłbyś przygarnąć pieska, który ma problemy z agresją? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Agresja" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Agresja" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Agresja" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 7: Czy codziennie wychodzisz z domu na co najmniej 8/9h? </p>
                    <div className='survey__form__question__container'><input type="radio" name="MozeSam" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="MozeSam" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="MozeSam" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 8: Czy mógłbyś wydawać dodatkowe pieniądze na opiekę zdrowotną (adopcja chorego przewlekle pieska)? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Choroby" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Choroby" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Choroby" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 9: Czy mógłbyś adoptować pieska z lękami? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Lekliwosc" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Lekliwosc" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Lekliwosc" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__form__question'>
                    <p>Pytanie 10: Czy byłbyś w stanie wydawać dodatkowe pieniądze zapewniające pieskowi odpowiednią dietę? </p>
                    <div className='survey__form__question__container'><input type="radio" name="Dieta" value="Tak" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Dieta" value="Nie" onChange={handleChange} /> </div>
                    <div className='survey__form__question__container'><input type="radio" name="Dieta" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='survey__button__container'>
                <Link type="submit" className='survey__button' to='/home' onClick={() => handleSubmit()}>
                    SEND
                </Link>
                </div>
            </form>

        </div>
    );

}