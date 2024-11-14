"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styles from "./page.module.css";
import "./slide.css";
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/joy/Input';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Swiper as SwiperType } from 'swiper'; 

import { FaRegHandPointRight } from "react-icons/fa";
import Link from "next/link";

// Install Swiper modules

import { FreeMode, Thumbs, Autoplay, Pagination  } from 'swiper/modules';



interface Image {
  src: string;
  alt: string;
  inv: string;
  name: string;
}

const images: Image[] = [
  { src: "/Malbin.svg", alt: "Malvin Card1", inv: "/sample.html", name: "Malvin Sabillo"},
  { src: "/Dianne.svg", alt: "Diane", inv: "/sample.html", name: "Dianne Alvarez" },
  { src: "/Malbin.svg", alt: "Malvin Card2", inv: "/sample.html", name: "Malvin Sabillo" },
  { src: "/Dianne.svg", alt: "Diane", inv: "/sample.html", name: "Dianne Alvarez" },
  { src: "/Malbin.svg", alt: "Malvin Card3", inv: "/sample.html", name: "Malvin Sabillo" },
  { src: "/Dianne.svg", alt: "Diane", inv: "/sample.html", name: "Dianne Alvarez" },
  { src: "/Jesua.svg", alt: "Jesua", inv: "/sample.html", name: "Jesua Garlet" },
  { src: "/Jesua.svg", alt: "Jesua", inv: "/sample.html", name: "Jesua Garlet" },
  { src: "/Jesua.svg", alt: "Jesua", inv: "/sample.html", name: "Jesua Garlet" },
];



export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Image[]>(images); 
  const [shuffledImages, setShuffledImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [thumbsSwiper, setThumbsSwiper] = useState< SwiperType | null>(null);

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
            <Image  src="/fma-logo.webp"  width={500} 
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
      <Link href="/#thirdFold">
        Contact Us
      </Link>
            </div>
          </nav>
        </div>

        <div className={styles.mobile}>
          <div className={styles.logo}>
          <Image  src="/fma-logo.webp"  width={500} 
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
      <Link href="/#thirdFold" onClick={toggleNav}>
        Contact Us
      </Link>
        </nav>
</div>

      </header>

      <main>
        <div className={styles.firstFold}>
          <div className="slider-container">

            <div className="searchArea">
<Input
      placeholder="Search Your Agent..."
      sx={{ '--Input-focused': 1, width: 256 }}
      color="success"
      onChange={handleSearch} 
       className="searchBar"
    />
            </div>

                
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
        style={{
 
        }}
        loop={true}
        // spaceBetween={10}
        pagination={{ clickable: true }} 
        autoplay={{
          delay: 2500,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,  Thumbs, Autoplay, Pagination ]}
        className="mySwiper2"
      >
      {shuffledImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="invLink">
          <FaRegHandPointRight className="link-icon" />
          <Link href={image.inv}>
  Visit my Inventory
</Link>
          </div>
        
          <Image src={image.src} width={600} height={450} alt={image.alt}  quality={100} />
        </SwiperSlide>
      ))}
      </Swiper>
      <Swiper
         onSwiper={setThumbsSwiper}
         loop={true}
         spaceBetween={10}
  
         slidesPerView={3}
         freeMode={true}
         watchSlidesProgress={true}
         modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper"
      >
      {shuffledImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image.src} width={350} height={200} alt={image.alt} />
        </SwiperSlide>
      ))}
      </Swiper>
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
              <Image src={selectedImage.src}  alt={selectedImage.alt} style={{ width: '100%' }} />
              <Typography variant="h5" sx={{ mt: 1 ,mb:2}}>
                {selectedImage.name}
              </Typography>
              <Link href={selectedImage.inv} passHref style={{ color: '#1F7A1F', marginTop: '200px' }} rel="noopener noreferrer">
    My Listing
</Link>
            </>
          )}
        </Box>
      </Modal>


        </div>

        <div className={styles.secondFold} id="secondFold">

            <h1>Who We Are</h1>

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

        <div className={styles.thirdFold} id="thirdFold">
          
          <div className={styles.thirdFoldDiv}>
          <h2>Get In Touch</h2>
          <div className={styles.thirdFoldText}>

            <div className={styles.iconDiv}>
          <MailOutlineIcon/>
              <p>
                transaction@zaiko.store
              </p>
            </div>

            <div className={styles.iconDiv}> 
          <SmartphoneIcon/>
              <p>
                +63 999 6710 543
              </p>
            </div>

            <div className={styles.iconDiv}>
            <FacebookIcon />
        <Link href="https://www.facebook.com/profile.php?id=61568556057405" passHref>
          Visit our Facebook Page
        </Link>
        </div>

            <div className={styles.iconDiv}>
        <InstagramIcon />
        <Link href="https://www.instagram.com/your-profile" passHref>
          Visit us on Instagram
        </Link>
      </div>

          </div>


          </div>
        </div>
      </main>
    </div>
    </>
  );
}
