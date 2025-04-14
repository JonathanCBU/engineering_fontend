import { useState } from 'react';
import { Group, Tabs, Text } from '@mantine/core';
import PomodoroConfig from '@/components/Pomodoro/PomodoroConfig';
import PomodoroTimer from '@/components/Pomodoro/PomodoroTimer';
import { TimerConfigObject } from '@/types/pomodoroTypes';
import CountDownTimer from '@/components/Pomodoro/CountDownTimer';

const TimerPage: React.FC = () => {
  const [isVariedBreakTime, setisVariedBreakTime] = useState<boolean>(false);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [timerConfig, setTimerConfig] = useState<TimerConfigObject>({
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    longBreakCadence: 4,
  });

  return (
    <Group>
      <Tabs defaultValue='pomodoro'>
        <Tabs.List>
          <Tabs.Tab value='pomodoro'>Pomodoro</Tabs.Tab>
          <Tabs.Tab value='short'>Short Break</Tabs.Tab>
          <Tabs.Tab value='long'>Long Break</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panel value='pomodoro'>
          <CountDownTimer timerLengthMinutes={30} />
        </Tabs.Panel>
        <Tabs.Panel value='short'>
          <Text>Short</Text>
        </Tabs.Panel>
        <Tabs.Panel value='long'>
          <Text>Long</Text>
        </Tabs.Panel>
      </Tabs>
    </Group>
    // <Tabs defaultValue='config'>
    //   <Tabs.List>
    //     <Tabs.Tab value='config'>Configure Timer</Tabs.Tab>
    //     <Tabs.Tab value='timer'>Pomodoro Tracker</Tabs.Tab>
    //   </Tabs.List>

    //   <Tabs.Panel value='config'>
    //     <PomodoroConfig
    //       timerConfig={timerConfig}
    //       setTimerConfig={setTimerConfig}
    //       isVariedBreakTime={isVariedBreakTime}
    //       setisVariedBreakTime={setisVariedBreakTime}
    //       timerIsRunning={timerIsRunning}
    //     />
    //   </Tabs.Panel>
    //   <Tabs.Panel value='timer'>
    //     <PomodoroTimer
    //       timerConfig={timerConfig}
    //       isVariedBreakTime={isVariedBreakTime}
    //       setTimerIsRunning={setTimerIsRunning}
    //       timerIsRunning={timerIsRunning}
    //     />
    //   </Tabs.Panel>
    // </Tabs>
  );
};

export default TimerPage;
