import React from 'react';
import { Text } from 'react-native';

const ShortSummary = ({ text, maxLength }) => {
  const removeHtmlTags = (str) => {
    return str.replace(/(<([^>]+)>)/gi, '');
  };

  const shortenText = (str, length) => {
    if (str.length <= length) {
      return str;
    } else {
      return str.slice(0, length) + '...';
    }
  };

  const cleanedText = removeHtmlTags(text);
  const shortenedText = shortenText(cleanedText, maxLength);

  return <Text>{shortenedText}</Text>;
};

export default ShortSummary;