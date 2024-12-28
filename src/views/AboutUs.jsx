import React from 'react';

const AboutCats = () => {
  return (
    <div style={styles.container}>
     

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Cats</h2>
          <p style={styles.text}>
            Cats are beloved companions, known for their playful and independent nature. From fluffy fur to curious whiskers, they bring joy to millions of households worldwide.
          </p>
          <img
            src="https://images.litter-robot.com/media/wysiwyg/kindle-kittens.png"
            alt="Group of Cats"
            style={styles.image}
          />
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission: Helping Cats and Their Humans</h2>
          <p style={styles.text}>
            At CatWorld, we aim to educate and inspire cat lovers about the best practices to care for their feline friends. Together, we can create a happier world for cats and humans alike!
          </p>
          <img
            src="https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.jpg?s=612x612&w=0&k=20&c=U6HBa06jHDDZ4Wbd1GylTEybkvUCUaMf7blxCr-bon0="
            alt="Cat on Couch"
            style={styles.image}
          />
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Fun Cat Facts</h2>
          <p style={styles.text}>
            Did you know? Cats can make over 100 vocal sounds, and they spend about 70% of their lives sleeping!
          </p>
          <img
            src="https://i.insider.com/63f90ae786669d001824817c?width=1200&format=jpeg"
            alt="Cat Playing"
            style={styles.image}
          />
        </section>

        <section style={styles.statsSection}>
          <h2 style={styles.statsTitle}>Cats by the Numbers</h2>
          <div style={styles.statsGrid}>
            <div style={styles.statsCard}>
              <h3 style={styles.statsNumber}>500+</h3>
              <p style={styles.statsText}>Recognized Breeds</p>
            </div>
            <div style={styles.statsCard}>
              <h3 style={styles.statsNumber}>95M</h3>
              <p style={styles.statsText}>House Cats in the US</p>
            </div>
            <div style={styles.statsCard}>
              <h3 style={styles.statsNumber}>15-20</h3>
              <p style={styles.statsText}>Average Lifespan (Years)</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>About Adoption</h3>
            <p style={styles.footerText}>
              CatWorld is dedicated to celebrating our feline friends. From tips to resources, we're here to help you and your cat thrive.
            </p>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Quick Links</h3>
            <ul style={styles.footerList}>
              <li><a href="#adopt" style={styles.footerLink}>Adopt a Cat</a></li>
              <li><a href="#care" style={styles.footerLink}>Care Tips</a></li>
              <li><a href="#breeds" style={styles.footerLink}>Popular Breeds</a></li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Contact Us</h3>
            <p style={styles.footerText}>
              Email: support@catworld.com<br />
              Phone: +1 234 567 890<br />
              Address: 123 Cat Lane, Meow City
            </p>
          </div>
        </div>
        <p style={styles.footerBottomText}> All rights reserved. Designed with 🐾 by cat lovers.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '2px solid #ddd',
    paddingBottom: '1rem',
  },
  logo: { fontSize: '2rem', fontWeight: '700', color: '#ff6347' },
  demoButton: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  main: { padding: '1rem 0' },
  section: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: { fontSize: '1.75rem', color: '#333', marginBottom: '1rem' },
  text: { fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  statsSection: { textAlign: 'center', padding: '2rem 0' },
  statsTitle: { fontSize: '2rem', marginBottom: '1.5rem', color: '#333' },
  statsGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  statsCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '200px',
    textAlign: 'center',
  },
  statsNumber: { fontSize: '1.8rem', fontWeight: '700', color: '#ff6347' },
  statsText: { fontSize: '1rem', color: '#555' },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    marginTop: '2rem',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  footerColumn: {
    flex: '1 1 200px',
    padding: '1rem',
    textAlign: 'left',
  },
  footerHeading: { fontSize: '1.5rem', color: '#ff6347', marginBottom: '0.5rem' },
  footerText: { fontSize: '1rem', color: '#ccc', lineHeight: '1.5' },
  footerList: { listStyle: 'none', padding: '0' },
  footerLink: { color: '#ff6347', textDecoration: 'none', fontSize: '1rem' },
  footerBottomText: { fontSize: '0.9rem', marginTop: '1rem', color: '#ccc' },
};

export default AboutCats;
