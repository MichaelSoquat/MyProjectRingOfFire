import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCard = false;
  currentCard = '';
  game: Game;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }
  showCard() {
    if (!this.pickCard) {
      this.currentCard = this.game.stack.pop();
      
      this.pickCard = true;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCard = false;
      }, 2000)
    }

  }
}
