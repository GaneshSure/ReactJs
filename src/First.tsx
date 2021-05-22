//creating first component
import {Component} from "react";

//invoke State 
interface IState{}

//invoke Props
interface IProps{}

//creating component
class First extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
    };

    // rendering of hook
    render(){
        return(
            <h1>Here I'm creating 1st ReactJS app and its a 1st component ...!</h1>
        )
    }

}

//exporting First component
export default First;
