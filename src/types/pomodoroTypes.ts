export interface TimerConfigObject {
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  longBreakCadence: number;
}

export interface PomodoroConfigProps {
  timerConfig: TimerConfigObject;
  setTimerConfig: React.Dispatch<React.SetStateAction<TimerConfigObject>>;
  isVairedBreakTime: boolean;
  setIsVairedBreakTime: React.Dispatch<React.SetStateAction<boolean>>;
  timerIsRunning: boolean;
}
