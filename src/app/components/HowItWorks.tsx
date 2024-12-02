import React, { useEffect } from "react";
import "./HowItWorks.css"; // Import your CSS file for styles
import Image from 'next/image';

const HowItWorks: React.FC = () => {
    useEffect(() => {
        const steps = document.querySelectorAll(".step");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              } else {
                entry.target.classList.remove("visible"); // Remove "visible" when out of view
              }
            });
          },
          { threshold: 0.1 } // Trigger when 10% of the step is visible
        );
    
        steps.forEach((step) => observer.observe(step));
    
        // Cleanup observer on component unmount
        return () => {
          observer.disconnect();
        };
      }, []);

  return (
    <>
      <section className="how-it-works">

        <div className="steps">
          <div className="step">
            <div className="title">
            <Image  src="/bullseye.webp"  width={150} 
height={110}   alt="Bullseye Icon" />
            </div>
            <div className="number-container">
              <div className="number">1</div>
            </div>
            <div className="description">
                <h3>Set Your Goals</h3>
                <p>Buy, Sell, Rent, or Lease. We're here for it all.</p></div>
          </div>
          <div className="step">
            <div className="title">
                <h3>Pick Your Agent</h3>
            <p>Choose from our trusted and verified experts.</p></div>
            <div className="number-container">
              <div className="number">2</div>
            </div>
            <div className="description">
            <Image  src="/personIcon.webp"  width={140} 
height={110}   alt="person Icon" />
                </div>
          </div>
          <div className="step">
            <div className="title">  <Image  src="/connectIcon.webp"  width={140} 
height={110}   alt="Connect Icon" /></div>
            <div className="number-container">
              <div className="number">3</div>
            </div>
            <div className="description"><h3>View and Connect</h3>
            <p>Check their DigiCard and start the conversation</p></div>
          </div>
          <div className="step">
            <div className="title"><h3>Seal the Deak</h3>
            <p>Share your plans and let your agent handle the rest.</p></div>
            <div className="number-container">
              <div className="number">4</div>
            </div>
            <div className="description">  <Image  src="/handshakeIcon.webp"  width={140} 
height={110}   alt="handshake Icon" /></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HowItWorks;
