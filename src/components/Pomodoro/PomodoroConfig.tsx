import React from 'react';
import {
  NumberInput,
  Fieldset,
  Switch,
  Stack,
  Slider,
  Text,
  Tooltip,
} from '@mantine/core';
import classes from './Pomodoro.module.css';
import { PomodoroConfigProps } from '@/types/pomodoroTypes';

const PomodoroConfig: React.FC<PomodoroConfigProps> = ({
  timerConfig,
  setTimerConfig,
  isVairedBreakTime,
  setIsVairedBreakTime,
  timerIsRunning,
}) => {
  const toggleVairedBreakTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsVairedBreakTime(event.currentTarget.checked);
  };

  const handleTimerConfigChange = (value: string | number, key: string) => {
    setTimerConfig((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  const formatReadableInt = (value: number) => {
    if (value == 1) {
      return `${value}st`;
    }

    if (value == 2) {
      return `${value}nd`;
    }

    if (value == 3) {
      return `${value}rd`;
    }

    return `${value}th`;
  };

  const commonNumberInputProps = {
    allowDecimal: false,
    allowNegavtive: false,
    min: 1,
    max: 120,
  };

  return (
    <Stack className={classes.tabstack}>
      <Tooltip
        position='bottom'
        withArrow
        disabled={!timerIsRunning}
        label='Timer is currently running, please cancel it before changing settings.'
      >
        <Fieldset
          legend='Timer Configuration'
          disabled={timerIsRunning}
          className={classes.fieldset}
        >
          <Switch label='Vaired break time?' onChange={toggleVairedBreakTime} />
          <NumberInput
            label='Pomodoro Time (minutes)'
            value={timerConfig.focusTime}
            onChange={(event) => handleTimerConfigChange(event, 'focusTime')}
            {...commonNumberInputProps}
          />
          <NumberInput
            label={(isVairedBreakTime ? 'Short ' : '') + 'Break Time (minutes)'}
            value={timerConfig.shortBreakTime}
            onChange={(event) =>
              handleTimerConfigChange(event, 'shortBreakTime')
            }
            {...commonNumberInputProps}
          />
          {isVairedBreakTime && (
            <Stack>
              <NumberInput
                label='Long Break Time (minutes)'
                value={timerConfig.longBreakTime}
                onChange={(event) =>
                  handleTimerConfigChange(event, 'longBreakTime')
                }
                {...commonNumberInputProps}
              />
              <Text>{`Every ${formatReadableInt(timerConfig.longBreakCadence)} break is a long break`}</Text>
              <Slider
                min={2}
                max={10}
                onChange={(event) =>
                  handleTimerConfigChange(event, 'longBreakCadence')
                }
                value={timerConfig.longBreakCadence}
              />
            </Stack>
          )}
        </Fieldset>
      </Tooltip>
    </Stack>
  );
};

export default PomodoroConfig;
