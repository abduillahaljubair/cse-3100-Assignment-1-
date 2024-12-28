import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fdf8f3', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#3a3a3a', fontSize: '2.5rem', marginBottom: '10px' }}>
        Contact Us
      </h1>
      <h2 style={{ textAlign: 'center', color: '#7e7e7e', fontSize: '1.5rem', marginBottom: '20px' }}>
        Let’s Celebrate Our Love for Cats Together!
      </h2>
      <p style={{ textAlign: 'center', color: '#5c5c5c', fontSize: '1rem', marginBottom: '30px' }}>
        Cats bring joy, warmth, and magic into our lives. Whether you have questions, need advice, or 
        just want to share your favorite cat stories, we’re here to listen!
      </p>

      <div style={{ maxWidth: '500px', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            margin: '10px 0',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          style={{
            margin: '10px 0',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <textarea
          placeholder="Your Message"
          style={{
            margin: '10px 0',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            height: '150px',
            resize: 'none',
          }}
        />
        <button
          style={{
            backgroundColor: '#ff6347',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Send Message
        </button>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', color: '#3a3a3a' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Stay Connected</h3>
        <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
          Want more tips and fun facts about cats? Reach out to us anytime!
        </p>
        <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Email: catinfo123@gmail.com</p>
        <div style={{ marginTop: '20px' }}>
          <a href="#" style={{ margin: '0 15px', color: '#ff6347', textDecoration: 'none', fontSize: '1.2rem' }}>
            Facebook
          </a>
          <a href="#" style={{ margin: '0 15px', color: '#ff6347', textDecoration: 'none', fontSize: '1.2rem' }}>
            Twitter
          </a>
          <a href="#" style={{ margin: '0 15px', color: '#ff6347', textDecoration: 'none', fontSize: '1.2rem' }}>
            Instagram
          </a>
        </div>
      </div>

      <div
        style={{
          marginTop: '40px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#ffe5d0',
          borderRadius: '10px',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#3a3a3a' }}>
          Why We Love Cats
        </h3>
        <p style={{ fontSize: '1rem', color: '#5c5c5c' }}>
          Cats are more than just pets; they’re family. Their purrs are soothing, their curiosity is 
          inspiring, and their loyalty is unmatched. Let’s work together to make the world a better 
          place for our feline companions!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
