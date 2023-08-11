//canvas要素を取得
const canvas = document.getElementById('canvas');

//canvasに描画するコンテキストの取得
const ctx = canvas.getContext('2d');

//canvasサイズを設定
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//定期的に処理をさせる
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.weblitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {
    setTimeout(cb, 17);
  };


//表示数を増やす
const NUM = 50;
const particles = [];

class Particle {
  constructor(x, y, radius, directionX, directionY, index) {
    this.x = x;
    this.y = y;
    this. radius = radius;
    this.directionX =directionX;
    this.directionY = directionY;
    this.index = index;
  }

  render() {
    if(this.index % 3 === 0) {
      ctx.fillstyle = "#fff";
      ctx.fill();
    } else if(this.index === 1) {
      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 1;
      ctx.stroke()
    } else {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "#fff";
    }
    //円を書く
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);

  }
  //円を動かす
  update() {
    //円をリピート
    this.x += this.directionX;
    if(this.x > canvas.width + canvas.radius) {
      this.x = -this.radius;
    }
    this.render();
  }
}


init();
render();
function init() {
  for(
    let i = 0;
    i < NUM;
    i++
    ) {
    //particles
    const x = Math.random() * canvas.width;
    const y = Math.floor(Math.random() * canvas.height);
    const radius = Math.floor(Math.random() * 20);
    const directionX = Math.random() * 2;
    const directionY = Math.random() * 2 - 1;
    const particle = new Particle(x, y, radius, directionX, directionY, i);
    particles.push(particle);
    }
}

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(
      let i = 0;
      i < particles.length;
      i ++
    ){
      particles[i].update();
    }
    requestAnimationFrame(render);
  }