import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// 컴포넌트
// 로그인 체크
import CheckLogin from "./CheckLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const drawClearBoard = () => {
  console.log("xxxx");
  let canvas = document.getElementById("board");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#8bc34a";
  ctx.fillRect(0,100,400,230);
}

const drawImageBoard = (card, x, y) => {
  let canvas = document.getElementById("board");
  let ctx = canvas.getContext("2d");
  let image = document.getElementById(card);

  // image.onload = function () {
  //   ctx.drawImage(image, x, y, 32, 49);
  // }
  ctx.drawImage(image, x, y, 32, 49);
}

const GameRoom = (props) => {
  // 광(20), 열끗(10), 띠(5), 피(1)
  const cardDataList = [
    {image: 'pae0.png', kind: 20, card: 0, match: 1},{image: 'pae1.png', kind: 5, card: 1, match: 1},{image: 'pae2.png', kind: 1, card: 2, match: 1},{image: 'pae3.png', kind: 1, card: 3, match: 1},
    {image: 'pae4.png', kind: 10, card: 4, match: 2},{image: 'pae5.png', kind: 5, card: 5, match: 2},{image: 'pae6.png', kind: 1, card: 6, match: 2},{image: 'pae7.png', kind: 1, card: 7, match: 2},
    {image: 'pae8.png', kind: 20, card: 8, match: 3},{image: 'pae9.png', kind: 5, card: 9, match: 3},{image: 'pae10.png', kind: 1, card: 10, match: 3},{image: 'pae11.png', kind: 1, card: 11, match: 3},
    {image: 'pae12.png', kind: 10, card: 12, match: 4},{image: 'pae13.png', kind: 5, card: 13, match: 4},{image: 'pae14.png', kind: 1, card: 14, match: 4},{image: 'pae15.png', kind: 1, card: 15, match: 4},
    {image: 'pae16.png', kind: 10, card: 16, match: 5},{image: 'pae17.png', kind: 5, card: 17, match: 5},{image: 'pae18.png', kind: 1, card: 18, match: 5},{image: 'pae19.png', kind: 1, card: 19, match: 5},
    {image: 'pae20.png', kind: 10, card: 20, match: 6},{image: 'pae21.png', kind: 5, card: 21, match: 6},{image: 'pae22.png', kind: 1, card: 22, match: 6},{image: 'pae23.png', kind: 1, card: 23, match: 6},
    {image: 'pae24.png', kind: 10, card: 24, match: 7},{image: 'pae25.png', kind: 5, card: 25, match: 7},{image: 'pae26.png', kind: 1, card: 26, match: 7},{image: 'pae27.png', kind: 1, card: 27, match: 7},
    {image: 'pae28.png', kind: 20, card: 28, match: 8},{image: 'pae29.png', kind: 10, card: 29, match: 8},{image: 'pae30.png', kind: 1, card: 30, match: 8},{image: 'pae31.png', kind: 1, card: 31, match: 8},
    {image: 'pae32.png', kind: 10, card: 32, double: 1, match: 9},{image: 'pae33.png', kind: 5, card: 33, match: 9},{image: 'pae34.png', kind: 1, card: 34, match: 9},{image: 'pae35.png', kind: 1, card: 35, match: 9},
    {image: 'pae36.png', kind: 10, card: 36, match: 10},{image: 'pae37.png', kind: 5, card: 37, match: 10},{image: 'pae38.png', kind: 1, card: 38, match: 10},{image: 'pae39.png', kind: 1, card: 39, match: 10},
    {image: 'pae40.png', kind: 20, card: 40, match: 11},{image: 'pae41.png', kind: 1, card: 41, double: 1, match: 11},{image: 'pae42.png', kind: 1, card: 42, match: 11},{image: 'pae43.png', kind: 1, card: 43, match: 11},
    {image: 'pae44.png', kind: 20, card: 44, match: 12},{image: 'pae45.png', kind: 1, card: 45, match: 12},{image: 'pae46.png', kind: 5, card: 46, match: 12},{image: 'pae47.png', kind: 1, card: 47, double: 1, match: 12}
  ];
  const cardXyList = [
    [15, 140], [75, 140], [135, 140], 
    [15,220], [75,220], [135,220], 
    [225,140], [285,140], [345,140], 
    [225,220], [285,220], [345,220]
  ];
  const [gameStart, setGameStart] = React.useState(false);
  const [waitCardList, setWaitCardList] = React.useState([
    {image: 'pae2.png', kind: 1, card: 2, match: 1},{image: 'pae4.png', kind: 10, card: 4, match: 2},{image: 'pae5.png', kind: 5, card: 5, match: 2},
    {image: 'pae7.png', kind: 1, card: 7, match: 2},{image: 'pae8.png', kind: 20, card: 8, match: 3},{image: 'pae9.png', kind: 5, card: 9, match: 3},
    {image: 'pae13.png', kind: 5, card: 13, match: 4},{image: 'pae14.png', kind: 1, card: 14, match: 4},{image: 'pae16.png', kind: 10, card: 16, match: 5},
    {image: 'pae17.png', kind: 5, card: 17, match: 5},{image: 'pae28.png', kind: 20, card: 28, match: 8},{image: 'pae29.png', kind: 10, card: 29, match: 8},
    {image: 'pae30.png', kind: 1, card: 30, match: 8},{image: 'pae31.png', kind: 1, card: 31, match: 8},{image: 'pae32.png', kind: 10, card: 32, double: 1, match: 9},
    {image: 'pae33.png', kind: 5, card: 33, match: 9},{image: 'pae34.png', kind: 1, card: 34, match: 9},{image: 'pae35.png', kind: 1, card: 35, match: 9},
    {image: 'pae37.png', kind: 5, card: 37, match: 10},{image: 'pae38.png', kind: 1, card: 38, match: 10},{image: 'pae41.png', kind: 1, card: 41, double: 1, match: 11},
    {image: 'pae42.png', kind: 1, card: 42, match: 11},{image: 'pae43.png', kind: 1, card: 43, match: 11},{image: 'pae44.png', kind: 20, card: 44, match: 12},
    {image: 'pae45.png', kind: 1, card: 45, match: 12},{image: 'pae47.png', kind: 1, card: 47, double: 1, match: 12}
  ]);
  const [boardCardList, setBoardCardList] = React.useState([
    {image: 'pae1', kind: 5, card: 1, match: 1},{image: 'pae18', kind: 1, card: 18, match: 5},{image: 'pae22', kind: 1, card: 22, match: 6},
    {image: 'pae39', kind: 1, card: 39, match: 10},{image: 'pae40', kind: 20, card: 40, match: 11},{image: 'pae25', kind: 5, card: 25, match: 7},
    {image: 'pae0', kind: 20, card: 0, match: 1},{image: 'pae10', kind: 1, card: 10, match: 3},{image: 'pae15', kind: 1, card: 15, match: 4},
    {image: 'pae23', kind: 1, card: 23, match: 6},{image: 'pae24', kind: 10, card: 24, match: 7},{image: 'pae46', kind: 5, card: 46, match: 12}
  ]);
  const [myCardList, setMyCardList] = React.useState([
    {image: 'pae6', kind: 1, card: 6, match: 2},{image: 'pae19', kind: 1, card: 19, match: 5},{image: 'pae20', kind: 10, card: 20, match: 6},
    {image: 'pae36', kind: 10, card: 36, match: 10},{image: 'pae27', kind: 1, card: 27, match: 7},{image: 'pae26', kind: 1, card: 26, match: 7},
    {image: 'pae3', kind: 1, card: 3, match: 1},{image: 'pae12', kind: 10, card: 12, match: 4},{image: 'pae11', kind: 1, card: 11, match: 3},
    {image: 'pae21', kind: 5, card: 21, match: 6}
  ]);
  const classes = useStyles();

  const handleOnGameStart = () => {
    setGameStart(true);
    boardCardList.map((item, idx) => (
      // console.log(cardXyList[idx][0])
      drawImageBoard(item.image, cardXyList[idx][0], cardXyList[idx][1])
    ));
  }

  // 로그인 체크
  // CheckLogin(props);

  useEffect(() => {
    drawClearBoard();
  }, []);

  return (
    <div id="game-board">
      {
        gameStart != null && gameStart ?
          <div id="reverseCard" /> :
          <Button variant="contained" color="primary" type="button" className="game-play_start" onClick={() => handleOnGameStart()}>
          게임시작
          </Button>
      }
      <canvas width="400" height="700" className="game-room_background" id="board" />
      {
        gameStart != null && gameStart ?
          <div className="game-room_pae_my">
          {
            myCardList.map((item, idx) => (
              // console.log(item)
              <img id={"my-pae" + idx} src={"/images/" + item.image + ".png"} />
            ))
          }
          </div>
        :
          ""
      }
      {
        cardDataList.map((item, idx) => (
          <img id={"pae" + idx} src={"/images/" + item.image} />
        ))
      }
    </div>
  );
}

export default GameRoom;