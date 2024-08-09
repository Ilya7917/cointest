<template>
    <div id="stage" class="perspective-on">
      <div id="rotate">
        <div id="ring1" class="ring"></div>
        <div id="ring2" class="ring"></div>
        <div id="ring3" class="ring"></div>
        <div id="ring4" class="ring"></div>
        <div id="ring5" class="ring"></div>
      </div>
      <div>
        <button @click="startSpinning" class="go">Start spinning</button>
      </div>
    </div>
  </template>
  
<script>
  const SLOTS_PER_REEL = 12;
  const REEL_RADIUS = 150 / 1.5; // уменьшаем радиус в 1.5 раза
  
  export default {
    data() {
      return {
        xray: false,
        perspective: true,
        symbols: ['🍒', '🍔', '🍕', '🍌', '🥑', '🍍', '🍉', '🍇', '🍓', '🍑', '🍈', '🍋'],
        currentAngles: [0, 0, 0, 0, 0], // храним текущие углы для каждого барабана
        visibleSlots: [], // храним видимые слоты
        lastWinningPattern: null, // сохраняем последний выигрышный шаблон для исключения повторений
      };
    },
    mounted() {
      this.createSlots(document.getElementById('ring1'), 1);
      this.createSlots(document.getElementById('ring2'), 2);
      this.createSlots(document.getElementById('ring3'), 3);
      this.createSlots(document.getElementById('ring4'), 4);
      this.createSlots(document.getElementById('ring5'), 5);
    },
    methods: {
      createSlots(ring, ringIndex) {
        const slotAngle = 360 / SLOTS_PER_REEL;
        const seed = this.getSeed();
  
        for (let i = 0; i < SLOTS_PER_REEL; i++) {
          const slot = document.createElement('div');
          slot.className = 'slot';
          slot.id = `ring${ringIndex}-slot-${i}`;
          const transform = `rotateX(${slotAngle * i}deg) translateZ(${REEL_RADIUS}px)`;
          slot.style.transform = transform;
          slot.innerHTML = `<p>${this.symbols[(seed + i) % SLOTS_PER_REEL]}</p>`;
          ring.appendChild(slot);
        }
      },

      getRandom() {
        return Math.floor(Math.random() * 8) + 1;
      },
      getSeed(idx) {
        // Генерируем случайное число для перемешивания слотов
        return Math.floor(Math.random() * this.getRandom());
      },
      startSpinning() {
        this.clearHighlight(); // очищаем подсветку перед началом прокрутки
        this.resetAnimation(); // сбрасываем анимации
        this.currentAngles = [0, 0, 0, 0, 0]; // сбрасываем углы
        this.visibleSlots = []; // сбрасываем видимые слоты
        const timer = 2;
        for (let i = 1; i <= 5; i++) {
          const seed = this.getSeed(i);
          console.log(seed);
          const angle = -360 * 3 + seed * (360 / SLOTS_PER_REEL); // полный оборот плюс поворот на seed
          this.currentAngles[i - 1] = angle; // сохраняем текущий угол
          const ring = document.getElementById('ring' + i);
          ring.style.transition = `transform ${timer + i * 0.5}s ease-out`;
          ring.style.transform = `rotateX(${angle}deg)`;
        }
        setTimeout(() => {
          this.highlightVisibleSlots();
          this.ensureWinningCombination();
        }, (timer + 5 * 0.5) * 1000); // время завершения прокрутки последнего барабана
      },
      resetAnimation() {
        for (let i = 1; i <= 5; i++) {
          const ring = document.getElementById('ring' + i);
          ring.style.transition = 'none';
          ring.style.transform = `rotateX(0deg)`;
          ring.offsetHeight; // триггер перерисовки
          ring.style.transition = '';
        }
      },
      clearHighlight() {
        document.querySelectorAll('.slot').forEach(slot => {
          slot.style.backgroundColor = '#fff'; // очищаем подсветку
        });
      },
      highlightVisibleSlots() {
        const slotAngle = 360 / SLOTS_PER_REEL;
        for (let i = 1; i <= 5; i++) {
          const angle = this.currentAngles[i - 1];
          const index = Math.round(-angle / slotAngle) % SLOTS_PER_REEL;
          const visibleIndices = [
            (index + SLOTS_PER_REEL) % SLOTS_PER_REEL,
            (index + 1 + SLOTS_PER_REEL) % SLOTS_PER_REEL,
            (index - 1 + SLOTS_PER_REEL) % SLOTS_PER_REEL
          ];
          visibleIndices.forEach(idx => {
            const slot = document.getElementById(`ring${i}-slot-${idx}`);
            if (slot) {
              slot.style.backgroundColor = 'green'; // подсвечиваем видимые элементы
              this.visibleSlots.push({ id: slot.id, symbol: slot.textContent.trim(), ring: i, position: idx });
            }
          });
        }
      },
      ensureWinningCombination() {
        console.log(this.visibleSlots)
        const patterns = [
          // Горизонтальные
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14],
          // Вертикальные
          [0, 5, 10],
          [1, 6, 11],
          [2, 7, 12],
          [3, 8, 13],
          [4, 9, 14],
          // Диагонали
          [0, 6, 12],
          [4, 8, 12]
        ];
  
        // Выбираем случайный выигрышный шаблон
        let selectedPattern;
        do {
          selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
        } while (selectedPattern === this.lastWinningPattern);
  
        this.lastWinningPattern = selectedPattern;
        const winningSlots = selectedPattern.map(index => this.visibleSlots[index]).filter(slot => slot);
  
        // Если все элементы присутствуют, выделяем их
        if (winningSlots.length === selectedPattern.length) {
          const winningSymbol = winningSlots[0].symbol;
          selectedPattern.forEach(index => {
            if (this.visibleSlots[index]) {
              const element = document.getElementById(this.visibleSlots[index].id);
              if (element) {
                element.style.backgroundColor = 'yellow'; // выделяем победные элементы
              }
            }
          });
        } else {
          console.error('Not all winning slots are visible, skipping winning combination');
        }
      }
    }
  };
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
  }
  
  #stage {
    margin: 0 auto;
    width: 400px; /* уменьшаем ширину в 1.5 раза */
    padding: 0 0 27px; /* уменьшаем padding в 1.5 раза */
  }
  
  .perspective-on {
    perspective: 666px; /* уменьшаем перспективу в 1.5 раза */
  }
  .perspective-off {
    perspective: 0;
  }
  
  #rotate {
    margin: 0 auto 0;
    width: 300px; /* уменьшаем ширину в 1.5 раза */
    height: 147px; /* уменьшаем высоту в 1.5 раза */
    padding-top: 133px; /* уменьшаем отступ сверху в 1.5 раза */
    transform-style: preserve-3d;
    position: relative; /* добавляем позиционирование для родителя */
  }
  
  .ring {
    margin: 0 auto;
    height: 53px; /* уменьшаем высоту в 1.5 раза */
    width: 60px; /* уменьшаем ширину в 1.5 раза */
    float: left;
    transform-style: preserve-3d;
    position: relative;
  }
  .slot {
    position: absolute;
    width: 60px; /* уменьшаем ширину в 1.5 раза */
    height: 53px; /* уменьшаем высоту в 1.5 раза */
    box-sizing: border-box;
    opacity: 0.9;
    color: rgba(0,0,0,0.9);
    background: #fff;
    border: solid 2px #000;
    backface-visibility: hidden;
    transition: background-color 0.5s;
  }
  
  .slot.highlight {
    background-color: green; /* выделение видимых элементов */
  }
  
  .backface-on {
    backface-visibility: visible;
  }
  
  .slot p {
    font-size: 24px; /* уменьшаем размер текста в 1.5 раза */
    font-weight: bold;
    line-height: 53px; /* уменьшаем высоту строки в 1.5 раза */
    margin: 0;
    text-align: center;
  }
  
  .go {
  }
  label {
    cursor: pointer;
    display: inline-block;
    width: 45%;
    text-align: center;
  }
  .tilted {
    transform: rotateY(45deg);
  }
  
  .spin-0     { transform: rotateX(-3719deg); }
  .spin-1     { transform: rotateX(-3749deg); }
  .spin-2     { transform: rotateX(-3779deg); }
  .spin-3     { transform: rotateX(-3809deg); }
  .spin-4     { transform: rotateX(-3839deg); }
  .spin-5     { transform: rotateX(-3869deg); }
  .spin-6     { transform: rotateX(-3899deg); }
  .spin-7     { transform: rotateX(-3929deg); }
  .spin-8     { transform: rotateX(-3959deg); }
  .spin-9     { transform: rotateX(-3989deg); }
  .spin-10    { transform: rotateX(-4019deg); }
  .spin-11    { transform: rotateX(-4049deg); }
  
  @keyframes back-spin {
    100%  { transform: rotateX(30deg); }
  }
  @keyframes tiltin {
    0%    { transform: rotateY(0deg);}
    50%   { transform: rotateY(0deg);}
    100%  { transform: rotateY(45deg);}
  }
  @keyframes tiltout {
    0%    { transform: rotateY(45deg);}
    100%  { transform: rotateY(0deg);}
  }
  
  @keyframes spin-0 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3719deg); }
  }
  @keyframes spin-1 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3749deg); }
  }
  @keyframes spin-2 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3779deg); }
  }
  @keyframes spin-3 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3809deg); }
  }
  @keyframes spin-4 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3839deg); }
  }
  @keyframes spin-5 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3869deg); }
  }
  @keyframes spin-6 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3899deg); }
  }
  @keyframes spin-7 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3929deg); }
  }
  @keyframes spin-8 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3959deg); }
  }
  @keyframes spin-9 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-3989deg); }
  }
  @keyframes spin-10 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-4019deg); }
  }
  @keyframes spin-11 {
    0%    { transform: rotateX(30deg); }
    100%  { transform: rotateX(-4049deg); }
  }
  </style>
  