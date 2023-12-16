import { useState } from 'react';

export default function Quiz() {
  const [inputValue, setInputValue] = useState('');
  const correctAnswer = 'banana';
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (inputValue.toLowerCase() === correctAnswer) {
      setResult('Respuesta correcta el codigo  de este acertijo es:');
    } else {
      setResult('Incorrect Answer. Try again.');
    }
  };

  return (
    <div>
      <h1>Guess the Correct Answer</h1>
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
