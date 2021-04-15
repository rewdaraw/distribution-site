import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import firebase from '../firebase';
import TopHeader from '../components/topPage/topHeader';
import { TileData } from '../types/types';

const useStyles = makeStyles(() => {
  createStyles({});
});

const DownloadPage: FC = () => {
  const { keyword } = useParams();
  const classes = useStyles();
  const [data, setData] = useState<TileData[]>([]);
  return <div></div>;
};

export default DownloadPage;
