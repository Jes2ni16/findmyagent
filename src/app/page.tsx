"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styles from "./page.module.css";
import "./slide.css";
import { Modal, Box, Typography, IconButton , SvgIcon} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import HowItWorks from "./components/HowItWorks";

import { Swiper as SwiperType } from 'swiper'; 

import { FaRegHandPointRight } from "react-icons/fa";
import Link from "next/link";

// Install Swiper modules

import { FreeMode, Thumbs, Autoplay, Pagination  } from 'swiper/modules';
import TestimonialCard from './components/testimonial';
import testimonials from './data/testmonialData';


interface Image {
  src: string;
  alt: string;
  inv: string;
  name: string;
}

const images: Image[] = [
  { src: "/Malvin.webp", alt: "Malvin Card1", inv: "https://zaiko.website/client/malvin2", name: "Malvin Sabillo"},
  { src: "/Dianne.webp", alt: "Diane", inv: "https://zaiko.website/client/dianne1", name: "Dianne Alvarez" },
  { src: "/Jesua.webp", alt: "Jesua", inv: "https://zaiko.website/client/jesua1", name: "Jesua Garlet" },
  { src: "/Jestoni.webp", alt: "Jestoni Brion", inv: "https://zaiko.website/client/jestoni1", name: "Jestoni Brion" },
  { src: "/Lindz.webp", alt: "Lindy Montero", inv: "https://zaiko.website/client/lindy1", name: "Lindy Montero" },
  { src: "/Ferdz.webp", alt: "Ferdelin Fernandez", inv: "https://zaiko.website/client/ferdelin1", name: "Ferdelin Fernandez" },
  { src: "/Essil.webp", alt: "Essil Lovely Son", inv: "https://zaiko.website/client/essil1", name: "Essil Lovely Son" },
  { src: "/Nino.webp", alt: "Nino Image", inv: "https://zaiko.website/client/nino1", name: "Nino" },
  { src: "/agent-profile/Eugene.webp", alt: "Eugene Image", inv: "https://zaiko.website/client/eugene1", name: "Eugene Bal anon" },
  { src: "/agent-profile/Jude.webp", alt: "Jude Embrado", inv: "https://zaiko.website/client/teody1", name: "Jude Embrado" },
  { src: "/agent-profile/Juvelyn.webp", alt: "Juvelyn Bargayo", inv: "https://zaiko.website/client/juvelyn1", name: "Juvelyn Bargayo" },
  { src: "/agent-profile/Simone.webp", alt: "Simone Ruiz", inv: "https://zaiko.website/client/simone1", name: "Juvelyn Bargayo" },
];



export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Image[]>(images); 
  const [shuffledImages, setShuffledImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  function shuffleArray(array: Image[]): Image[] {
    return array
      .map((item) => ({ item, sort: Math.random() })) // Map to a temporary object with `sort`
      .sort((a, b) => a.sort - b.sort) // Sort based on the random value
      .map(({ item }) => item); // Return only the item, excluding `sort`
  }


  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value; // Get the current input value
    setQuery(searchQuery); // Update the query state with the search input

    const searchResults = images.filter((image) =>
      image.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter images by alt text
    );
    
    setFilteredItems(searchResults); // Update the filtered items with the search results
  };
  const openModal = (image: Image) => {
    
    setQuery(''); // Clear the search input
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

 
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log('Click detected:', event.target); // Debugging line to check clicks
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Shuffle images when the component mounts
  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);


  return (
    <>
   
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.desktop}>
          <div className={styles.logo}>
            <Image  src="/fma-logo2.webp"  width={500} 
height={300}   alt="Fma Logo Logo" />
          </div>
          <nav className="navigation">
            <div className={styles.links}>
        <Link href="/">
        Home
      </Link>
      <Link href="/#secondFold">
        About Us
      </Link>
      <Link href="/#footer">
        Contact Us
      </Link>
            </div>
          </nav>
        </div>

        <div className={styles.mobile}>
          <div className={styles.logo}>
          <Image  src="/fma-logo2.webp"  width={500} 
height={300}   alt="Fma Logo Logo" />
          </div>
          <div className="hamburger" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              style={{ width: '80px', height: '50px', fontWeight: 'bolder' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

<div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}    ref={sidebarRef}> 
<button onClick={toggleNav} className={styles.closeSidebar}>&times;</button>
        <nav>
        <Link href="/" onClick={toggleNav}>
        Home
      </Link>
      <Link href="/#secondFold" onClick={toggleNav}>
        About Us
      </Link>
      <Link href="/#footer" onClick={toggleNav}>
        Contact Us
      </Link>
        </nav>
</div>

      </header>

      <main>
        <div className={styles.firstFold}>

        <h1>DISCOVER YOUR TRUSTED AGENT EFFORTLESSLY</h1>
          <div className="slider-container">
{/* 
            <div className="searchArea">
<Input
      placeholder="Search Your Agent..."
      sx={{ '--Input-focused': 1, width: 256 }}
      color="success"
      onChange={handleSearch} 
       className="searchBar"
    />
            </div> */}



                
            {query && (
        <div className="searchResults"> 
          {filteredItems.length > 0 ? (
            filteredItems.map((image, index) => (
              <li key={index} onClick={() => openModal(image)}>
                <Image src={image.src} alt={image.alt} width={200} height={100} style={{ cursor: 'pointer' }} />
             
                  <p>{image.name}</p>
                 
                
              </li>
            ))
          ) : (
            <Typography>No images found</Typography> // Display message when no images match the query
          )}
        </div>
      )}

<Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Autoplay]}// Add the Autoplay module
        autoplay={{
          delay: 2000,  // 2.5 seconds delay
          disableOnInteraction: false,  // Keep autoplay after interaction
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
      {shuffledImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="invLink">
          <FaRegHandPointRight className="link-icon" />
          <Link href={image.inv} target="_blank" rel="noopener noreferrer">
  Visit my Inventory
</Link>
          </div>
        
          <Image src={image.src} width={600} height={450} alt={image.alt}  quality={100} />
        </SwiperSlide>
      ))}
      </Swiper>
      <Typography
        variant="body1"
        textAlign="center"
        color="textSecondary"
        sx={{ marginTop: 3, color:'#116141' }}
      >
        All agents are verified <VerifiedIcon sx={{ color: '#2f45ff', fontSize: 16, marginLeft: 1 }} />
      </Typography>

          </div>

          <Modal
        open={Boolean(selectedImage)}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 800,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 24,
            padding:'30px 0 20px 0',
            // p:2,
            textAlign: 'center',
            width:'95%',
          }}
        >
          {selectedImage && (
            <>
              <IconButton
                onClick={closeModal}
                sx={{ position: 'absolute', top: -8, right: 3, fontSize:'300px' }}
              >
                <CloseIcon sx={{ fontSize: '25px' }} />
              </IconButton>
              <Image src={selectedImage.src} width={200} height={350} alt={selectedImage.alt} style={{ width: '100%' }} className="modal-image" />
              <Typography variant="h5" sx={{ mt: 1 ,mb:2}}>
                {selectedImage.name}
              </Typography>
              <Link href={selectedImage.inv} passHref style={{ color: '#1F7A1F', marginTop: '100px' , border :'1px solid #1F7A1F', padding : '5px 15px', borderRadius:'5px', boxShadow : '10px 10px 15px 5px rgba(0, 0, 0, 0.3);' }} rel="noopener noreferrer">
    My Listing
</Link>
            </>
          )}
        </Box>
      </Modal>

      
      <div className={styles.arrowDown}>
      <KeyboardArrowDownIcon style={{ fontSize: 80, color:'#116141' }} />
    </div>


      </div>



        <div className={styles.secondFold} id="secondFold">

<h2>ELAVATING REAL ESTATE AGENTS TO SUCCESS</h2>

{/* <hr /> */}

            <div className={styles.serviceText}>
            <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OzoGeYPQ6Ak" // Replace with your video URL
        title="YouTube video player"
        style={{ border: 'none' }} // Use CSS to remove the border
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
            <p>
              We feature the top real estate agents who excel in innovative marketing,
              showcasing properties with cutting-edge strategies. These agents are known
              for their trustworthiness, providing clients with honest, reliable guidance
              throughout the selling process. They stand out for exceptional client service
              and a deep understanding of the market, ensuring successful outcomes.
            </p>
          </div>
        </div>

        <div className={styles.howItWorksContainer}>
        <h2>How It Works</h2>
        <HowItWorks />
        </div>


        <div className={styles.testimonialContainer} id="testimonialContainer">
         <h2>
         Our Results, Their Words
         </h2>
         <div className="testimonial-wrapper">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          name={testimonial.name}
          rating={testimonial.rating}
        />
      ))}</div>
    </div>

        <div className={styles.footer} id="footer">
          
          <div className={styles.footerDiv}>
          <h2>Get In Touch</h2>
          <div className={styles.footerText}>

         
 

          <Link href="mailto:findmyagent@zaiko.store" passHref className={styles.iconDiv}>
          <Image src="/gmailIcon.png" alt="gmail-icon" width={70} height={60}  />
              <p>
                transaction@zaiko.store
              </p>
              </Link>
   

            <div className={styles.iconDiv}> 
            <Image src="/phoneIcon.png" alt="phone-icon" width={70} height={60}  />
              <p>
                +63 992 153 7487
              </p>
            </div>

            
          
        <Link href="https://www.facebook.com/profile.php?id=61568448785023" passHref className={styles.iconDiv}>
        <Image src="/facebookIcon.png" alt="facebook-icon" width={70} height={60}  />
        <p>
        Visit our Facebook Page
        </p>
  
        </Link>
       


   
        <Link href="https://www.instagram.com/findmyagent_?igsh=MXd5OWgzb3dmaGE3MQ%3D%3D" passHref className={styles.iconDiv}>
        <Image src="/InstagramIcon.png" alt="instagram-icon" width={70} height={60}  />
        <p>
        Visit us on Instagram
        </p>
     
        </Link>


          </div>


          </div>
        </div>
      </main>
    </div>
    </>
  );
}
