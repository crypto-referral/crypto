import React, { FC } from 'react';
import { CryptoCardWrapper } from './CryptoCard.styled';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';

interface CryptoCardProps {
  title: string;
  imageUrl: string;
  description: string;
  referralLink: string;
}

const CryptoCard: FC<CryptoCardProps> = ({
  title,
  imageUrl,
  description,
  referralLink,
}) => {
  const handleOpenTab = () => {
    // Open the URL in a new tab
    window.open(referralLink, '_blank');
  };

  return (
    <CryptoCardWrapper>
      <Card sx={{ display: 'flex', flex: '1 auto 0', pl: 1, pr: 1 }}>
        <CardMedia
          component='img'
          sx={{ width: 140, height: 140, objectFit: 'contain' }}
          image={imageUrl}
          alt='Placeholder Image'
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Button variant='outlined'>Read Review</Button>
          <Button
            sx={{ width: '100%' }}
            variant='contained'
            onClick={handleOpenTab}
          >
            Trade
          </Button>
        </Box>
      </Card>
    </CryptoCardWrapper>
  );
};

export default CryptoCard;
