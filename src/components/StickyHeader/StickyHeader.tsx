import React, { FC } from 'react';
import styled from 'styled-components';
import { AppBar, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import logo from '../../assets/images/logo-2.png';

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0, // Remove default padding globally
        },
      },
    },
  },
});

interface StickyHeaderProps {}
const StyledImage = styled.img`
  width: 200px;
  height: auto;
`;

const StickyHeader: FC<StickyHeaderProps> = () => (
  <ThemeProvider theme={theme}>
    <AppBar position='sticky' sx={{ top: 0 }}>
      <Toolbar className='no-padding' sx={{ padding: 0 }}>
        <StyledImage src={logo} alt='Crypto referral' />
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default StickyHeader;
