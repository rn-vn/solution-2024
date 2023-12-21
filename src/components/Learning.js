// 1日毎にリンクを変更する（1日当たり2つ？）
// リンクへのアクセスかつテキストボックスへの入力条件達成でチェックボックスをオン
// チェックされたらその状態を保持
// コピペを許可するかどうか


import React, { useState } from 'react';

const Learning = () => {
  // チェックボックスの状態を管理
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  // チェックボックスをオンにする関数
  const toggleCheckbox = (index) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };

  // テキストボックスの文字数をカウントする関数
  const textCount = () => {
    const text = document.getElementById('input1').value;
    const count1 = document.getElementById('count1');
    count1.innerHTML = text.length;
  }

  return (
    <div>
      {/* SDGs 1 */}
      <input
        type="checkbox"
        checked={checkboxes[0]}
        onChange={() => toggleCheckbox(0)}
      />
      <a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/1-poverty/" onClick={() => toggleCheckbox(0)}>
        task 1
      </a><br />
      <input
        type="text"
        style={{ width: 200, height: 100 }}
        id="input1"
        onChange={() => textCount()}
      /><br />
      <p id="count1"></p>


      {/* SDGs 2 */}
      <input
        type="checkbox"
        checked={checkboxes[1]}
        onChange={() => toggleCheckbox(1)}
      />
      <a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/2-hunger/" onClick={() => toggleCheckbox(1)}>
        task 2<br />
      </a>
      <input
        type="text"
      /><br />

      {/* SDGs 3 */}
      <input
        type="checkbox"
        checked={checkboxes[2]}
        onChange={() => toggleCheckbox(2)}
      />
      <a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/3-health/" onClick={() => toggleCheckbox(2)}>
        task 3<br />
      </a>
      <input
        type="text"
      /><br />
    </div>
  );
};

export default Learning;
