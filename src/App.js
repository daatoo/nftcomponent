import React, { Component } from 'react';
import './App.css';
import './index.css';
import { NftImage } from './images';
import { Avatar } from './images';
import { ReactComponent as EthereumIcon } from './images/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from './images/icon-clock.svg';
import { ReactComponent as ViewIcon } from './images/icon-view.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='w-[327px] tablet:w-[350px] bg-[#15263F] rounded-[15px] shadow-mainShadow p-6 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]'>
          
          <div className='flex flex-col gap-6'>

            <div className='group relative'>
              <img id='img' src={NftImage} className='w-[278px] tablet:w-[302px] rounded-lg cursor-pointer' />
              <div className='hidden group-hover:flex bottom-0 cursor-pointer w-full h-full absolute bg-[#00FFF8] mix-blend-normal opacity-50 rounded-lg '></div>
              <ViewIcon className='hidden absolute cursor-pointer group-hover:flex left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]' />
            </div>
            <div className='flex flex-col w-[302px] gap-4'>
              <h1 className='text-white font-[600] w-[190px] text-[22px] leading-7 text-left hover:text-[#00FFF8] cursor-pointer'>
                Equilibrium #3429</h1>
              <p className='text-[#8BACD9] font-[300] text-lg leading-[26px] text-left '>
                Our Equilibrium collection promotes balance and calm.
              </p>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-[7px]'>
                <EthereumIcon />
                <p className='text-[#00FFF8] font-[600] text-base leading-5 '>0.041 ETH</p>
              </div>
              <div className='flex gap-[9px]'>
                <ClockIcon />
                <p className='text-[#8BACD9] font-[400] text-base leading-5 '>3 days left</p>
              </div>
            </div>

            <hr className='border-none h-[1px] bg-[#2E405A]' />

            <div className='flex items-center gap-4'>
              <div className='border border-solid border-white rounded-[50%]'>
                <img src={Avatar} className='w-[31px]' />
              </div>
              <h2 className='text-[#8BACD9] font-[400] text-base  leading-5 '>Creation of 
                <span className='text-white ml-[5px] cursor-pointer hover:text-[#00FFF8]'>Jules Wyvern</span>
              </h2>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
