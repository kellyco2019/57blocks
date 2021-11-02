import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'


function Product({ name }) {
	return (
		<Link
			style={{ color: 'inherit', textDecoration: 'inherit' }}
			to={`/pokemon/${name}`}>
			<Card style={{ width: '20rem', height: '15rem' }} >
				<h2>{name}</h2>
			</Card>
		</Link>
	)
}
export default Product