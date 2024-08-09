import { defineStore } from 'pinia';

interface Symbol {
  id: string;
  icon: string;
}

interface Position {
  reel: number;
  row: number;
}

export const useSlotMachineStore = defineStore('slotMachine', {
  state: () => ({
    reels: [] as Symbol[][],
    winLines: [] as Position[][],
    isSpinning: false,
    isAutoSpinOn: false,
    showPayLines: false,
    credits: 100,
    bet: 1,
  }),
  actions: {
    spin() {
      // Логика вращения
    },
    toggleAutoSpin() {
      this.isAutoSpinOn = !this.isAutoSpinOn;
    },
    togglePayLines() {
      this.showPayLines = !this.showPayLines;
    },
  },
});