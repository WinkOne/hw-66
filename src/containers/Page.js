import React, {Component} from 'react';
import Buttons from "../components/UI/Button/Button";
import axiosResponse from "../axios-response"
import withLoader from "../hoc/withLoader";

class Page extends Component {
    state = {
        order: []
    };
    getClickHandler = async () => {
        const response = await axiosResponse.get('/orders.json');
        const data = response.data;
        this.setState({order: data});
    };

    render() {
        return (
            <div>
                <Buttons onclick={this.getClickHandler}/>
                {Object.keys(this.state.order).map((name, index) => {
                    return <div key={index} style={{border: "1px solid black", width: "40%", margin: "10px"}}>
                        <h4>{this.state.order[name].customer.email}</h4>
                        <p>{this.state.order[name].customer.name}</p>
                        <p>{this.state.order[name].customer.postal}</p>
                        <p>{this.state.order[name].customer.street}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default withLoader(Page, axiosResponse);