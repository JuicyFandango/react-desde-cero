import React from 'react'
import ComponenteTonto from './comp_hijo_tonto'


class Funcional3 extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {nombres :[]}
    }
    

    componentWillMount()
    {
        console.log('componentWillMount 3')
        let api = 'https://swapi.co/api/people/'
        fetch(api)
        .then((response) => {
            return response.json()
        })
        .then((data) =>{
            this.setState({nombres :data.results})
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    render()
    {
        console.log('render 3')
        return(
        <div> 
            <a>COMPONENTE STAR WARS 3</a>
            <ol id="lista2">
			<ul> 
				{this.state.nombres.map((nombre) =>
					<li key={nombre.name}> <ComponenteTonto nombre={nombre.name} /> </li>
			)}
			</ul>
            </ol>
		</div> 
        )

    }

}

export default Funcional3