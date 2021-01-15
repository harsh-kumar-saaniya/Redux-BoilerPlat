import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { set_data } from "../../store/action";
import { inputHandler } from "../../store/action";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { dataIntoState } from '../../store/action';


class Home extends React.Component {

    render() {
        console.log("data from state===>", this.props)
        // console.log("data=>",this.props.users.data)
        // let getDataFromState =() =>{
        //     console.log
        //     ("working")
        // }
        const arr = ["apple", "mango", "trystar", "banana"];
        let getDataFromState = () => {
            console.log("this is state data", this.props.users);
            // console.log("this is workig")
        }
        return (
            <div>
                <div>
                    <input type="text" placeholder="enter your product detail" onChange={(e) => this.props.inputHandler(e)} />
                    <input type="text" placeholder="write product title" onChange={(e) => this.props.inputHandler(e)} />
                    <button onClick={() => getDataFromState()}>Post data</button>
                </div>
                <ul>

                    
                </ul>
                <br /><br /><br /><br /><br /><div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users,
    users: state.users.name
})


const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
    inputHandler: (e) => dispatch(inputHandler(e))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
