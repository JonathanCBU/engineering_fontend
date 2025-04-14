import Resume from './Resume';

const stBullets = [
  'Designed, sourced, and assembled test fixtures for Hardware in the Loop testing of Firmware and Wifi/LTE functionality',
  'Improved 7-day battery life by 30% and increased the amount of devices with 95%+ connectivity by 23% by utilizing the Wifi/LTE test fixture',
  'Coded product GPIO drivers and unit tests in C using Zephyr',
  'Wrote a Python package for use in automated testing and implemented a CI/CD pipeline using Docker and Github Actions',
  'Built and coded a nightly testing fixture using a RaspberryPi and a custom breakout board to interface with product internals',
  'Led weekly bug triage meetings and regular bug backlog with JIRA',
];

const stStory =
  "I joined Silvertree in December of 2022 fresh after a 50% tenure-based RIF from Starry, my previous employer. Silvertree was a very natural progression from my role at Starry. The company was working on a wrist wearable to help inspire confidence in active older adults. I joined as the first (and only) automated system test engineer. I leveraged my radio testing experinence at Starry to build a test rig for debugging and benchmarking the device's connecivity and battery comsumption. Throughout the project I was largely on my own, and I got to really stretch my legs as a generic engineer for the first time. I learned how to package a test framework in a docker container, I sourced radio circuit components and RaspberryPis to execute tests, I learned how to use Github Actions for nightly firmware tests and builds, and I even built a Zephyr RTOS API for handling button presses on the wearable.";

const Silvertree = (): React.JSX.Element => {
  return <Resume bullets={stBullets} story={stStory} imageRef='' />;
};

export default Silvertree;
