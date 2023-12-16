import { useState } from 'react';

export default function Quiz() {
  const [inputValue, setInputValue] = useState('');
  const correctAnswer = '-52';
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (inputValue.toLowerCase() === correctAnswer) {
      setResult('Salvastes el mundo!');
    } else {
      setResult('Incorrect Answer. Try again.');
    }
  };

  return (
    <div>

      <div>
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
        En el corazón del universo tan vasto,<br />
        Donde el misterio y la ciencia se abrazan con gusto,<br />
        Residen átomos, diminutas joyas del espacio,<br />
        Con protones, neutrones y electrones en su abrazo.<br /><br />

        El núcleo, un núcleo de carga positiva y fuerte,<br />
        Protones brillantes, en su centro, son la suerte,<br />
        Como guardianes de este mundo microscópico,<br />
        Atados por fuerzas que parecen mágicas.<br /><br />

        Los neutrones, amigos sin carga, neutros y fieles,<br />
        Unidos en el núcleo, como silenciosos anillos de laureles,<br />
        Estabilizan el núcleo, con su masa valiosa,<br />
        En esta danza de partículas, tan armoniosa.<br /><br />

        Los electrones, ligeros, en órbitas giran,<br />
        Cargados negativamente, su encanto inspiran,<br />
        Danzan en capas, en un baile cautivante,<br />
        Creando átomos, en su estado más vibrante.<br /><br />

        Y cuando sumamos estas partes en conjunto,<br />
        La esencia de la materia, en su pleno punto,<br />
        Átomos forman, elementos diversos y únicos,<br />
        La química del mundo, en sus lazos e intrigas cúnicos.<br /><br />

        Protones, neutrones y electrones, en la suma,<br />
        Crean el mundo que vemos, en la noche y en la bruma,<br />
        Átomos unidos, moléculas en comunión,<br />
        El tejido de la vida, en su mágica unión.<br />
      </div>
      <img src="https://i.ibb.co/dP58QvZ/Screenshot-2023-12-16-at-6-37-05-PM.png" alt="" />
    </div>
  );
}
