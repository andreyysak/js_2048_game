const t=new class{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.cells=t,this.restart()}slideAndMerge(t){let e=t.filter(t=>0!==t),s=[];for(let t=0;t<e.length;t++)e[t]===e[t+1]?(s.push(2*e[t]),this.score+=2*e[t],t++):s.push(e[t]);for(;s.length<4;)s.push(0);return s}move(t){if("playing"!==this.status)return;let e=t=>t[0].map((e,s)=>t.map(t=>t[s])),s=!1;("up"===t||"down"===t)&&(this.board=e(this.board));for(let e=0;e<4;e++){let r="right"===t||"down"===t?[...this.board[e]].reverse():[...this.board[e]],a=this.slideAndMerge(r);("right"===t||"down"===t)&&a.reverse(),this.board[e].toString()!==a.toString()&&(this.board[e]=a,s=!0)}("up"===t||"down"===t)&&(this.board=e(this.board)),s&&this.addRandomTile(),this.checkGameOver()}moveLeft(){this.move("left")}moveRight(){this.move("right")}moveUp(){this.move("up")}moveDown(){this.move("down")}checkGameOver(){this.board.some(t=>t.includes(2048))?this.status="win":this.canMove()||(this.status="lose")}canMove(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(0===this.board[t][e]||e<3&&this.board[t][e]===this.board[t][e+1]||t<3&&this.board[t][e]===this.board[t+1][e])return!0;return!1}addRandomTile(){let t=[];if(this.board.forEach((e,s)=>{e.forEach((e,r)=>{0===e&&t.push({rowIndex:s,colIndex:r})})}),t.length>0){let e=Math.floor(Math.random()*t.length),{rowIndex:s,colIndex:r}=t[e];this.board[s][r]=.9>Math.random()?2:4}}restart(){this.board=this.cells.map(t=>[...t]),this.score=0,this.status="idle"}start(){this.status="playing",this.addRandomTile(),this.addRandomTile()}getScore(){return this.score}getState(){return this.board.map(t=>[...t])}getStatus(){return this.status}},e=document.querySelector(".game-score"),s=document.querySelector(".button-start"),r=document.querySelector(".message-start"),a=document.querySelector(".message-win"),o=document.querySelector(".message-lose");function i(){t.getState().forEach((t,e)=>{t.forEach((t,s)=>{let r=document.querySelector(`[data-position="${e}-${s}"]`);r&&(r.textContent=0!==t?t:"",r.className="field-cell",0!==t&&r.classList.add(`field-cell--${t}`))})})}function d(){e.textContent=t.getScore()}function n(){let e=t.getStatus();switch(r.classList.add("hidden"),a.classList.add("hidden"),o.classList.add("hidden"),e){case"win":a.classList.remove("hidden");break;case"lose":o.classList.remove("hidden");break;case"idle":r.classList.remove("hidden")}}s.addEventListener("click",()=>{s.classList.contains("start")?(t.start(),i(),n(),s.classList.remove("start"),s.classList.add("restart"),s.textContent="Restart"):(t.restart(),i(),d(),n(),s.classList.remove("restart"),s.classList.add("start"),s.textContent="Start")}),window.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":t.moveLeft();break;case"ArrowRight":t.moveRight();break;case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown();break;default:return}i(),d(),n()});
//# sourceMappingURL=index.d4b6e5be.js.map