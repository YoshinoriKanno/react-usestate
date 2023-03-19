import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [isShowButtonFirst, setIsShowButtonFirst] = useState(true);
  const [isShowButtonSecond, setIsShowButtonSecond] = useState(false);
  const [isShowButtonThard, setIsShowButtonThard] = useState(false);
  const [isShowReceipt, setIsShowReceipt] = useState(true);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const buttonFirst = () => {
    setIsShowReceipt(!isShowReceipt);
    setIsShowButtonFirst(!isShowButtonFirst);
    setIsShowButtonSecond(!isShowButtonSecond);
    // setIsShowButtonThard(!isShowButtonThard);
    setIsShowConfirm(!isShowConfirm);
  };
  const buttonPrev = () => {
    setIsShowReceipt(!isShowReceipt);
    setIsShowConfirm(!isShowReceipt);
    setIsShowButtonFirst(!isShowButtonFirst);
    setIsShowButtonSecond(!isShowButtonSecond);
    // setIsShowButtonThard(!isShowButtonThard);
    setIsShowConfirm(!isShowConfirm);
  };
  const buttonSecond = () => {
    setIsShowReceipt(!isShowReceipt);
    // setIsShowButtonFirst(!isShowButtonFirst);
    setIsShowButtonSecond(!isShowButtonSecond);
    setIsShowButtonThard(!isShowButtonThard);
    setIsShowConfirm(!isShowConfirm);
  };
  const buttonThard = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div
        style={{
          display: isShowReceipt ? "block" : "none"
        }}
      >
        レシート
      </div>
      <div
        style={{
          display: isShowButtonSecond ? "block" : "none"
        }}
      >
        キャンセルしますか
      </div>
      <div
        style={{
          display: isShowButtonFirst ? "block" : "none"
        }}
      >
        <button onClick={buttonFirst}>注文をキャンセルする</button>
      </div>
      <div
        style={{
          display: isShowButtonSecond ? "block" : "none"
        }}
      >
        <button onClick={buttonPrev}>戻る</button>
        <button onClick={buttonSecond}>キャンセルする</button>
      </div>
      <div
        style={{
          display: isShowButtonThard ? "block" : "none"
        }}
      >
        <button onClick={buttonThard}>キャンセル済み</button>
      </div>
    </div>
  );
}
