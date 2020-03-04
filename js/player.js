const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 100;
const PLAYER_VELOCITY = 2;
const PLAYER_COLOR_DEFAULT = '#000';

var p1 = {

    x: 0,
    y: 0,
    vY: 0,
    w: PLAYER_WIDTH,
    h: PLAYER_HEIGHT,
    color: PLAYER_COLOR_DEFAULT,

    update: function () {
        if (IS_KEY_DOWN == false) {
            this.vY -= PLAYER_VELOCITY;
            if (this.vY < 0) {
                this.vY = 0;
            }

        }

        this.y += this.vY;
    },

    draw: function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
    },

    change_color: function (color, resetIn) {
        this.color = color;
        if (resetIn) {
            console.log('setting reset');
            setTimeout(this.reset_color, resetIn);
        }
    },

    reset_color: function () {
        console.log('reset_color', this);
        p1.color = PLAYER_COLOR_DEFAULT;
    }
};
