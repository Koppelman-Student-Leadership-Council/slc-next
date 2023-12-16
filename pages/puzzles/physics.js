import { useState } from 'react';

export default function Quiz() {
  const [inputValue, setInputValue] = useState('');
  const correctAnswer = '-10';
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (inputValue.toLowerCase() === correctAnswer) {
      setResult('Respuesta correcta el codigo  de este acertijo es: 23');
    } else {
      setResult('Incorrect Answer. Try again.');
    }
  };

  return (
    <div>
      <h1>Guess the Correct Answer</h1>

      <img src="https://i.ibb.co/qNwNkhK/Screenshot-2023-12-16-at-5-53-54-PM.png" alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your guess"
          value={inputValue}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Press Enter to Submit</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
