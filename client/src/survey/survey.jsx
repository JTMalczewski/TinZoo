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
        Dieta: ''
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
                <div>
                    <p>Pytanie 1: Czy masz mieszkanie/dom o powierzchni większej niż 75m2?</p>
                    <label> yes
                        <input type="radio" name="Przestrzen" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Przestrzen" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Przestrzen" value="Obojetne" onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <p>Pytanie 2: Czy posiadasz podwórko (ogródek/działkę)? </p>
                    <label> yes
                        <input type="radio" name="Podworko" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Podworko" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Podworko" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 3: Czy posiadasz już jakieś zwierzęta? </p>
                    <label> yes
                        <input type="radio" name="InneZwierzeta" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="InneZwierzeta" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="InneZwierzeta" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 4: Czy lubissz długie spacery? </p>
                    <label> yes
                        <input type="radio" name="DlugieSpacery" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="DlugieSpacery" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="DlugieSpacery" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 5: Czy posiadasz/planujesz dzieci? </p>
                    <label> yes
                        <input type="radio" name="Dzieci" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Dzieci" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Dzieci" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 6: Czy mógłbyś przygarnąć pieska, który ma problemy z agresją? </p>
                    <label> yes
                        <input type="radio" name="Agresja" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Agresja" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Agresja" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 7: Czy codziennie wychodzisz z domu na co najmniej 8/9h? </p>
                    <label> yes
                        <input type="radio" name="MozeSam" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="MozeSam" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="MozeSam" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 8: Czy mógłbyś wydawać dodatkowe pieniądze na opiekę zdrowotną (adopcja chorego przewlekle pieska)? </p>
                    <label> yes
                        <input type="radio" name="Choroby" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Choroby" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Choroby" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 9: Czy mógłbyś adoptować pieska z lękami? </p>
                    <label> yes
                        <input type="radio" name="Lekliwosc" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Lekliwosc" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Lekliwosc" value="Obojetne" onChange={handleChange} />
                    </label>

                </div>
                <div>
                    <p>Pytanie 10: Czy byłbyś w stanie wydawać dodatkowe pieniądze zapewniające pieskowi odpowiednią dietę? </p>
                    <label> yes
                        <input type="radio" name="Dieta" value="Tak" onChange={handleChange} />
                    </label>
                    <label> no
                        <input type="radio" name="Dieta" value="Nie" onChange={handleChange} />
                    </label>
                    <label> meaby
                        <input type="radio" name="Dieta" value="Obojetne" onChange={handleChange} />
                    </label>
                </div>
                <Link type="submit" className='survey__button' to='/home' onClick={()=>handleSubmit()}>
                    SEND
                </Link>
            </form>

        </div>
    );

}