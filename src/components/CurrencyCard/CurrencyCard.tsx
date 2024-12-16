import { Button } from '@mui/material';
import React, { FC } from 'react';

interface CurrencyCardProps {}

const CurrencyCard: FC<CurrencyCardProps> = () => (
  <div className='sc-jXbUNg evbyiU'>
    <Button
      variant='contained'
      onClick={() => {
        alert('clicked');
      }}
    >
      Hello world I am testing
    </Button>
  </div>
);

export default CurrencyCard;
