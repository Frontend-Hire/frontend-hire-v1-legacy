export const getRandomWelcomeMessage = (userName: string) => {
  const messages = [
    `Welcome back, ${userName}! Ready to dive in and practice?`,
    `Hello there, ${userName}! Hope you're geared up for a productive session!`,
    `Hey ${userName}! Excited to see you. Let's make today amazing!`,
    `Greetings, ${userName}! Get ready to learn and grow together!`,
    `Hi there, ${userName}! Your learning journey starts now. Let's do this!`,
    `Welcome, ${userName}! We're thrilled to have you here. Time to shine!`,
    `Hey ${userName}! Hope you're all set for some awesome learning ahead!`,
    `Hello, ${userName}! Get comfortable and let the learning adventure begin!`,
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};
