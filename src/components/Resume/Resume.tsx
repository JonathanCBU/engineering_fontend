import { List, Stack, Paper, Text } from '@mantine/core';
import { ResumeProps } from '@/types/resumeTypes';
import classes from './Resume.module.css';

const Resume = ({
  bullets,
  story,
  imageRef,
}: ResumeProps): React.JSX.Element => {
  return (
    <Stack className={classes.tabstack}>
      <Paper radius='xs' p='xl' withBorder>
        <List>
          {bullets.map((bullet) => {
            return <List.Item>{bullet}</List.Item>;
          })}
        </List>
      </Paper>
      <Text>{story}</Text>
    </Stack>
  );
};

export default Resume;
