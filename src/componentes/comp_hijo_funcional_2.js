import React from 'react'
import ComponenteTonto from './comp_hijo_tonto'

class Funcional2 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {nombres:[] }
    }

    //Función que se ejecuta antes de renderizar el componente
    componentWillMount()
    {
        this.setState({nombres:['Julieta','Maria','Mariana']})
        console.log('paso por ComponentWillMount')
    }

    //Función que se ejecuta después de renderizar el componente
    componentDidMount()
    {
        this.setState({nombres:['Otro Nombre 1','Otro Nombre 2']})
        console.log('paso por componentDidMount')
    }


    render()
    {
        console.log('paso por render')
        return(
        <div> 
            <a>COMPONENTE 2</a>
            <ol id="lista2">
			<ul> 
                <li key={this.props.nombre_padre}> <ComponenteTonto nombre={this.props.nombre_padre} /> </li>
				{this.state.nombres.map((nombre) =>
					<li key={nombre}> <ComponenteTonto nombre={nombre} /> </li>
			)}
			</ul>
            </ol>
		</div> 

        )
    }
}

export default Funcional2