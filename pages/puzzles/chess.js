import { useState } from 'react';

export default function Quiz() {
    const [inputValue, setInputValue] = useState('');
    const correctAnswer = 'qf6';
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior


        if (inputValue.toLowerCase() === correctAnswer) {
            setResult('Respuesta correcta el codigo  de este acertijo es: 99');
        } else {
            setResult('Incorrect Answer. Try again.');
        }
    };

    return (
        <div>
            <h1>Checkmate en 1 movimiento?</h1>

            <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/faridmusayev/phpBe26Fu.png" alt="" />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your guess"
                    value={inputValue}
                    onChange={handleInputChange}
                />

                <p className='ans' >{result}</p>
                <p>qE5 seria un pesimo movimiento aunque haga el check</p>
                <br />


                <br />

                <p>In regal chambers, bathed in golden sheen,<br />
                    A courtly dance, a ritual serene,<br />
                    We gather 'round, with reverence and grace,<br />
                    To check in, one by one, with the Queen's embrace.</p>

                <p>Her majesty, a symbol of strength and might,<br />
                    Intricately adorned in robes so white,<br />
                    A crown of jewels atop her noble head,<br />
                    She listens to each subject's words, well-said.</p>

                <p>With patience and wisdom, she lends her ear,<br />
                    To the joys and sorrows, the hopes and fear,<br />
                    In her presence, our hearts find soothing balm,<br />
                    As we share our stories, like a calming psalm.</p>

                <p>She offers counsel, a guiding hand,<br />
                    In the royal court, where dreams expand,<br />
                    A Queen who nurtures, who cares for all,<br />
                    In her embrace, we stand proud and tall.</p>

                <button type="submit">Press Enter to Submit</button>
            </form>

        </div>
    );
}
