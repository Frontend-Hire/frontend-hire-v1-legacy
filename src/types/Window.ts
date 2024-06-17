declare global {
  interface Window {
    Razorpay: any;
    LemonSqueezy: any;
    createLemonSqueezy: any;
  }
}

window.Razorpay = window.Razorpay || {};

window.LemonSqueezy = window.LemonSqueezy || {};

window.createLemonSqueezy = () => {};

export {};
