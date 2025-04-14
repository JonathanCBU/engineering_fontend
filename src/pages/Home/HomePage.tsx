import classes from './HomePage.module.css';
import { Text } from '@mantine/core';

const personalSummary =
  'Originally from the Greater Boston Area, now located in Brooklyn, New York I \
  am a software engineer with a lot of industries under my belt and a head full \
  of fun facts. I have worked in surgical robotics, wireless communications \
  over distance, wearables, SAAS, and currently, fintech. Though my career so \
  far sounds quite varied, learning new technologies and architecting solutions \
  to problems is a skill set I can apply to improve any product in any industry.';

const HomePage = (): React.JSX.Element => {
  return <Text>{personalSummary}</Text>;
};

export default HomePage;
