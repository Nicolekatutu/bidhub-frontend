import React, { useState } from 'react';
import './Envelope.css';
import conemail from '../../assets/confirmed-email.png';
const Envelope = ()=> {
    return (
        <div class="mail-container">

<div class="contact">
<img className='confirm-mail' src={conemail} alt="" />

	{/* <div class="envelope">
		<div class="top">
			<div class="outer"><div class="inner"></div></div>
		</div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
		<div class="cover"></div>
		<div class="paper">
			<a class="call" href="tel:5555555555"><div class="i"></div>555 555 5555</a>
			<a class="mail" href="mailto:you@domain.com"><div class="i">@</div>you@doma.in</a>
		</div>
	</div> */}
</div>
</div>


    );}
export default Envelope;
