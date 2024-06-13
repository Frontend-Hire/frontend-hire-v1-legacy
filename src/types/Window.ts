declare global {
  interface Window {
    Razorpay: any;
  }
}

window.Razorpay = window.Razorpay || {};

export {};
