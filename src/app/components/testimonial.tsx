import React from 'react';
import  './testimonial.css'

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, rating }) => {
  return (
    <div className="testimonial-card">
      <div className='testimonial-heading'>
      <h3 className="testimonial-name">{name}</h3>
      <div className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
            ★
          </span>
        ))}
      </div>
      </div>

      <hr />
 
      <p className="testimonial-quote">"{quote}"</p>
 
    </div>
  );
};

export default TestimonialCard;
