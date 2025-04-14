import Resume from './Resume';

const stBullets = [
  'Designed, sourced, and assembled test fixtures for Hardware in the Loop testing of Firmware and Wifi/LTE functionality',
  'Improved 7-day battery life by 30% and increased the amount of devices with 95%+ connectivity by 23% by utilizing the Wifi/LTE test fixture',
  'Coded product GPIO drivers and unit tests in C using Zephyr',
  'Wrote a Python package for use in automated testing and implemented a CI/CD pipeline using Docker and Github Actions',
  'Built and coded a nightly testing fixture using a RaspberryPi and a custom breakout board to interface with product internals',
  'Led weekly bug triage meetings and regular bug backlog with JIRA',
];

const Silvertree = (): React.JSX.Element => {
  return <Resume bullets={stBullets} story='' imageRef='' />;
};

export default Silvertree;
