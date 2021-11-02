import React from 'react'

export const PaginationDos = (pokenmonsPerPage, totalPokemons) => {


    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemons / pokenmonsPerPage); i++) {
        pageNumbers.push(i)


    }

    return (
        <div>
            <nav>
              <ul className="pagination">
                    {/* {pageNumbers.map(number => { */}
                <li className="page-item">
                    <a href="!#" className="page-link">1</a>
                    <a href="!#" className="page-link">2</a>
                	</li>
                    {/* })}  */}
                    {/* {pageNumbers.map(number => {
             <li class="page-item" key={number}>
                       <a  href="!#" class="page-link" >{number}</a>
                </li> 
                })}                */}
              </ul>
           </nav>
       </div>
    )
}






