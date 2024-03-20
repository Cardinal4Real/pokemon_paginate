import React, { useContext, useEffect, useState } from 'react'


export default function Header({ children }) {
  // const { setShowPopUp, setDisplayCartDetails } = useContext(MediCareContext);

  return (
    <div className='bg-secondary navbarAux'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-4">
            <h1>
              {/* <image src="pokemon1.jpg" /> */}
              PokemonFinder
            </h1>
          </div>
          <div className="col-4">
            {children}
          </div>
          <div className="col-4">
          </div>
        </div>

      </div>
    </div>

  )
}
