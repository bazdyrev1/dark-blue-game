import React, { FC } from 'react';
import { GAME_LEVELS } from './components/levels/levels';
import './index.css'

const App:FC = ():JSX.Element => {
  
  const level = GAME_LEVELS[0].trim().split('\n');

  // console.log(level[0])
  

  return (

    <div className="App">
      <div>
      {level.map((row) => {
      
        return (
          <div className='row'>{
          row.split('').map(item => {
            console.log(item)
            if(item === "."){
              return (
                <div className='empty'>.</div>
              )
            } else if( item === '#'){
              return (
                <div className='wall'>#</div>
              )
            } else if( item === '+'){
              return (
                <div className='lava'>+</div>
              )
            } else if( item === '@'){
              return (
                <div className='player'>@</div>
              )
            } else if( item === 'o'){
              return (
                <div className='coin'>o</div>
              )
            } else if( item === '='){
              return (
                <div className='lava'>=</div>
              )
            }else if( item === 'v'){
              return (
                <div className='lava'>=</div>
              )
            }
            return item
          })
          
        }</div>

        )
      })}
      </div>
     
    </div>
  );
}

export default App;
