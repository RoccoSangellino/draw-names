import JSConfetti from 'js-confetti';

declare global {
  interface Window {
    jsConfetti: JSConfetti;
  }
}
