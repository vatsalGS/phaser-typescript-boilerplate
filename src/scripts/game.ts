/// <reference path="../refs.d.ts" />
/// <reference path="state/game.ts" />
/// <reference path="state/preloader.ts" />
module GameApp {
    export class Game extends Phaser.Game {

        constructor() {
            super({
                width: window.innerWidth,
                height: window.innerHeight,
                renderer: Phaser.AUTO,
                forceSetTimeOut: false
            });

            this.state.add('preloader', State.Preloader, true);
            this.state.add('game', State.Game);
        }
    }
}

// export Game to window
var Game = GameApp.Game;

