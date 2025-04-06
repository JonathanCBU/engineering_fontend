import React, { useState } from 'react';
import {
  NumberInput,
  Fieldset,
  Switch,
  Flex,
  Stack,
  Slider,
  Text,
} from '@mantine/core';

const TimerPage = () => {
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [longBreakCadence, setLongBreakCadence] = useState(4);
  const [isVairedBreakTime, setIsVairedBreakTime] = useState(false);

  const toggleVairedBreakTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsVairedBreakTime(event.currentTarget.checked);
  };

  const changeFocusTime = (value: string | number) => {
    setFocusTime(Number(value));
  };

  const changeShortBreakTime = (value: string | number) => {
    setShortBreakTime(Number(value));
  };

  const changeLongBreakTime = (value: string | number) => {
    setLongBreakTime(Number(value));
  };

  const changeLongBreakCadence = (value: string | number) => {
    setLongBreakCadence(Number(value));
  };

  const commonNumberInputProps = {
    allowDecimal: false,
    allowNegavtive: false,
    min: 1,
    max: 120,
  };

  return (
    <Flex>
      <Stack>
        <Switch label='Vaired break time?' onChange={toggleVairedBreakTime} />
        <Fieldset
          legend='Timer Configuration'
          radius={0}
          w={{ base: '100%', sm: 400, md: 500 }}
        >
          <NumberInput
            label='Pomodoro Time (minutes)'
            defaultValue={25}
            onChange={changeFocusTime}
            {...commonNumberInputProps}
          />
          <NumberInput
            label={(isVairedBreakTime ? 'Short ' : '') + 'Break Time (minutes)'}
            defaultValue={5}
            onChange={changeShortBreakTime}
            {...commonNumberInputProps}
          />
          {isVairedBreakTime && (
            <Stack>
              <NumberInput
                label='Long Break Time (minutes)'
                defaultValue={15}
                onChange={changeLongBreakTime}
                {...commonNumberInputProps}
              />
              <Text>Number of Pomodori between long breaks</Text>
              <Slider min={1} max={10} onChange={changeLongBreakCadence} />
            </Stack>
          )}
        </Fieldset>
      </Stack>
    </Flex>
  );
};

export default TimerPage;
