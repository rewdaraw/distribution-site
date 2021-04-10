import React, { FC } from 'react';
import TopMainBg from '../../assets/images/topMainBg.png';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${TopMainBg})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  return <div className={classes.background}></div>;
};

export default TopMain;
