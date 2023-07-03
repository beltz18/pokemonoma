import Link  from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="container-main">
        <div className="light">
          <div className="header">
            <h1>Welcome to Pokemonoma!</h1>
            <Image
              src="/assets/pikachu-cute.gif"
              alt="pikachu"
              width="220"
              height="110"
            />
          </div>

          <div className="text">
            <article>
              <p>
                Pokemonoma is a fully responsive Pokedex based project
                done with NextJs, Sass and much much love :D <br />
                You can find all the information 1st generation pokemon.
                In order to access the pokedex you need the following data:
              </p>
              <p>
                <span><b>Email:</b> pokemonoma@monoma.io</span><br />
                <span><b>Password:</b> Pokemonoma1.io</span>
              </p>
              <p className="links">
                <Link href="/login" className="login-link">Login</Link>
                <Link href="/dashboard" className="pokedex-link">Go Pokedex!</Link>
              </p>
              <br /><br />
              <p>
                <small>Developed by <b><Link href="https://tidv.tech/AndiDev" target="_blank">Andi</Link></b></small>
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}