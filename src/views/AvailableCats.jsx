import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Cleo', age: '2', breed: 'Siamese' },
  { name: 'Bella', age: '2', breed: 'Persian' },
  { name: 'Max', age: '1', breed: 'Bengal' },
  { name: 'Charlie', age: '3', breed: 'Abyssinian' },
  { name: 'Lily', age: '4', breed: 'Peterbald' },
  { name: 'Oliver', age: '2', breed: 'Birman' },
  { name: 'Milo', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let result = cats;

    if (breedFilter) {
      result = result.filter((cat) => cat.breed === breedFilter);
    }

    if (nameSearch) {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [breedFilter, nameSearch, cats]);

  return (
    <>
      <style>
        {`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }
    

        section {
          max-width: 1500px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
        }

        .filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .form-select,
        .form-control {
          margin: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: border-color 0.3s;
        }

        .form-select:focus,
        .form-control:focus {
          border-color: #007bff;
        }

        .cats-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .cat-card {
          background-color: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          text-align: left;
          width: 250px;
          transition: transform 0.3s;
        }

        .cat-card:hover {
          transform: scale(1.05);
        }

        .img-fluid {
          width: 100%;
          height:80%;
          object-fit: cover;
        }

        .cat-info {
          padding: 10px;
          background-color: #f1f1f1;
          border-top: 1px solid #ccc;
        }

        .cat-info h3 {
          margin: 5px 0;
          color: #333;
        }

        .cat-info p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .filters {
            flex-direction: column;
          }
          .cat-card {
            width: 100%;
          }
        }
        `}
      </style>
      <section className="text-center mt-4">
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>
   
        {/* Filters Section */}
        <div className="filters mb-4">
          <select
            className="form-select"
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="">All Breeds</option>
            <option value="Siamese">Siamese</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Sphynx">Sphynx</option>
          </select>

          <input
            type="text"
            className="form-control mt-2"
            placeholder="Search by name"
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </div>

        {/* Cats Display */}
        <div className="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={`${cat.name}-${i}`} className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid" />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age} years</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
