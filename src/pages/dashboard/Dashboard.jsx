import React, { useEffect, useState } from 'react';
import Dashbar from '../../components/dashbar/Dashbar';
import fetchData from '../../Data'; // Import fetchData function
import "./dashboard.css"

export default function Dashboard() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error too
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dashbar data={data} />
    </div>
  );
}


