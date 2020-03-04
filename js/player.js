const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 100;
const PLAYER_VELOCITY = 5;
const PLAYER_COLOR_DEFAULT = '#000';



function player (x,y) {
    this.x = x;
    this.y = y;
    this.vY = 0;
    this.color = PLAYER_COLOR_DEFAULT;
    this.w = PLAYER_WIDTH;
    this.h = PLAYER_HEIGHT;
    this.keydown = false;

    this.update = function() {
        if (!this.keydown) {
            this.vY -= PLAYER_VELOCITY;
            if (this.vY < 0) {
                this.vY = 0;
            }

        }
        if (this.y + this.vY < 0 || (this.y + PLAYER_HEIGHT) + this.vY > GAME_HEIGHT) {
            this.vY = 0;
        }
        this.y += this.vY;
    };

    this.draw = function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);


    };

    this.change_color = function (color, resetIn) {
        this.color = color;
        if (resetIn) {
            console.log('setting reset');
            setTimeout(this.reset_color.bind(this), resetIn);
        }
    };

    this.reset_color =  function () {
        console.log('reset_color', this);
        this.color = PLAYER_COLOR_DEFAULT;
    }
}

var p1 = new player(0,GAME_CENTER_Y - (PLAYER_HEIGHT/2));
var p2 = new player(GAME_WIDTH-PLAYER_WIDTH, GAME_CENTER_Y);