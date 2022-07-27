import './App.css';
import {Slider} from '../Slider';
import {Item} from '../Item/';
import React from 'react';

function App() {

  const  items=[
    {title:'title 1',image:'',description:'small description'},
    {title:'title 2',image:'',description:'small description'},
    {title:'title 3',image:'',description:'small description'},
    {title:'title 4',image:'',description:'small description'},
  ]
  return (
    <div className="appContainer">
          <Slider>
          {items.map((item)=>{
            return (<Item key={item.title}/>);
          }
          )}
        </Slider>
    </div>

  );


}

export default App;
