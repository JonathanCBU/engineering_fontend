import Medtronic from '@/components/Resume/Medtronic';
import Silvertree from '@/components/Resume/Silvertree';
import Starry from '@/components/Resume/Starry';
import Qt from '@/components/Resume/Qt';
import Arpari from '@/components/Resume/Arpari';
import { Text, Accordion, Group } from '@mantine/core';
import classes from './CareerPage.module.css';
import { AccordionItemProps } from '@/types/careerTypes';

const ResumeAccordion = ({
  title,
  subtitle,
  children,
}: AccordionItemProps): React.JSX.Element => {
  return (
    <Accordion.Item value={title}>
      <Accordion.Control>
        <Group className={classes.accordionGroup}>
          <Text className={classes.tabText}>{title}</Text>
          {subtitle && <Text className={classes.dateText}>{subtitle}</Text>}
        </Group>
      </Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
};

const positions = [
  {
    title: ' Full Stack Engineer - Arpari',
    subtitle: 'December 2024 - Present',
    child: <Arpari />,
  },
  {
    title: 'Senior Software Engineer - Qt',
    subtitle: 'March 2024 - December 2024',
    child: <Qt />,
  },
  {
    title: 'Senior Software Engineer - Silvertree',
    subtitle: 'December 2022 - February 2024',
    child: <Silvertree />,
  },
  {
    title: 'Radio Requency Systems Engineer - Starry',
    subtitle: 'May 2022 - October 2022',
    child: <Starry />,
  },
  {
    title: 'Software Verification Engineer - Medtronic',
    subtitle: 'September 2020 - May 2022',
    child: <Medtronic />,
  },
];

const CareerPage = (): React.JSX.Element => {
  return (
    <Accordion>
      {positions.map((pos) => {
        return (
          <ResumeAccordion title={pos.title} subtitle={pos.subtitle}>
            {pos.child}
          </ResumeAccordion>
        );
      })}
    </Accordion>
  );
};

export default CareerPage;
