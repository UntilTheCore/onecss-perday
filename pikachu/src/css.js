const string = `
/* 开始画皮卡丘 */
/* 先画出它的鼻子 */
.nose {
    transform: translate(-50%,-50%);
    border: 10px solid;
    border-color: black transparent transparent transparent;
    border-radius: 11px;
    z-index: 5;
}

/* 然后把眼睛画出来 */
.eyes {
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2E2E2E;
    transition: all .5s;
    z-index: 2;
}

/* 把左眼放到左边 */
.leftEye {
    transform: translate(-250%,-85%);
}


/* 把右眼放到右边 */
.rightEye {
    transform: translate(150%,-85%);
}


/* 开始画皮卡丘的嘴巴 */
.mouthBox {
    transform: translate(-50%, -50%);
    width: 200px;
    height: 250px;
    overflow: hidden;
    background-color: #FEE433;
}

.mouthBox > div {
    position: absolute;
    top: 50%;
    left: 50%;
}

.whiskers {
    width: 80px;
    height: 35px;
    border: 2px solid black;
    border-top: 0;
    z-index: 2;
    background-color: #FEE433;
}

.leftWhiskers {
    transform: translate(-102%,40%) rotate(-25deg);
    border-radius: 0% 0% 0% 90%;
    border-right: 0;
}

.rightWhiskers {
    transform: translate(2%,40%) rotate(25deg);
    border-radius: 0% 0% 90% 0%;
    border-left: 0;
}

.mask {
    transform: translate(-50%,-85%);
    width: 200px;
    height: 200px;
    background-color: #FEE433;
    z-index: 3;
}

.mouthBox .mouth {
    top: auto;
    left: 0;
    bottom: 0;
    transform: translateX(50%);
    width: 100px;
    height: 300px;
    border-radius: 50%;
    background-color: #990513;
    overflow: hidden;
}

.mouth::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: #fc4a62;
    border-radius: 50%;
}



/* 开始画皮卡丘的脸颊 */
.cheek {
    transform:translate(-50%,-50%);
    width: 65px;
    height: 65px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: #FC0D1C;
    transition: all .5s;
}

.leftCheek {
    transform: translate(-280%,50%);
}

.rightCheek {
    transform: translate(180%,50%);
}


.rightCheek:hover {
    transform: translate(180%,50%) scale(1.2);
}
.leftCheek:hover {
    transform: translate(-280%,50%) scale(1.2);
}

/* 最后让皮卡丘更有神一点(画丘点睛) */
.leftEye:before {
    position: absolute;
    top: 5px;
    left: 10px;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
}

.rightEye::before {
    position: absolute;
    top: 5px;
    left: 10px;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
}
/* 完成，一只可爱的皮卡丘送给你! */
`

export default string