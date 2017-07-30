import React from 'react'
import ComponenteTonto from './comp_hijo_tonto'

class Funcional1 extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {nombres:['Pepito','Pepe','Pepin'] }
		//this.cambiar_estado = this.cambiar_estado.bind(this)
	}

	cambiar_estado(bbb)
	{
		console.log(bbb)
		this.setState({nombres : ['Nombre 1','Nombre 2','Nombre 3']})
	}
	render()
	{
		return( 
		<div> 
			
			<a>COMPONENTE 1</a>
			<br />
			<br />
			<button onClick={this.cambiar_estado.bind(this,'otro parametro')} > CAMBIAR ESTADO </button>
			
			<ol id="lista2">
			<ul> 
				<li key={this.props.nombre_padre}> <ComponenteTonto nombre={this.props.nombre_padre} /> </li>
				{this.state.nombres.map((nombre) =>
					<li key={nombre}> <ComponenteTonto nombre={nombre} /> </li>
			)}
			</ul>
			</ol>
		</div> 
	)}

}
export default Funcional1
