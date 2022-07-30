import './App.css';
import {Slider} from '../Slider';
import {Item} from '../Item/';
import React from 'react';

function App() {

  const  items=[
    {title:'title 1',image:'https://picsum.photos/id/800/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 2',image:'https://picsum.photos/id/250/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 3',image:'https://picsum.photos/id/780/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 4',image:'https://picsum.photos/id/613/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 5',image:'https://picsum.photos/id/420/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 6',image:'https://picsum.photos/id/423/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 7',image:'https://picsum.photos/id/453/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 8',image:'https://picsum.photos/id/410/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 9',image:'https://picsum.photos/id/454/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 10',image:'https://picsum.photos/id/344/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 11',image:'https://picsum.photos/id/360/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {title:'title 12',image:'https://picsum.photos/id/370/400.webp',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  ]
  return (
    <div className="appContainer">
          <Slider>
          <div className='slider__wrapper'> 
          <div className='slider__group'>
          {items.map((item,index)=>{
              if(index<=3){
                return(
                  <Item 
                        key={item.title} 
                        title={item.title} 
                        image={item.image} 
                        description={item.description}
                        />
                );
              }

              }
              )}
          </div>

          

          <div className='slider__group'>
            {items.map((item,index)=>{
                if(index>=4 && index<=7){
                  return(
                    <Item 
                          key={item.title} 
                          title={item.title} 
                          image={item.image} 
                          description={item.description}
                          />
                  );
                }
                }
                )}
  
          </div>
            <div className='slider__group'>
            {items.map((item,index)=>{
              if(index>=8 && index<=11){
                return(
                  <Item 
                        key={item.title} 
                        title={item.title} 
                        image={item.image} 
                        description={item.description}
                        />
                );
              }
              }
              )}
          </div>
          </div>
        </Slider>
    </div>

  );


}

export default App;
