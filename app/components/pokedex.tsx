import React from 'react'

const Pokedex = () => {
  return (
    <>
      <div className="pokedex">
        <div className='pokedex-right'>
          <div className="pokedex-right-top">
            <div className="pokedex-right-top-left">
              <div className="camera"></div>
            </div>
            <div className="pokedex-right-top-right">
              <div className="sensor"></div>
              <div className="sensor"></div>
              <div className="sensor"></div>
            </div>
          </div>
          <div className="pokedex-right-content">
            <div className="card">
              <div className="card-main">
                <div className="card-photo"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-bottom">
                <div className="button"></div>
                <div className="lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pokedex-right-buttons">
            <div className="left">
              <div className="left-top">
                <div className="circle-button"></div>
                <div className="button green"></div>
                <div className="button orange"></div>
              </div>
              <div className="left-bottom">
                <div className="big-button"></div>
              </div>
            </div>
            <div className="pokedex-right-buttons-right">
              <div className="up">
                <i className='bi bi-arrow-up'></i>
              </div>
              <div className="left">
                <i className='bi bi-arrow-left'></i>
              </div>
              <div className="right">
                <i className='bi bi-arrow-right'></i>
              </div>
              <div className="bottom">
                <i className='bi bi-arrow-down'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='pokedex-middle'></div>
        <div className='pokedex-left'>
          <div className="pokedex-left-main">
            <div className="digital-display">
              <h1>Hello, Trainer</h1>
            </div>
            <div className="keyboard">
              <div className="fila">
                <div className="col">A | B | C</div>
                <div className="col">D | E | F</div>
                <div className="col">G | H | I</div>
              </div>
              <div className="fila">
                <div className="col">J | K | L</div>
                <div className="col">M | N | Ñ</div>
                <div className="col">O | P | Q</div>
              </div>
              <div className="fila">
                <div className="col">R | S | T</div>
                <div className="col">U | V | W</div>
                <div className="col">X | Y | Z</div>
              </div>
            </div>
            <div className="botones">
              <div className="botones-left">
                <div className="boton"></div>
                <div className="boton"></div>
              </div>
              <div className="botones-right">
                <div className="boton-circle"></div>
              </div>
            </div>
            <div className="botones-bottom">
              <div className="boton-black"></div>
              <div className="boton-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pokedex