import React from "react";


function Home() {
  return (
    <div>
        <h2>Welcome to City King Buffet!</h2>
        <img src="/imgs/citykingbuffet.jpg" alt="City King Buffet"/>
        <p id="main-p"><em>Location: 705 Maysville Road, Mount Sterling, Kentucky</em></p>
        
        <div id="opening-hours">
            <h3>Opening Hours</h3>
            <ul>
                <li>Mon - Thurs: 11am - 9pm</li>
                <li>Fri - Sat: 11am - 9:30pm</li>
                <li>Sun: 11:30am - 9:30pm</li>
            </ul>
        </div>
    </div>
  );
};

export default Home;