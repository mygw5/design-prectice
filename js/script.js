//背景色をアニメーション化（3秒で切り替え）
document.querySelector('.back').animate(
  [
    { backgroundColor: 'orange', color: 'gray' },
    { backgroundColor: 'pink', color: 'black'   }
  ],
  {
    duration: 3000,
    iterations: Infinity,
    direction: 'alternate'
  }
);

