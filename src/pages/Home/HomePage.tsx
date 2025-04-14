import classes from './HomePage.module.css';
import { Text, Image, Stack, Group } from '@mantine/core';
import goofy from '@/assets/images/goofy.jpeg';

const personalSummary = [
  "Originally from the Greater Boston Area and now based in Brooklyn, I'm a software engineer who thrives at the intersection of technical expertise and big-picture thinking. Throughout my five-year career spanning surgical robotics, wireless communications, wearables, SaaS, and fintech, I've developed a knack for quickly adapting to new domains and technologies. ",
  'While my background may seem varied, this diversity has become my strength: I bring fresh perspectives to every project and can bridge the gap between technical implementation and strategic vision, regardless of industry.',
  'As I continue to growas an engineer, this portfolio serves as both a showcase of my professional background and a home for my web-based personal projects.',
];

const HomePage = (): React.JSX.Element => {
  return (
    <Stack>
      <Group className={classes.imageGroup}>
        <Image className={classes.image} src={goofy} fit='scale-down' />
      </Group>
      {personalSummary.map((paragraph) => {
        return <Text>{paragraph}</Text>;
      })}
    </Stack>
  );
};

export default HomePage;
