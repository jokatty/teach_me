import { Container } from '@mui/material';
import React from 'react';
import TakePicture from './TakePicture';
import UploadPicture from './UploadPicture';

export default function PictureBlock() {
  return (
    <Container>
      <TakePicture />
      <UploadPicture />
    </Container>
  );
}
