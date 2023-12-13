import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faBacon, faBars, faBasketball, faBell, faFaceAngry, faFaceSmile, faFaceSmileBeam, faFileLines, faFileWord, faFistRaised, faRadiation, faRadiationAlt, faRadio, faRainbow, faRandom, faRankingStar, faReplyAll, faStaffSnake, faUser, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css'
function Header() {
  return (
    <div className='header'>
       <div className='menuIcon'>
              <FontAwesomeIcon icon={faBars} size='2xl' />
       </div>
       <div className='worldleHeading'>
         <h1>Wordle</h1>
       </div>
       <div className='rightIcons'>
        <FontAwesomeIcon icon = {faFaceSmile} size='2xl' />
        <FontAwesomeIcon icon = {faRankingStar} size='2xl' />
        <FontAwesomeIcon icon = {faRainbow} size='2xl' />
        <button className='rightCornerButton'>
        Subscribe to Games
       </button>
       </div>

      
    </div>
  )
}

export default Header;
