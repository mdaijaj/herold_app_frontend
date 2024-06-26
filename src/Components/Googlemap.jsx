// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const GoogleMapPage = () => {
//   const [location, setLocation] = useState('');
//   const [coordinates, setCoordinates] = useState(null);

//   const getCoordinates = async (location) => {
//     try {
//       const response = await axios.get(`https://api.geoapify.com/v1/geocode/search`, {
//         params: {
//           text: location,
//           apiKey: '20b0f1c1000f4f17bd07bde5c7af6e44'
//         }
//       });
//       const data = response.data;
//       console.log("kkkk", data);
//       if (data.features && data.features.length > 0) {
//         setCoordinates(data.features[0].geometry.coordinates);
//       } else {
//         console.error('No coordinates found for this location.');
//       }
//     } catch (error) {
//       console.error('Error fetching the coordinates:', error);
//     }
//   };

//   useEffect(() => {
//     const name = localStorage.getItem('companyInfo');
//     if (name) {
//       const companyInfo = JSON.parse(name);
//       console.log("companyInfo", companyInfo);
//       if (companyInfo && companyInfo.city) {
//         setLocation(companyInfo.city);
//       } else {
//         console.error('City information is missing in companyInfo.');
//       }
//     } else {
//       console.error('No companyInfo found in localStorage.');
//     }
//   }, []);

//   useEffect(() => {
//     if (location) {
//       getCoordinates(location);
//     }
//   }, [location]);

//   return (
//     <div>
//       {coordinates ? (
//         <LoadScript googleMapsApiKey="AIzaSyDBzKCTtWwWFvdL7FN5sTcgaIL1qm8PpC4">
//           <GoogleMap
//             mapContainerStyle={{ width: '100%', height: '400px' }}
//             center={{ lat: coordinates[1], lng: coordinates[0] }}
//             zoom={10}
//           >
//             <Marker position={{ lat: coordinates[1], lng: coordinates[0] }} />
//           </GoogleMap>
//         </LoadScript>
//       ) : (
//         <p>Loading map...</p>
//       )}
//     </div>
//   );
// };

// export default GoogleMapPage;



import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap() {
  var name = localStorage.getItem('companyInfo');
  let companyInfo;
  if (name){
    companyInfo=JSON.parse(name)
    // console.log("aijaj", companyInfo)
  }


  const add = [Math.abs(companyInfo?.latitude), Math.abs(companyInfo?.longitude)];
  return (
    <Map height={350} defaultCenter={add} defaultZoom={5}>
      <Marker width={50} anchor={add} />
    </Map>
  );
}