import { useState } from 'react';
import { Tabs } from '@mantine/core';
import PomodoroConfig from '@/components/Pomodoro/PomodoroConfig';
import PomodoroTimer from '@/components/Pomodoro/PomodoroTimer';
import { TimerConfigObject } from '@/types/pomodoroTypes';

const TimerPage = () => {
  const [isVairedBreakTime, setIsVairedBreakTime] = useState<boolean>(false);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(true);
  const [timerConfig, setTimerConfig] = useState<TimerConfigObject>({
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    longBreakCadence: 4,
  });

  return (
    <Tabs defaultValue='config'>
      <Tabs.List>
        <Tabs.Tab value='config'>Configure Timer</Tabs.Tab>
        <Tabs.Tab value='timer'>Pomodoro Tracker</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='config'>
        <PomodoroConfig
          timerConfig={timerConfig}
          setTimerConfig={setTimerConfig}
          isVairedBreakTime={isVairedBreakTime}
          setIsVairedBreakTime={setIsVairedBreakTime}
          timerIsRunning={timerIsRunning}
        />
      </Tabs.Panel>
      <Tabs.Panel value='timer'>
        <PomodoroTimer />
      </Tabs.Panel>
    </Tabs>
  );
};

export default TimerPage;
