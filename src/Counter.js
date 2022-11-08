import React,{PureComponent} from 'react';


export default class Purecomp extends PureComponent {

    render(){
        console.log("render");
        return(
            <div>
                <h3>Counter component</h3>
                <h3>{this.props.count}</h3>
            </div>
        )
    }
}

