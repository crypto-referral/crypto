import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import './App.css';
import CryptoCard from './components/CryptoCard/CryptoCard'; // Adjust the path as necessary
import { ICryptoReferrals } from './interfaces/ICryptoReferral';
import StickyHeader from './components/StickyHeader/StickyHeader'; // Adjust the path as necessary
import { Container, Box } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);
  const [cryptoReferrals, setCryptoReferral] = useState([]);

  useEffect(() => {
    // ReactGA.pageview(window.location.pathname + window.location.search);

    const fetchCryptoReferrals = async () => {
      const response = (await request(
        'https://us-west-2.cdn.hygraph.com/content/cm4y3mcd705no07w681twfchh/master',
        `
          query MyQuery {
            cryptoReferrals {
              title
              description
              referralLink
              cryptoImage {
                url
              }
            }
          }
        `,
      )) as any;

      if (response?.cryptoReferrals) {
        setCryptoReferral(response?.cryptoReferrals as any);
      }

      setLoading(() => {
        return false;
      });
    };

    fetchCryptoReferrals();
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <StickyHeader />
      <Box>
        <div className='App'>
          {loading ? (
            <div id='preloader'></div>
          ) : (
            <header className='App-header'>
              <h1>
                The Top Asian Crypto Exchanges to Buy and Sell BTC and Altcoins
              </h1>
              <p>
                In Asia, where the cryptocurrency market is expanding quickly,
                selecting the appropriate cryptocurrency exchange is an
                essential first step for traders. With so many exchanges out
                there, each with unique features, costs, and security protocols,
                choosing the ideal platform can make all the difference in the
                world to your trading success.
              </p>
              <ul className='card-container'>
                {cryptoReferrals.map((cryptoReferral: ICryptoReferrals) => {
                  return (
                    <li>
                      <CryptoCard
                        title={cryptoReferral.title}
                        imageUrl={cryptoReferral.cryptoImage.url}
                        description={cryptoReferral.description}
                        referralLink={cryptoReferral.referralLink}
                      />
                    </li>
                  );
                })}
              </ul>
            </header>
          )}
        </div>
      </Box>
    </Container>
  );
}

export default App;
