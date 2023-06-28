import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Modal, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import Penguin from './Penguin';

const url = "https://viv-penguin.uc.r.appspot.com";

class Counter extends React.Component {
    
    state = {
        count: 0,
        loading: true,
        showModal: false,
        name: '',
        thoughts: [],
        height: 0
    }

    name = null;

    async componentDidMount() {
        this.name = localStorage.getItem('name');
        if (!this.name) {
            this.name = null;
            this.setState({showModal: true});
        }
        else {
            this.setState({name: this.name});
        }

        const res = await this.getCount();
        const thoughts = await this.getThoughts();
        
        this.setState({thoughts: thoughts});
        this.setState({count: res});
        this.setState({loading: false});
    }

    getCount = async () => {
        const res = await axios.get(url + '/count')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return this.state.count;
        });
        return res;
    }

    handleOk = () => {
        this.name = this.state.name
        this.setState({showModal: false});
        localStorage.setItem('name', this.name);
    }

    getThoughts = async () => {
        const res = await axios.get(url + '/thoughts')
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return this.state.count;
            });
        console.log(res);
        return res;
    }

    update = async () => {
        if (!this.name) {
            this.setState({showModal: true});
            return;
        }
        this.setState({loading: true});
        await axios.post(url + '/count');
        await axios.post(url + '/thoughts', {
            name: this.name
        });
        const res = await this.getCount();
        const thoughts = await this.getThoughts();
        this.setState({thoughts: thoughts, count: res, loading: false});
    }

    changeName = () => {
        this.name = null;
        this.setState({showModal: true});
    }

    handleDate = (name, date) => {
        let day = new Date(date).toLocaleDateString();
        let time = new Date(date).toLocaleTimeString();
        let ret = `${name} thought about Viviana on ${day} at ${time}`;
        return ret;
    }
     
    render() {
        return(
            <div style = {{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} id = 'main'>
                <Penguin width = {140} height = {200}/>
                <div style = {{position: 'absolute', left: 0, top: 0, height: '1vw', width: '1vw', cursor: 'pointer'}}
                    onClick = {this.changeName}
                />
                <div className = 'counter' height = '15vh' width = '15vh'
                    onClick = {this.update}>
                    {!this.state.loading ?
                        (
                            this.state.count
                        ) :
                        (
                            <ReactLoading type='spin' color='blue' height='25%' width='25%'/>
                        )
                    }
                </div>
                <div style = {{margin: 20, background: 'white', padding: 20, borderRadius: 5}}>
                    {this.state.thoughts.map(thought => {
                        return(
                            <div>
                                {this.handleDate(thought.name, thought.time)}
                            </div>
                        )
                    })}
                </div>
                <Modal
                    title="Who are you? 🤨"
                    visible={this.state.showModal}
                    onOk={this.handleOk}
                    onCancel={() => this.setState({showModal: false})}>
                    <Input onChange = {(e) => {
                            this.setState({name: e.target.value});
                        }}
                        value = {this.state.name}
                    >
                    </Input>
                </Modal>
            </div>

        )
    }
}

export default Counter;