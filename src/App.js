import React from "react";
import {Helmet} from 'react-helmet';
import AlphabetList from "react-alphabet-list";
//import randomWords from "random-words";
//import { Tag, Icon } from "antd";
//import "antd/dist/antd.css";
import "./App.css";



function Entry(props){
    return (
        <div>
            <div className="Entry">
                {props.item}
                <hr className = "solid"/>
            </div>
        </div>
    )
}
function App() {
  const data = [
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
        'yww'
    ].concat(["16", "$$$", "😀", "🤣"]);
  return (
    <div className="App">
        <Helmet>
            <style>{'body { background-color: #222; }'}</style>
        </Helmet>
        <AlphabetList
            className="alpha-list"
                

            generateFn={(item, index) => {
            return ( 
                <div>
                    <Entry item = {item}/>
                </div>
                //<Tag color="rgb(42, 42, 42)" key={item + index}>
                //  <Icon type="plus" style={{ margin: "0 4px 0 0" }} />
                //  {item}
                //</Tag>
            );
            }}
            data={data}
        />
    </div>
  );
}
export default App;