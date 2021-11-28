import React from 'react'
import './game_ground.css'
import OpponentHalf from './OpponentHalf'
import MyHalf from './MyHalf'
import { useState, useEffect } from 'react'
import ModalCard from './ModalCard'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import deckIcon from './deckicon.svg'
import info from './info.svg'
import refresh from './refresh-icon.svg'



const GameBoard = (props) => {
    const history=useHistory();
    let inst1="Your Turn: Select a Card";
    let inst2="Opponent's Turn, Tap ▶ →";
    let inst3="Calculating Result";
    const playerList=props.playerList;
    //get 8 random player in myPlayers array from playerList
    const [myPlayers, setMyPlayers] = useState(playerList.slice(0,4));
    //get 8 random player in opponentPlayers array from playerList
    const [opponentPlayers, setOpponentPlayers] = useState(playerList.slice(8,12));
    const [myCurrentPlayer, setMyCurrentPlayer] = useState(myPlayers[0]);
    const [opponentCurrentPlayer, setOpponentCurrentPlayer] = useState(opponentPlayers[0]);
    const [frontInfo, setFrontInfo] = useState('Tap to Select');
    const [opfrontInfo, setOpFrontInfo] = useState('Tap to Select');
    const [userSelectedData, setUserSelectedData] = useState({_id:-1});
    const[inGameInstructions, setInGameInstructions] = useState(inst1);
    const [isMyTurn, setIsMyturn] = useState(true);
    const [round, setRound] = useState(0);
    const [isSelecting, setIsSelecting] = useState(false);
    const [isBlur, setIsBlur] = useState(true);
    const [isClickable, setIsClickable] = useState(true);
    const [refreshCount, setRefreshCount] = useState(10);
    useEffect(()=>{
        console.log("my players: "+myPlayers.length);
        console.log("opp pla: "+opponentPlayers.length);
        if(myPlayers.length==0)
        {
            setShowModal(true);
        }
        if(opponentPlayers.length==0)
        {
            setShowModal(true);
        }
    },[myPlayers, opponentPlayers]);
    useEffect(() => {
        // setShowModal(true);
        getMyNewPlayer();
        getOpponentNewPlayer();
    }, [round]);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    function f1()
    {
        setMyPlayers([...myPlayers, opponentCurrentPlayer]);
        setOpponentPlayers(opponentPlayers.filter(player=>player._id!=opponentCurrentPlayer._id));
        setRound(round+1);
        setIsBlur(true);
        setShowModal1(false);
        setIsClickable(true);
    }
    function f2()
    {
        
        setInGameInstructions("Opponent's Turn, Tap ▶ →");
        setIsMyturn(false);
        setMyPlayers(myPlayers.filter(player=>player._id!=myCurrentPlayer._id));
        setOpponentPlayers([...opponentPlayers, myCurrentPlayer]);
        setRound(round+1);
        setIsBlur(true);
        setShowModal2(false);
        setIsClickable(true);
    }
    function f3()
    {
        setIsClickable(true);
        setIsMyturn(true);
        setInGameInstructions('Your Turn: Select a Card');
        setMyPlayers([...myPlayers, opponentCurrentPlayer]);
        setOpponentPlayers(opponentPlayers.filter(player=>player._id!=opponentCurrentPlayer._id));
        setRound(round+1);
        setIsBlur(true);
        setShowModal3(false);
    }
    function f4()
    {
        setIsClickable(true);
        setMyPlayers(myPlayers.filter(player=>player._id!=myCurrentPlayer._id));
        setOpponentPlayers([...opponentPlayers, myCurrentPlayer]);
        setRound(round+1);
        setIsBlur(true);
        setShowModal4(false);
    }
    function handleUserPlay(data)
    {
        setIsClickable(false);
        if(data._id==-1)
        {
            alert('Please select a card');
            return;
        }
        
        setFrontInfo(data['mode']+' '+data['stats']+" : "+myCurrentPlayer[data['mode']][data['stats']]);
        setOpFrontInfo(data['mode']+' '+data['stats']+" : "+opponentCurrentPlayer[data['mode']][data['stats']]);
        setIsSelecting(true);
       setTimeout(()=>{
        setIsSelecting(false);
        setIsBlur(false);
        if(myCurrentPlayer[data['mode']][data['stats']]>opponentCurrentPlayer[data['mode']][data['stats']])
        {
            setShowModal1(true);
        }
        else
        {
            // console.log(myCurrentPlayer[data['mode']][data['stats']], opponentCurrentPlayer[data['mode']][data['stats']]);
            setShowModal2(true);

            // handleCPUPlay();
        }
    },5000);

        
    }
    function handleCPUPlay()
    {
        setIsClickable(false);
        setIsSelecting(true);
      setTimeout(()=>{
          setIsSelecting(false);
          setIsBlur(false);
        let data=cpuPlayerStatSelector(opponentCurrentPlayer);

        setFrontInfo(data['mode']+' '+data['stats']+" : "+myCurrentPlayer[data['mode']][data['stats']]);
        setOpFrontInfo(data['mode']+' '+data['stats']+" : "+opponentCurrentPlayer[data['mode']][data['stats']]);
        if(myCurrentPlayer[data['mode']][data['stats']]>opponentCurrentPlayer[data['mode']][data['stats']])
        {
            setShowModal3(true);
        }
        else
        {
        
            setShowModal4(true);
            // handleCPUPlay(); doesn't work because this step assumes that setround in previous line updates round instantaneously and thus useeffect is called instantaneusly and then cpuPlay can be preformed which is not the case, setRound isn't instantaneous and so player's cards don't change. 
        }
    }, 3000);
    }
    function getMyNewPlayer()
    {
        console.log(myPlayers.length);
        if(myPlayers.length==0)
        {
            setShowModal(true);
            return;
        }
        setMyCurrentPlayer(myPlayers[Math.floor(Math.random()*myPlayers.length)]);
        setFrontInfo('Tap to Select');
    }
    function getOpponentNewPlayer()
    {
        console.log(opponentPlayers.length);
        if(opponentPlayers.length==0)
        {
            setShowModal(true);
            return;
        }
        setOpponentCurrentPlayer(opponentPlayers[Math.floor(Math.random()*opponentPlayers.length)]);
        setOpFrontInfo('Tap to Select');
    }
    // function formatPlayerData(player, data)
    // {
    //     console.log(data);
    //     return data['mode']+' '+data['stats']+" : "+player[data['mode']][data['stats']];
    // }
    function close1()
    {
        setShowModal1(false);
        f1();
    }
    function close2()
    {
        setShowModal2(false);
        f2();
    }
    function close3()
    {
        setShowModal3(false);
        f3();
    }
    function close4()
    {
        setShowModal4(false);
        f4();
    }
    const [showModal, setShowModal] = useState(false);
    //game-over logic using useEffect
   
    function handleGameOver()
    {
        history.push('/');
    }
    function handleRefreshPlayer()
    {
        const refIcon=document.getElementById('ref-icon');
        refIcon.classList.add('rotate360');
        setTimeout(()=>{
            refIcon.classList.remove('rotate360');
        },1000);
        getMyNewPlayer();
        setRefreshCount(refreshCount-1);

    }

    return (
        <div className="game-board" style={{backgroundColor:"transparent"}}>
            <div className="full-game-help card-button ripple-info"><img src={info}></img><div style={{color:"white", fontSize:"0.7rem", marginTop:"-7px"}}>How to Play ?</div></div>
            <OpponentHalf frontInfo={opfrontInfo} isSelecting={isSelecting}  player={opponentCurrentPlayer} isBlur={isBlur} onSelected={()=>{}}/>
            <Modal open={showModal1} onClose={f1} ><div class="centre-align" style={{zIndex:"6"}}><ModalCard won={true} close={close1} myPlayerName={myCurrentPlayer.name} myPlayerStat={frontInfo} opponentPlayerName={opponentCurrentPlayer.name} opponentPlayerStat={opfrontInfo}/></div></Modal>
            <Modal open={showModal2} onClose={f2} ><div class="centre-align" style={{zIndex:"6"}}><ModalCard won={false} close={close2} myPlayerName={myCurrentPlayer.name} myPlayerStat={frontInfo} opponentPlayerName={opponentCurrentPlayer.name} opponentPlayerStat={opfrontInfo}/></div></Modal>
            <Modal open={showModal3} onClose={f3} ><div class="centre-align" style={{zIndex:"6"}}><ModalCard won={true} close={close3} myPlayerName={myCurrentPlayer.name} myPlayerStat={frontInfo} opponentPlayerName={opponentCurrentPlayer.name} opponentPlayerStat={opfrontInfo}/></div></Modal>
            <Modal open={showModal4} onClose={f4} ><div class="centre-align" style={{zIndex:"6"}}><ModalCard won={false} close={close4} myPlayerName={myCurrentPlayer.name} myPlayerStat={frontInfo} opponentPlayerName={opponentCurrentPlayer.name} opponentPlayerStat={opfrontInfo}/></div></Modal>
            <Modal open={showModal} onClose={handleGameOver} ><div class="centre-align glass" style={{zIndex:"6"}}>{myPlayers.length==0?"You Lost":"You Won"}</div></Modal>
            
            <MyHalf  player={myCurrentPlayer} isMyTurn={isMyTurn&&isClickable} frontInfo={frontInfo} handleSelectedStat={(data)=>{setUserSelectedData(data)}} onSelected={()=>{handleUserPlay(userSelectedData)}}/>
            <div className="opp-score"><img src={deckIcon}></img>{opponentPlayers.length}</div>
            <div className="my-score  card-button ripple" style={{pointerEvents:(isClickable?"auto":"none")}} onClick={refreshCount>0?handleRefreshPlayer:alert("This is your last refresh, You wont be able to refresh in the current game")} ><img src={deckIcon}></img>{myPlayers.length}</div>
           <div className="refresh-left"><img id="ref-icon" src={refresh}/><div style={{color:"white"}}>{refreshCount}</div></div>
           <Button className={(!isMyTurn?"bright-animate":"")} style={{position:"absolute", top: "50%" ,transform: "translateY(-50%)", right: "5px", zIndex:"3", borderRadius:"100%", backgroundColor:"black"}}><div className={"timer-circle "} onClick={()=>{if(!isMyTurn) handleCPUPlay()}}> ▶ </div></Button>
           <div className={"in-game-instruction "+(isMyTurn?"my-instruction":"")}>{isSelecting?"Opponent Selecting Card...":inGameInstructions}</div>
        </div>
    )
}

export default GameBoard




function cpuPlayerStatSelector(player)
{
    let arrBat=[];
    let arrBall=[];
    for(let stats in player['batting'])
    {
        arrBat.push(stats);
    }
    for(let stats in player['bowling'])
    {
        arrBall.push(stats);
    }
    let randomBat=arrBat[Math.floor(Math.random()*arrBat.length)];
    let randomBall=arrBall[Math.floor(Math.random()*arrBall.length)];
    let val=Math.random();
    if(val>=0.5)
    return {mode:'bowling', stats:randomBall};
    return {mode:'batting', stats:randomBat};
}
