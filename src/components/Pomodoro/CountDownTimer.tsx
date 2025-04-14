import { useEffect, useState } from 'react';
import { CountDownTimerProps } from '@/types/pomodoroTypes';
import { Button, Stack, Text } from '@mantine/core';

const CountDownTimer: React.FC<CountDownTimerProps> = ({
  timerLengthMinutes,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timer, setTimer] = useState<NodeJS.Timeout>(
    setInterval(() => {}, 1000000000)
  );

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    console.log(timeLeft);
    let seconds = timeLeft - 1;
    setTimeLeft(seconds);

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(timer);
    }
  };

  const startTimer = () => {
    setTimer(setInterval(countDown, 1000));
  };

  return (
    <Stack>
      <Button onClick={startTimer}>Start</Button>
      <Text>{timeLeft}</Text>
    </Stack>
  );
};

export default CountDownTimer;
