export interface TimerConfigObject {
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  longBreakCadence: number;
}

export interface PomodoroConfigProps {
  timerConfig: TimerConfigObject;
  setTimerConfig: React.Dispatch<React.SetStateAction<TimerConfigObject>>;
  isVariedBreakTime: boolean;
  setisVariedBreakTime: React.Dispatch<React.SetStateAction<boolean>>;
  timerIsRunning: boolean;
}

export interface PomodoroTimerProps {
  timerConfig: TimerConfigObject;
  isVariedBreakTime: boolean;
  timerIsRunning: boolean;
  setTimerIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CountDownTimerProps {
  timerLengthMinutes: number
}
