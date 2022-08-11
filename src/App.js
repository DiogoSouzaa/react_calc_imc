import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './Assets/powered.png';

const App = () => {
   const [heightField, setHeightField] = useState(0);
   const [weightField, setWeightField] = useState(0);

   const handleCalculateButton = () => {
      if (heightField && weightField) {

      } else {
         alert('Dígite todos os campos.')
      }
   }

   return (
    <div className={styles.main}>
      <header>
         <div className={styles.headerContainer}>
            <img src={poweredImage} alt='' width={150} />
         </div>
      </header>
      <div className={styles.container}>
         <div className={styles.leftSide}>
            <h1>Calcule seu IMC.</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

            <input
               type='number'
               placeholder='Dígite a sua altura. EX: 1.5 (em métros)'
               value={heightField > 0 ? heightField : ''}
               onChange={event => setHeightField(parseFloat(event.target.value))}              
            >
            </input>

            <input
               type='number'
               placeholder='Dígite a sua Peso. EX: 75.3 (em Kg)'
               value={weightField > 0 ? weightField: ''}
               onChange={event => setWeightField(parseFloat(event.target.value))}              
            >
            </input>

            <button onClick={handleCalculateButton}>Calcular</button>
         </div>
         <div className={styles.rightSide}>
            ...
         </div>
      </div>
      
    </div>
   )
}

export default App;
