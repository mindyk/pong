const BALL_WIDTH = 10;
const BALL_HEIGHT = 10;
const BALL_VX = 5;
const BALL_VY = 0.1;

var ball = {

    x: 0,
    y: 0,
    vX: BALL_VX,
    vY: 0.1,
    h: BALL_HEIGHT,
    w: BALL_WIDTH,

    draw: function () {
        context.fillStyle = COLOR_DEFAULT;
        context.fillRect(this.x, this.y, this.w, this.h);
    },

    init: function () {
        console.log(this.x);
    },

    update: function () {
        if ((this.x + this.w) + this.vX > GAME_WIDTH) {
            this.vX = BALL_VX * -1;
            console.log('collision right border');
        }
        if (this.x + this.vX <= 0) {
            this.vX = BALL_VX;
        }

        if (this.y + this.vY <= 0) {
            console.log('collision top border');
            this.vY *= -1;
        }

        if ((this.y + this.h) + this.vY > GAME_HEIGHT) {
            console.log('collision bottom');
            this.vY *= -1;
        }

        if (this.y > p1.y && this.y < p1.y + PLAYER_HEIGHT) {
            if (this.x + this.vX < PLAYER_WIDTH) {
                console.log('collision p1', this.y, p1.y);
                this.vX = BALL_VX;
                this.vY += p1.vY;
                p1.change_color(COLOR_HIT,50);
            }
        }

        this.x += this.vX;
        this.y += this.vY;
    }
};