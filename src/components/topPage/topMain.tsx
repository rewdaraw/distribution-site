import React, { FC } from 'react';
import TopMainBg from '../../assets/images/topMainBg.png';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${TopMainBg})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
    paper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '33%',
      width: '45%',
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>こんには</Paper>
    </div>
  );
};

export default TopMain;
