export interface Testimonial {
    quote: string;
    name: string;
    rating: number;
  }
  
  const testimonials: Testimonial[] = [
    {
      quote: 'Through FindMyAgent, I connected with the perfect agent who helped me find the ideal rental home. They understood exactly what I was looking for and made the process so easy!',
      name: 'Jenny B.',
      rating: 4,
    },
    {
      quote: 'FindMyAgent led me to an amazing agent who quickly found a buyer for my property. Their professionalism and dedication made all the difference!',
      name: 'Nino C.',
      rating: 4,
    },
    {
      quote: 'Thanks to FindMyAgent, I found the perfect agent who guided me in buying a home in a housing development. Their expertise made everything smooth and hassle-free!',
      name: 'Juvy G.',
      rating: 5,
    },
  ];
  
  export default testimonials;
  