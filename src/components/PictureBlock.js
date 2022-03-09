import React from 'react';

import { Container } from '@mui/material';
import TakePicture from './TakePicture';
import UploadPicture from './UploadPicture';

export default function PictureBlock() {
  const btnContainer = {
    container: {
      // width: '70%',
      padding: '2rem',
    },
  };
  return (
    <Container maxWidth="sm" style={btnContainer.container}>
      <TakePicture />
      <UploadPicture />
    </Container>
  );
}
