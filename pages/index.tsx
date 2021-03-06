import type { NextPage } from 'next'
import Head from 'next/head'
import GameGrid from '../components/gamegrid.module'
import React, { useState } from 'react'
import InfoModal from '../components/infomodal.module'
import StatsModal from '../components/statsmodal.module'

const title = 'Burdle'



const Home: NextPage = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [showStats, setShowStats] = useState(false)
  // Hard coded; can't figure out easy workaroud with 
  // satic pages served by github

  return (
    < div >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Infinite Wordle!" />
        <meta property="og:title" content="BURDLE" />
        <meta property="og:description" content="BURDLE is a copy of WORDLE that allows for infinite playing" />
        <meta property="og:url" content="https://myclothingstore.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="game">
        <nav className="navbar">
          <div className="container d-flex justify-content-center">
            <div className="mynavbar d-flex justify-content-between">
              <div className="navother">
                <button className="empty"
                  onClick={() => { setShowInfo(true) }}>
                  <img src="info-circle.svg" className="topsvg" />
                </button>
              </div>
              <div className="navtitle">{title.toUpperCase()}</div>
              <div className="navother">
                <button className="empty"
                  onClick={() => { setShowStats(true) }}>
                  <img src="chart.svg" className="topsvg" />
                </button>
              </div>
            </div>
          </div>
        </nav>



        <div className="container justify-content-center d-flex">
          <GameGrid />
        </div>
        <div className="container justify-content-center d-flex mt-5">
          <div className="myfooter justify-content-center">
          </div>
        </div>
      </main>
      <InfoModal show={showInfo} hideFunc={() => { setShowInfo(false) }} />
      <StatsModal show={showStats} hideFunc={() => { setShowStats(false) }} />

    </div >
  )
}

export default Home
