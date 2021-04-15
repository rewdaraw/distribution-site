import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import firebase from '../firebase';
import TopHeader from '../components/topPage/topHeader';
import { TileData } from '../types/types';

const useStyle = makeStyles(() =>
  createStyles({
    tileImage: {
      width: '426px',
      height: '426px',
    },
  })
);

const DownloadPage: FC = () => {
  // TODO: 型エラー回避のためにanyを付与
  const { keyword }: any = useParams();
  const classes = useStyle();
  const [data, setData] = useState<TileData[]>([]);

  // TODO: resultImageList.tsxでも使っているので外部に切り出して呼び込むように変更
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

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div key={tile.title}>
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <TopHeader />
      {displayImage()}
    </div>
  );
};

export default DownloadPage;
