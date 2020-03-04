const BALL_WIDTH = 10;
const BALL_HEIGHT = 10;
const BALL_VX = 2;
const BALL_VY = 0.1;

var ball = {

    x: GAME_CENTER_X,
    y: GAME_CENTER_Y,
    vX: BALL_VX,
    vY: BALL_VY,
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
            change_state(STATE_OVER);
        }

        if (this.x + this.vX <= 0) {
            this.vX = BALL_VX;
            change_state(STATE_OVER);
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
                this.vX *= -1;
                this.vY += p1.vY;
                p1.change_color(COLOR_HIT,50);
            }
        }

        if (this.y > p2.y && this.y < p2.y + PLAYER_HEIGHT) {
            if ((this.x + this.w) + this.vX > p2.x) {
                console.log('collision p2', this.y, p2.y);
                this.vX *= -1;
                this.vY += p2.vY;
                p2.change_color(COLOR_HIT,50);
            }
        }

        this.x += this.vX;
        this.y += this.vY;
    }
};