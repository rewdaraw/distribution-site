import React, { FC } from 'react';
import ImageItemList from '../components/resultPage/resultImageList';
import TopHeader from '../components/topPage/topHeader';

const ResultPage: FC = () => {
  return (
    <div>
      <TopHeader />
      <ImageItemList />
    </div>
  );
};

export default ResultPage;
