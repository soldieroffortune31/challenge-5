class game{
  constructor(playerChoice, computerChoice){
    this.playerChoice = playerChoice;
    this.computerChoice = computerChoice;
    this.resultGame = ""
  }

  start(){
   this.selected()
   this.compare();
  }


  selected(){
    const select = document.getElementById(this.playerChoice)
    select.classList.add('selected-item')
    console.log(this.playerChoice, ' ==> Pilihan Player')
      
    const domSelectedComputer = document.getElementById(this.computerChoice)
    domSelectedComputer.classList.add('bg-item')
    console.log(this.computerChoice, ' ==> Pilihan Computer');
  }

  compare(){
    if(this.playerChoice === 'player-batu' && this.computerChoice === 'batu'){
      this.draw();
    }else if(this.playerChoice === 'player-batu' && this.computerChoice === 'kertas'){
      this.showComputerWin();
    }else if(this.playerChoice === 'player-batu' && this.computerChoice === 'gunting'){
      this.showPlayerWin();
    }else if(this.playerChoice === 'player-kertas' && this.computerChoice === 'batu'){
      this.showPlayerWin();
    }else if(this.playerChoice === 'player-kertas' && this.computerChoice === 'kertas'){
      this.draw()
    }else if(this.playerChoice === 'player-kertas' && this.computerChoice === 'gunting'){
      this.showComputerWin();
    }else if(this.playerChoice === 'player-gunting' && this.computerChoice === 'batu'){
      this.showComputerWin();
    }else if(this.playerChoice === 'player-gunting' && this.computerChoice === 'kertas'){
      this.showPlayerWin();
    }else{
      this.draw()
    }
  }


  showPlayerWin(){
    const result = document.getElementById('hasil')
    result.innerHTML = "Player 1 Win"
    result.classList.add('bg-result')
    result.style.fontSize = "3em";
    result.classList.remove('bg-draw')
    result.style.transform = 'rotate(-28.87deg)';
    result.style.color = 'white'
    result.style.fontWeight = 'normal'
    this.resultGame = 'Player Win'
    console.log('Result = '+this.resultGame);
  }
  showComputerWin(){
    const result= document.getElementById('hasil')
    result.innerHTML = "Computer Win"
    result.classList.add('bg-result')
    result.style.fontSize = "3em";
    result.classList.remove('bg-draw')
    result.style.transform = 'rotate(-28.87deg)';
    result.style.color = 'white'
    result.style.fontWeight = 'normal'
    this.resultGame = 'Computer Win'
    console.log('Result = '+this.resultGame);
  }
  draw(){
    const result = document.getElementById('hasil')
    result.innerHTML = "Draw"
    result.classList.add('bg-draw')
    result.style.fontSize = "2em";
    result.style.transform = 'rotate(-28.87deg)';
    result.style.color = 'white'
    result.style.fontWeight = 'normal'
    this.resultGame = 'Draw'
    console.log('Result = '+this.resultGame);
  }		
}


class Play{
  constructor(){

  }
  playGame(){
    const userChoice = document.querySelectorAll('.player');
    userChoice.forEach((item) => {
      item.addEventListener('click', function(){
        // console.log(item.id)

        const p1 = new Human();
        const c1 = new Computer();
        const pilihanComputer = c1.getChoice()
        const pilihanHuman = p1.getChoice(item.id)
        const game1 = new game(pilihanHuman, pilihanComputer);
        game1.start();
        
      })

      item.addEventListener('mouseover',function(){
        const selectedByUser = item.id;
        const domUser = document.getElementById(selectedByUser)
        domUser.classList.add('bg-item')
      })

      item.addEventListener('mouseout',function(){
        const hoverPlayer = item.id;
        const domHover = document.getElementById(hoverPlayer)
        domHover.classList.remove('bg-item')
        
      })
    })
    this.refresh();
  }

  refresh(){
    const refresh = document.getElementById('refresh')
    refresh.addEventListener('mouseover', function(){
      refresh.classList.add('bg-item')
    })
    refresh.addEventListener('mouseout', function(){
      refresh.classList.remove('bg-item')
    })
    refresh.addEventListener('click', function(){
      location.reload(); 
    })
  }
}

const a1 = new Play();
a1.playGame()




class Player{
  constructor(choice){
    this.choice = choice
  }

  getChoice(choice){
    this.choice = choice
  }
}

class Human extends Player{
  constructor(){
    super()
  }

  getChoice(choice){
    this.choice = choice
    return this.choice;
  } 
} 


class Computer extends Player{
  constructor(){
    super();
  }

  getChoice(){
    let getRandom = Math.floor(Math.random() * 3)
    switch(getRandom){
      case 0 :
        this.choice = 'batu';
        break;
      case 1 :
        this.choice = 'kertas';
        break;
      default :
        this.choice = 'gunting';
        break;
    }
    return this.choice;
  }
}
