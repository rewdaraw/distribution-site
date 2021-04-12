import React, { FC, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import firebase from '../../firebase';
import { TileData } from '../../types/types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80%',
      textAlign: 'center',
      marginTop: '2%',
    },
    tileImage: {
      height: '218px',
      width: '218px',
    },
  })
);

const ImageItemList: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  //
  const [data, setData] = useState<TileData[]>([]);
  // TODO: 型エラー回避のためにanyを付与
  const { keyword }: any = useParams();

  // 検索結果データを取得し配列に格納する関数
  const getData = async (searchWord: string | undefined) => {
    // firebaseのfirestoreを変数に格納
    const db = firebase.firestore();

    // どのコレクションのデータ(参照データ)を取得するのか指定
    const tileDataRef = db.collection('tileData');

    // 取得した参照データを使ってどのドキュメントのフィールドを取得するのか指定
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord
    );

    // 実際に取得して変数に格納する
    const snapShot = await searchedData.get();

    // 変数snapShotのデータは使いやすい形になっていないので、空のオブジェクト型の配列を作ってドキュメントのデータを格納
    const temporaryData: Record<string, unknown>[] = [];

    snapShot.docs.map((doc) => {
      temporaryData.push(doc.data());
    });

    //
    setData(temporaryData as TileData[]);
  };

  useEffect(() => {
    getData(keyword);
  }, []);

  return (
    <div className={classes.root}>
      {data.map((tile) => (
        <div key={tile.title}>
          <Button
            onClick={() => {
              history.push('/download/' + tile.title);
            }}>
            <img
              src={tile.image}
              alt={tile.title}
              className={classes.tileImage}
            />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageItemList;
