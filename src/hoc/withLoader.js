import React, {Component, Fragment} from 'react';
import Spinner from "../components/UI/Spinner/Spinner";



const withLoader = (WrappedComponent, axios) => {
    return class WithError extends Component {
        constructor(props){
            super(props);

            this.state={
                response: false
            };

           axios.interceptors.request.use(req => {
                this.setState({response: true});
                return req;
            });
            axios.interceptors.response.use(res => {
                this.setState({response: false});
                return res;
            })
        };

        render() {
            return (
                <Fragment>
                    {this.state.response ? <Spinner/> : null}
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
};

export default withLoader;