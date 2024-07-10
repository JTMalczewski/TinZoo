import React, { useState } from 'react';
import './add.css';
import { Link } from "react-router-dom";

export function Add() {
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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/pieski/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Piesek dodany pomyślnie!');
            } else {
                alert('Błąd dodania pieska: ' + data.message);
            }
        })
        .catch(error => alert('Błąd: ' + error.message));
    };

    return (
        <div className="add">
            <form className="add__form">
                <h3>Dodaj pieska</h3>
                <div className='add__form__question'>
                    <div></div>
                    <div className='add__form__question__container__label'>Tak</div>
                    <div className='add__form__question__container__label'>Nie</div>
                    <div className='add__form__question__container__label'>~</div>
                </div>
                <div className='add__form__question'>
                    <p>Czy potrzebna większa przestrzeń?</p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Przestrzen" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Przestrzen" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Przestrzen" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy potrzebne podwórko? </p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Podworko" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Podworko" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Podworko" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy może przebywać z innymi zwierzątkami?</p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="InneZwierzeta" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="InneZwierzeta" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="InneZwierzeta" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy potrzebuje długich spacerów? </p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="DlugieSpacery" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="DlugieSpacery" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="DlugieSpacery" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy zachowuje się spokojnie w stosunku do dzieci?</p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dzieci" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dzieci" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dzieci" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy ma problemy z agresją?</p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Agresja" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Agresja" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Agresja" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy może zostać sam?</p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="MozeSam" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="MozeSam" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="MozeSam" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy ma przewlekłe choroby? </p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Choroby" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Choroby" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Choroby" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czu ma lęki? </p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Lekliwosc" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Lekliwosc" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Lekliwosc" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question'>
                    <p>Czy potrzebuje specjalnej diety? </p>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dieta" value="Tak" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dieta" value="Nie" onChange={handleChange} /> </div>
                    <div className='add__form__question__container'><input type="radio" className='add__form__question__input' name="Dieta" value="Obojetne" onChange={handleChange} /> </div>
                </div>
                <div className='add__form__question__photo'>
                    <p>Wyślij zdjęcie pieska!</p>
                    <input type="file" name="Zdjecie" accept="image/*" className='add__form__question__photo'/>
                </div>
                <div className='add__button__container'>
                    <Link type="submit" className='add__button' to='/home' onClick={() => handleSubmit()}>
                        SEND
                    </Link>
                </div>
            </form>

        </div>
    );

}