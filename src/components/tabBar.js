import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import React from 'react'

export const NavBar = () => {
	return (
		<Navbar fixed="bottom" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/">57Blocks</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/login">LogIn</Nav.Link>
					<Nav.Link href="/favorite">favorite</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

