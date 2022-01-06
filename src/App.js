import React from "react";
import {Helmet} from 'react-helmet';
import AlphabetList from "react-alphabet-list";
import { useModal } from 'react-hooks-use-modal';

import "./App.css";



function Entry(props){
    console.log(props)
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
      })
    console.log(props.displayData.address)
    const addressGoogle = "https://www.google.com/maps?"+props.displayData.address.geo.lat+","+props.displayData.address.geo.lng
    const names = props.name.split(' ') 
    //var {names[0][0]}{names[names.length][0]}
    return (
        <div>
            <div onClick={open} className="Entry">
                <span>
                    <div className="CircleText">{names[0][0]}{names[names.length-1][0]}</div>
                    {props.name}
                </span>
                <hr className = "solid"/>
            </div>
            <Modal >
                <div className = "ContactDetailModal">
                    <p className = "CloseModalButton" onClick={close}><b>X</b></p><br/>
                    <div className = "ModalContent">
                        <h1>{props.name} </h1>
                        
                        <b> {props.displayData.username}  </b> <br/>
                        Username<br/>
                        <hr className = "solid"/>

                        <b>{props.displayData.email}</b><br/>
                        Email<br/>
                        <hr className = "solid"/>

                        <b>{props.displayData.phone}</b><br/>
                        Phone<br/>
                        <hr className = "solid"/>

                        <b>{props.displayData.website}</b><br/>
                        Website<br/>
                        <hr className = "solid"/>

                        <a href = {addressGoogle}><b>
                            {props.displayData.address.suite}, 
                            {props.displayData.address.street},
                            {props.displayData.address.city}
                        </b></a><br/>
                        Address<br/>
                        <hr className = "solid"/>

                        <b>{props.displayData.company.name}</b><br/>
                        <b>{props.displayData.company.bs}</b><br/>
                        <i>{props.displayData.company.catchPhrase}</i><br/>
                        Company<br/><br/>

                    </div>
                </div>
            </Modal>

        </div>
    )
}


//function App() {
class App extends React.Component {
    constructor () {
        super()
        this.state = { contacts: [],listItem:[] }
        this.data = [
            'aaa',
            'bbb',
            'cbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'dbb',
            'ebb',
            'fbb',
            'gbb',
            'hbb',
            'yww',
        ].concat(["16", "$$$", "😀", "🤣"]);
    }
    UNSAFE_componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then(contacts => {
                this.setState({ 
                    contacts:contacts,
                    listItem:contacts.map( (x)=>x.name+"_"+x.id)
                });
                
            });
    }

    //username={} email={} phone={}/>
    render(){
        console.log("RENDER:",this.state.contacts,this.state.listItem)
        return (
            <div className="App">
                <Helmet>
                    <style>{'body { background-color: #222; }'}</style>
                </Helmet>
                <h2 className = "alpha-list">Contacts </h2>
                <AlphabetList
                    className="alpha-list"
                        
                    generateFn={(item, index) => {
                        var j = item.length;
                        console.log("loop")
                        for (var i = item.length-1;i>=0; i--){
                            console.log(i)
                            if (item[i] === "_") {
                                j = i;
                                break;
                            }        
                        }
                        var firstUnderscore = j
                        var contactidx = parseInt(item.substring(firstUnderscore+1,item.length))
                        console.log(contactidx,item.substring(firstUnderscore+1,item.length))
                    return ( 
                        <div key = {item+index}>
                            <Entry name = {item.substring(0,firstUnderscore)} displayData = {this.state.contacts[contactidx-1]}/>
                        </div>
                    );
                    }}
                    data={this.state.listItem}
                />
            </div>
        );    
    }         
}
export default App;