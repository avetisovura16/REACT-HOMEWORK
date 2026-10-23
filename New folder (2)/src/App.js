import React, { useState, useEffect } from 'react';

const backupData = [
  { "name": "Akaki Tsereteli State University", "web_pages": ["http://atsu.edu.ge"], "alpha_two_code": "GE", "domains": ["atsu.edu.ge"], "country": "Georgia" },
  { "name": "Caucasus University", "web_pages": ["http://cu.edu.ge"], "alpha_two_code": "GE", "domains": ["cu.edu.ge"], "country": "Georgia" },
  { "name": "European School of Management - Tbilisi", "web_pages": ["http://esm-tbilisi.ge"], "alpha_two_code": "GE", "domains": ["esm-tbilisi.ge"], "country": "Georgia" },
  { "name": "University of Grigol Robakidze", "web_pages": ["http://gruni.edu.ge"], "alpha_two_code": "GE", "domains": ["gruni.edu.ge"], "country": "Georgia" },
  { "name": "Georgian Agricultural University", "web_pages": ["http://gsau.edu.ge"], "alpha_two_code": "GE", "domains": ["gsau.edu.ge"], "country": "Georgia" },
  { "name": "Georgian Technical University", "web_pages": ["http://gtu.edu.ge"], "alpha_two_code": "GE", "domains": ["gtu.edu.ge"], "country": "Georgia" },
  { "name": "International Blacksea University", "web_pages": ["http://ibsu.edu.ge"], "alpha_two_code": "GE", "domains": ["ibsu.edu.ge"], "country": "Georgia" },
  { "name": "Ilia Chavchavadze State University", "web_pages": ["http://iliauni.edu.ge"], "alpha_two_code": "GE", "domains": ["iliauni.edu.ge"], "country": "Georgia" },
  { "name": "Tbilisi Pedagogical University", "web_pages": ["http://saba.edu.ge"], "alpha_two_code": "GE", "domains": ["saba.edu.ge"], "country": "Georgia" },
  { "name": "St. Andrew Georgian University", "web_pages": ["http://sangu.ge"], "alpha_two_code": "GE", "domains": ["sangu.ge"], "country": "Georgia" },
  { "name": "Tbilisi Institute of Asia and Africa", "web_pages": ["http://tiaa.edu.ge"], "alpha_two_code": "GE", "domains": ["tiaa.edu.ge"], "country": "Georgia" },
  { "name": "Tbilisi State Medical University", "web_pages": ["http://tsmu.edu"], "alpha_two_code": "GE", "domains": ["tsmu.edu"], "country": "Georgia" },
  { "name": "Tbilisi State University", "web_pages": ["http://tsu.edu.ge"], "alpha_two_code": "GE", "domains": ["tsu.edu.ge"], "country": "Georgia" },
  { "name": "Free University of Tbilisi", "web_pages": ["http://freeuni.edu.ge"], "alpha_two_code": "GE", "domains": ["freeuni.edu.ge"], "country": "Georgia" },
  { "name": "Business and Technology University", "web_pages": ["http://btu.ge"], "alpha_two_code": "GE", "domains": ["btu.ge", "btu.edu.ge"], "country": "Georgia" }
];

export default function App() {

  const [page, setPage] = useState('home'); 
  const [inputCountry, setInputCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [selectedUni, setSelectedUni] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = (country) => {
    setLoading(true);
    setPage('list');
    setSelectedCountry(country);

    fetch(`https://hipolabs.com{country}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setUniversities(data);
        } else {
          setUniversities(backupData);
        }
        setLoading(false);
      })
      .catch(() => {
        setUniversities(backupData);
        setLoading(false);
      });
  };

  if (page === 'home') {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h1>🎓 Universities</h1>
        <p>Find information about higher education institutions in any country.</p>
        <form onSubmit={(e) => { e.preventDefault(); if(inputCountry.trim()) fetchUniversities(inputCountry.trim()); }}>
          <input
            type="text"
            placeholder="Enter a country (e.g. Georgia)"
            value={inputCountry}
            onChange={(e) => setInputCountry(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', width: '250px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '5px', cursor: 'pointer' }}>
            Search
          </button>
        </form>
      </div>
    );
  }

  if (page === 'list') {
    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <button onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>⬅️ Home</button>
        <h2>📍 Country: {selectedCountry}</h2>
        
        {loading ? (
          <h3>Loading list...</h3>
        ) : (
          <ul>
            {universities.map((uni, idx) => (
              <li key={idx} style={{ margin: '12px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span>{uni.name}</span>
                <button onClick={() => { setSelectedUni(uni); setPage('detail'); }} style={{ cursor: 'pointer' }}>
                  Detail page
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (page === 'detail' && selectedUni) {
    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <button onClick={() => setPage('list')} style={{ cursor: 'pointer' }}>⬅️ Back to list</button>
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h1>🏛️ {selectedUni.name}</h1>
          <p><strong>Country:</strong> {selectedUni.country}</p>
          <p><strong>Country code:</strong> {selectedUni.alpha_two_code}</p>
          <p><strong>Domains:</strong> {selectedUni.domains ? selectedUni.domains.join(', ') : 'No data'}</p>
          <p><strong>Official websites:</strong></p>
          <ul>
            {selectedUni.web_pages && selectedUni.web_pages.map((pageUrl, idx) => (
              <li key={idx}><a href={pageUrl} target="_blank" rel="noreferrer">{pageUrl}</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
}
