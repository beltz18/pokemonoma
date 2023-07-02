import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Pokedex = () => {
  const [pokeList, setPokeList] = useState([])
  const [weight, setWeight]     = useState([])
  const [curPage, setCurPage]   = useState(1)
  const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const url = 'https://pokeapi.co/api/v2/'
  const date = new Date()

  async function getPokes(offset: number = 0) {
    const data = await axios.get(url+`pokemon?offset=${offset}&limit=10`)
    const list = data.data.results
    setPokeList(list)
    getWeights(offset)
  }

  async function getWeights(id:number = 1) {
    let arr:any = []
    for(let i = id + 1; i < id + 11; i++ ) {
      let data   = await axios.get(url+`pokemon/${i}`)
      let weight = data.data.weight
      arr.push(weight)
    }
    setWeight(arr)
  }

  getPokes((curPage - 1) * 10)

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
                <div className='poke-list'>
                {
                  pokeList.map(({name}, index) => (
                    <div>
                      <div className="card-photo">
                        <Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(index+1) + ((curPage - 1) * 10)}.png`}
                          alt={name}
                          width='150'
                          height='150'
                        />
                        <span className='index'><b>#{ (index+1) + ((curPage - 1) * 10) }</b></span>
                        <span className="weight">
                          { weight[index] } kg
                        </span>
                      </div>
                      <div className="card-description">
                        <h1>{name}</h1>
                      </div>
                    </div>
                  ))
                }
                </div>
                <div className="pagination">
                  <ul>
                    {
                      pages.map((e) => (
                        <li key={e} onClick={() => { setCurPage(e); getPokes((curPage - 1) * 10) }}>{e}</li>
                      ))
                    }
                  </ul>
                </div>
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
              <h3>Hello Trainer... Today it&apos;s {date.toLocaleDateString('es')}</h3>
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

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   try {
//     const offset = Number(query.offset) | 0
//     const data = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon?offset=${offset * 10}&limit=10`
//     )
//     const list = data.data

//     return {
//       props: {
//         list,
//       }
//     }
//   } catch(err) { console.log(err) }
// }