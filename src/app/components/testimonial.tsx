import React from 'react';
import  './testimonial.css'

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name,  rating }) => {
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
 
      <p className="testimonial-quote">&quot;{quote}&quot;</p>
 
    </div>
  );
};

export default TestimonialCard;
