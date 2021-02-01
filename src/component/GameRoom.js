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

const drawMiddleBoard = () => {
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
  const cardDataList = ['pae0.png','pae1.png','pae2.png','pae3.png',
  'pae4.png','pae5.png','pae6.png','pae7.png','pae8.png','pae9.png',
  'pae10.png','pae11.png','pae12.png','pae13.png','pae14.png','pae15.png',
  'pae16.png','pae17.png','pae18.png','pae19.png','pae20.png','pae21.png',
  'pae22.png','pae23.png','pae24.png','pae25.png','pae26.png','pae27.png',
  'pae28.png','pae29.png','pae30.png','pae31.png','pae32.png','pae33.png',
  'pae34.png','pae35.png','pae36.png','pae37.png','pae38.png','pae39.png',
  'pae40.png','pae41.png','pae42.png','pae43.png','pae44.png','pae45.png',
  'pae46.png','pae47.png'];
  const cardXyList = [
    [15, 140], [75, 140], [135, 140], 
    [15,220], [75,220], [135,220], 
    [225,140], [285,140], [345,140], 
    [225,220], [285,220], [345,220]
  ];
  const [gameStart, setGameStart] = React.useState(false);
  const [boardCardList, setBoardCardList] = React.useState([
    'pae1', 'pae18', 'pae22',
    'pae39', 'pae40', 'pae25',
    'pae0', 'pae10', 'pae15',
    'pae23', 'pae24', 'pae46'
  ]);
  const [myCardList, setMyCardList] = React.useState([
    'pae6', 'pae19', 'pae20', 'pae36',
    'pae27', 'pae26', 'pae3', 'pae12',
    'pae11', 'pae21'
  ]);
  const classes = useStyles();

  const handleOnGameStart = () => {
    setGameStart(true);
    boardCardList.map((item, idx) => (
      // console.log(cardXyList[idx][0])
      drawImageBoard(item, cardXyList[idx][0], cardXyList[idx][1])
    ));
  }

  // 로그인 체크
  // CheckLogin(props);

  useEffect(() => {
    drawMiddleBoard();

    // 오광 출력
    // drawImageBoard("pae0", 5, 40);
    // drawImageBoard("pae8", 15, 40);
    // drawImageBoard("pae28", 25, 40);
    // drawImageBoard("pae40", 35, 40);
    // drawImageBoard("pae44", 45, 40);

    // 열끗 출력
    // drawImageBoard("pae4", 85, 10);
    // drawImageBoard("pae45", 95, 10);
    // drawImageBoard("pae36", 105, 10);

    // drawImageBoard("pae29", 140, 10);
    // drawImageBoard("pae24", 150, 10);
    // drawImageBoard("pae20", 160, 10);

    // drawImageBoard("pae16", 195, 10);
    // drawImageBoard("pae12", 205, 10);

    // 띠 출력
    // drawImageBoard("pae1", 85, 40);
    // drawImageBoard("pae5", 95, 40);
    // drawImageBoard("pae9", 105, 40);

    // drawImageBoard("pae21", 140, 40);
    // drawImageBoard("pae33", 150, 40);
    // drawImageBoard("pae37", 160, 40);

    // drawImageBoard("pae13", 195, 40);
    // drawImageBoard("pae17", 205, 40);
    // drawImageBoard("pae25", 215, 40);
    // drawImageBoard("pae46", 225, 40);

    // 피 출력
    // drawImageBoard("pae2", 265, 10);
    // drawImageBoard("pae3", 275, 10);
    // drawImageBoard("pae6", 285, 10);
    // drawImageBoard("pae7", 295, 10);
    // drawImageBoard("pae10", 305, 10);
    // drawImageBoard("pae11", 315, 10);
    // drawImageBoard("pae14", 325, 10);
    // drawImageBoard("pae15", 335, 10);
    // drawImageBoard("pae18", 345, 10);
    // drawImageBoard("pae19", 355, 10);
    // drawImageBoard("pae22", 365, 10);

    // drawImageBoard("pae23", 265, 40);
    // drawImageBoard("pae26", 275, 40);
    // drawImageBoard("pae27", 285, 40);
    // drawImageBoard("pae30", 295, 40);
    // drawImageBoard("pae31", 305, 40);
    // drawImageBoard("pae34", 315, 40);
    // drawImageBoard("pae35", 325, 40);
    // drawImageBoard("pae38", 335, 40);
    // drawImageBoard("pae39", 345, 40);
    // drawImageBoard("pae42", 355, 40);
    // drawImageBoard("pae43", 365, 40);

    // 쌍피 출력
    // drawImageBoard("pae47", 300, 20);
    // drawImageBoard("pae32", 310, 20);
    // drawImageBoard("pae41", 320, 20);
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
              <img id={"my-pae" + idx} src={"/images/" + item + ".png"} />
            ))
          }
          </div>
        :
          ""
      }
      {
        cardDataList.map((item, idx) => (
          <img id={"pae" + idx} src={"/images/" + item} />
        ))
      }
    </div>
  );
}

export default GameRoom;