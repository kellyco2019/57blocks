import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './product';
import ListGroup from 'react-bootstrap/ListGroup';
import { PaginationDos } from './pagination';
import { Button, Form, Container, Col, Row} from 'react-bootstrap';


function Products() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // petición
  useEffect(() => {
    async function getPokemons() {
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=20',
        })
    
        setPokemons(data.results)
        setLoading(false)
      } catch(err) {
        setError(true)
        setLoading(false)
      }
    }
    getPokemons()
  }, [])
  console.log("data" , pokemons)
      
  if(loading) return <p>Loading...</p>
  if(error) return <p>Oops Something went wrong</p>
  return (
    <Container>
      <Row>
        <Col xs={8} md={6}>
          <PaginationDos></PaginationDos>
          <ListGroup as="ol"> <h1>Pick a Pokemon</h1>
            {!!pokemons && pokemons.length && pokemons.map(({ name, id }) => (
              <ListGroup.Item key={id} >
                <Product
                  id={id}
                  name={name}
                />
              </ListGroup.Item>
            ))}
          </ListGroup> 
        </Col>
      </Row>
    </Container>


  )
}

export default Products
