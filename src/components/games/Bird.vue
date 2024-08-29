<template>
    <canvas ref="board" :width="boardWidth" :height="boardHeight">
    </canvas>
</template>
  
<script lang="ts" setup>
  import { ref, reactive, onMounted, watch } from 'vue';

  import flappyBird from '@/assets/images/flappybird/Flappy1.png';
  import topPipe from '@/assets/images/flappybird/trash.png';
  import bottomPipe from '@/assets/images/flappybird/trashReverse.png';

  const props = defineProps({
    changeOpenGame: {
        type: Function,
        required: true,
      }
  });

  const boardWidth = window.innerWidth;
  const boardHeight = window.innerHeight;
  
  const birdWidth = 74; // width/height ratio = 17/12
  const birdHeight = 44;
  const birdX = boardWidth / 8;
  const birdY = boardHeight / 2;
  
  const pipeWidth = 64; // width/height ratio = 1/8
  const pipeHeight = 512;
  const pipeX = boardWidth;
  const pipeY = 0;
  
  const gravity = 0.4;
  const pipeInterval = 1500; // milliseconds
  
  const board = ref<HTMLCanvasElement | null>(null);
  let context: CanvasRenderingContext2D | null = null;
  
  const birdImg = new Image();
  birdImg.src = flappyBird; // Update the path accordingly
  
  const topPipeImg = new Image();
  topPipeImg.src = topPipe; // Update the path accordingly
  
  const bottomPipeImg = new Image();
  bottomPipeImg.src = bottomPipe; // Update the path accordingly
  
  const gameState = reactive({
    bird: {
      x: birdX,
      y: birdY,
      width: birdWidth,
      height: birdHeight,
    },
    pipes: [] as Pipe[],
    velocityX: -2,
    velocityY: 0,
    gameOver: false,
    score: 0,
  });
  
  interface Pipe {
    img: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    passed: boolean;
  }
  
  let animationFrameId: number;
  let pipeSpawnInterval: number;
  
  onMounted(() => {
    if (board.value) {
      context = board.value.getContext('2d');
      initializeGame();

      board.value.addEventListener('click', function(event) {
        if(board.value == null) return;
        const textX = boardWidth - 50;
        const textY = 45;
        const textWidth = 30; // ширина области текста, можно настроить
        const textHeight = 30; // высота области текста, можно настроить
        const rect = board.value.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (mouseX >= textX && mouseX <= textX + textWidth &&
            mouseY >= textY - textHeight && mouseY <= textY) {
            props.changeOpenGame?.(false)
        }
    });
    }
  });
  
  function initializeGame() {
    document.addEventListener('click', moveBird);
    pipeSpawnInterval = window.setInterval(placePipes, pipeInterval);
    requestAnimationFrame(update);
  }
  
  function update() {
    if (!context) return;
  
    animationFrameId = requestAnimationFrame(update);
  
    if (gameState.gameOver) return;
  
    // Clear canvas
    context.clearRect(0, 0, boardWidth, boardHeight);
  
    // Update bird
    gameState.velocityY += gravity;
    gameState.bird.y = Math.max(gameState.bird.y + gameState.velocityY, 0);
  
    // Draw bird
    context.drawImage(
      birdImg,
      gameState.bird.x,
      gameState.bird.y,
      gameState.bird.width,
      gameState.bird.height
    );
  
    if (gameState.bird.y + gameState.bird.height >= boardHeight) {
      gameState.gameOver = true;
    }
  
    // Update and draw pipes
    gameState.pipes.forEach((pipe) => {
      pipe.x += gameState.velocityX;
      context?.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
  
      // Update score
      if (!pipe.passed && gameState.bird.x > pipe.x + pipe.width) {
        gameState.score += 0.5;
        pipe.passed = true;
      }
  
      // Check collision
      if (detectCollision(gameState.bird, pipe)) {
        gameState.gameOver = true;
      }
    });
  
    // Remove off-screen pipes
    gameState.pipes = gameState.pipes.filter((pipe) => pipe.x + pipe.width > 0);
  
    // Draw score
    context.fillStyle = 'white';
    context.font = '45px sans-serif';
    context.fillText(`${Math.floor(gameState.score)}`, 5, 45);

    context.fillText('❌', boardWidth - 60, 45)
  
    // Draw game over text
    if (gameState.gameOver) {
      context.fillText('GAME OVER', 50, boardHeight / 2);
      cancelAnimationFrame(animationFrameId);
      clearInterval(pipeSpawnInterval);
    }
  }
  
  function placePipes() {
    if (gameState.gameOver) return;
  
    const randomPipeY =
      pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    const openingSpace = boardHeight / 4;
  
    const topPipe: Pipe = {
      img: topPipeImg,
      x: pipeX,
      y: randomPipeY,
      width: pipeWidth,
      height: pipeHeight,
      passed: false,
    };
  
    const bottomPipe: Pipe = {
      img: bottomPipeImg,
      x: pipeX,
      y: randomPipeY + pipeHeight + openingSpace,
      width: pipeWidth,
      height: pipeHeight,
      passed: false,
    };
  
    gameState.pipes.push(topPipe, bottomPipe);
  }
  
  function moveBird(e: MouseEvent) {
    gameState.velocityY = -6;
    if (gameState.gameOver) {
        resetGame();
    }
  }
  
  function resetGame() {
    gameState.bird.y = birdY;
    gameState.pipes = [];
    gameState.score = 0;
    gameState.velocityY = 0;
    gameState.gameOver = false;
    animationFrameId = requestAnimationFrame(update);
    pipeSpawnInterval = window.setInterval(placePipes, pipeInterval);
  }
  
  function detectCollision(a: typeof gameState.bird, b: Pipe): boolean {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
  </script>
  
  <style scoped>
  canvas {
    display: block;
    margin: 0 auto;
    background-color: #4ec0ca;
  }
  </style>