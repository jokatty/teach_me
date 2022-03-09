import { Container } from '@mui/material';
import React from 'react';

export default function HowTo() {
  const howto = {
    box: {
      width: '60%',
      height: '40vh',
      background: 'blue',
    },
  };
  return (
    <Container maxWidth="sm" style={howto.box}>
      <p>Tutorial</p>
    </Container>
  );
}
