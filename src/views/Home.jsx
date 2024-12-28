import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Chuchu', age: '2' },
  { name: 'Mimi', age: '1' },
  { name: 'chaw', age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images and assign them to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background-color: #fdfdfd;
          }
          section {
            padding: 20px;
            margin:auto;
            max-width: 1200px;
          }
          .header-section {
            text-align: center;
            background-color: #f9f9f9;
            padding: 20px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .header-section h2 {
            color: #333;
            margin-bottom: 15px;
          }
          .header-section p {
            color: #555;
            font-size: 1rem;
            line-height: 1.5;
          }
          .featured-section h2 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
          }
          .cats-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }
          .cat-card {
            width: 300px;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
          }
          .cat-card:hover {
            transform: scale(1.05);
          }
          .img-fluid {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid #ddd;
          }
          .cat-info {
            padding: 15px;
            text-align: center;
          }
          .cat-info h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
          }
          .cat-info p {
            font-size: 1rem;
            color: #777;
            margin: 0;
          }
          @media (max-width: 768px) {
            .cats-container {
              flex-direction: column;
              align-items: center;
            }
            .cat-card {
              width: 90%;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <section className="header-section">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Discover your new furry friend! At Purrfect Adoption, we connect loving cats with their forever families. Browse through our featured cats to find
          your purr-fect companion.
        </p>
      </section>

      {/* Featured Cats Section */}
      <section className="featured-section">
        <h2>Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat, index) => (
            <div key={index} className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid" />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
