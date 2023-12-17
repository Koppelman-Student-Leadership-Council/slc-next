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
      setResult('Respuesta correcta el codigo  de este acertijo es 109:');
    } else {
      setResult('Incorrect Answer. Try again.');
    }
  };

  return (
    <div>
      <h1>Entrega las 3 cartas correctas al terrorista</h1>
      <img src="https://i.ibb.co/nbkKPTM/Screenshot-2023-12-16-at-7-25-19-PM.png" alt="" />

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


      <div>
        En el juego del truco, secretos se esconden,<br />
        Señales y gestos, en la partida responden.<br />
        Un lenguaje oculto entre dos contrincantes,<br />
        Donde astucia y estrategia son aliados constantes.<br /><br />

        Las señas del truco, un arte singular,<br />
        Un mundo paralelo que solo algunos sabrán,<br />
        El toque de la mesa, un susurro disfrazado,<br />
        Una mirada cómplice, un misterio compartido.<br /><br />

        Un dedo que se posa con disimulo y tino,<br />
        Indica una carta, un plan clandestino,<br />
        El ceño fruncido, una señal de engaño,<br />
        En este juego de astucia, todo es un pañuelo extraño.<br /><br />

        Las palabras son trampas, los gestos, señales,<br />
        En este duelo de ingenio, no hay treguas, ni finales,<br />
        Cada movimiento es un paso en la danza sutil,<br />
        Donde la estrategia y la picardía son el perfil.<br /><br />

        Así en el truco, las señas son un arte,<br />
        Un lenguaje secreto que desafía al azar y al parte,<br />
        En cada partida, en cada mano jugada,<br />
        Las señas del truco, la intriga y el misterio son la entrada.<br />
      </div>

      <img src="https://i.pinimg.com/474x/87/79/88/8779888480c928fd73278166a6f6a946.jpg" alt="" />
    </div>
  );
}