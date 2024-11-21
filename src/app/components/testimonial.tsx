import React from 'react';
import './testimonial.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number;
  // Removed unused title
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, rating }) => {
  const clampedRating = Math.max(0, Math.min(rating, 5)); // Ensure rating is between 0-5

  return (
    <div className="testimonial-card">
      <div className="testimonial-heading">
        <h3 className="testimonial-name">{name}</h3>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < clampedRating ? 'filled' : ''}`}>
              ★
            </span>
          ))}
        </div>
      </div>
      <hr />
      <p className="testimonial-quote">&quot;{quote}&quot;</p> {/* Fixed unescaped entities */}
    </div>
  );
};

export default TestimonialCard;
