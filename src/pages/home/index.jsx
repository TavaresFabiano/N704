import './style.css'
import { useEffect, useState, useRef } from 'react'
import Lixeira from '../../assets/Lixeira.svg'
import Api from '../../service/api'

function Home() {


  function calculate() {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Função Closure

    const bmi = (weight / (height **2)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');


    // Função Lambda

    (weight == "" || weight == 0) ? (
      alert("Peso inválido!")
    ) : (height == "" || height == 0) ? (
      alert("Altura inválida!")
    ) : (bmi < 18.5) ? (
      description = "Cuidado! Você está abaixo do peso!"
    ) : (bmi >= 18.5 && bmi <= 25) ? (
      description = "Você está no peso ideal!" &&
      value.classList.remove('attention') &&
      value.classList.add('normal')
    ) : (bmi > 25 && bmi <= 30) ? (
      description = "Cuidado! Você está com sobrepeso!"
    ) : (bmi > 30 && bmi <= 35) ? (
      description = "Cuidado! Você está com obesidade moderada!"
    ) : (bmi > 35 && bmi <= 40) ? (
      description = "Cuidado! Você está com obesidade severa!"
    ) : (description = "Cuidado! Você está com obesidade morbida!")
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
  }

  return (

    <main id='container'>
      <section id="img">
        <img src='src/assets/ilustration.svg' />
      </section>

      <section id="calculator">
        <form id="form">
          <h1 id="title">
            Calculadora - IMC
          </h1>

          <div className="input-box">
            <label for="weight">
              Peso em Kg
            </label>
            <div className="input-field">
              <i class="fa-solid fa-weight-hanging"></i>
              <input type="number" step=".1" id="weight" required />
              <span>
                Kg
              </span>
            </div>
          </div>


          <div className="input-box">
            <label for="height">
              Altura em metros
            </label>
            <div className="input-field">
              <i class="fa-solid fa-ruler"></i>
              <input type="number" step=".01" id="height" required />
              <span>
                m
              </span>
            </div>
          </div>

          <button type='button' onClick={calculate} id="calculate">
            Calcular
          </button>
        </form>

        <div id="infos" className='hidden'>
          <div id="result">
            <div id="bmi">
              <span id="value"></span>
              <span>Seu IMC</span>
            </div>
            <div id="description">
              <span></span>
            </div>
          </div>

          <div id="more_info">
            <a href="https://mundoeducacao.uol.com.br/saude-bem-estar/imc.html">
              Mais informações sobre o IMC
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
