import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './404.styles';

const ErrorPage = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
      <ErrorImageText>Sorry, something went wrong</ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default ErrorPage;
