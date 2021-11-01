import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Form, Container, Col, Row} from 'react-bootstrap';

function Details(props) {
  console.log(props)

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  //  petición
  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://pokeapi.co/api/v2/',
          url: `pokemon/${props.match.params.details}`
        })
        setPost(data)
        console.log("data", data)
        setLoading(false)
      } catch(err) {
        setError(true)
        setLoading(false)
      }
    }
    getPost()
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oops Something went wrong</p>
  return ( 
    <Container>
      <Row xs={1} >
        <Col xs={8} md={6}>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={post.sprites['front_shiny']} />
            <Card.Body>
              <Card.Title>Name: {post.name}</Card.Title>
              <Card.Text>
                Height:{post.height}
              </Card.Text>
              <Button variant="primary">Favorite</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details