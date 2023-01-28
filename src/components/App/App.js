import './App.css';
import '../Header/header'
import { Component } from 'react';
import Header  from '../Header/header';
import Input from '../Input/input'

class App extends Component{
    render(props){
        console.log(props)
        return(
            <div>
                <Header/>
                <Input/>
                {/* <Info/> */}

            </div>
        )
    }

}

export default App;
