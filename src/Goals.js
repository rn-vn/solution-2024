import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState({
    id: 1,
    name: 'ゴール'
  });

  // データを更新する関数
  const updateData = () => {
    // 新しいデータをセットする
    setData({
      id: 2,
      name: '新しいゴール'
    });
  };

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
