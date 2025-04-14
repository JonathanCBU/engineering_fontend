import {
  Stack,
  Text,
  Switch,
  ActionIcon,
  Fieldset,
  Group,
} from '@mantine/core';
import classes from './Pomodoro.module.css';
import { PomodoroTimerProps } from '@/types/pomodoroTypes';
import { formatReadableInt } from '@/utils/formatting';
import { useEffect, useState } from 'react';
import { add } from 'date-fns';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconRefresh,
} from '@tabler/icons-react';

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  timerConfig,
  isVariedBreakTime,
  setTimerIsRunning,
  timerIsRunning,
}) => {
  const [countDownInterval, setCountDownInterval] =
    useState<NodeJS.Timeout | null>(null);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [nextBreak, setNextBreak] = useState<Date | null>(null);

  const configText = isVariedBreakTime
    ? `Timer will run for ${timerConfig.focusTime} minutes, followed by a break of ${timerConfig.shortBreakTime} minutes. Every ${formatReadableInt(timerConfig.longBreakCadence)} break is ${timerConfig.longBreakTime} minutes long.`
    : `Timer will run for ${timerConfig.focusTime} minutes, followed by a break of ${timerConfig.shortBreakTime} minutes.`;

  const toggleTimer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerIsRunning(event.currentTarget.checked);

    if (event.currentTarget.checked) {
      // timer turned on

      // set timer started if no timer currently started
      if (!timerStarted) {
        setTimerStarted(true);
      }
      setStartTime(new Date());

      const nBreak = add(startTime, { minutes: timerConfig.focusTime });
      setNextBreak(nBreak);
    }
  };

  return (
    <Stack className={classes.tabstack}>
      <Switch
        label={`Timer is ${timerIsRunning ? 'running' : 'paused'}`}
        onChange={toggleTimer}
      />
      <Fieldset legend='Timer Control' className={classes.fieldset}>
        <Group>
          <ActionIcon>
            <IconPlayerPlay />
          </ActionIcon>
          <ActionIcon>
            <IconPlayerPause />
          </ActionIcon>
          <ActionIcon>
            <IconRefresh />
          </ActionIcon>
        </Group>
      </Fieldset>
      <Text>{configText}</Text>
      <Text>{`Next break will be at ${nextBreak}`}</Text>
    </Stack>
  );
};

export default PomodoroTimer;
