import { useState } from 'react';

export default function Quiz() {
  const [inputValue, setInputValue] = useState('');
  const correctAnswers = [
    '8g', '8h', '8i',
    '9g', '9h', '9i',
    '7g', '7h', '7i'
  ];
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (correctAnswers.includes(inputValue.toLowerCase())) {
      setResult('Respuesta correcta el codigo  de este acertijo es: 81');
    } else {
      setResult('Incorrect Answer. Try again.');
    }
  };

  return (
    <div>
      <h1>mas m^2  de todos?</h1>
      <p>
        Por ejemplo <br />
        Argentina es: 2c 
      </p>

      <img src="https://d1uvxqwmcz8fl1.cloudfront.net/tes/resources/11277654/0ebed585-a161-4bb9-a5b9-81f8e405fd73/image?width=500&height=500&version=1605364114662" alt="" />
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
      <p className='ans'>{result}</p>
    </div>
  );
}
