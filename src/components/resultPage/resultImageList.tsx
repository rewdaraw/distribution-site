import React, { FC, useState } from 'react';
import firebase from '../../firebase';
import { TileData } from '../../types/types';

const ImageItemList: FC = () => {
  // 
  const [data, setData] = useState<TileData[]>([]);

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

  return <div></div>;
};

export default ImageItemList;
