import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../components/generic/TabPanel';
import { useState } from 'react';
import Medtronic from './tabs/Medtronic';
import Starry from './tabs/Starry';
import Silvertree from './tabs/Silvertree';
import Qt from './tabs/Qt';
import Arpari from './tabs/Arpari';

const CareerPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.stopPropagation();
    setCurrentIndex(newValue);
  };

  const tabComponents = [
    <Medtronic />,
    <Starry />,
    <Silvertree />,
    <Qt />,
    <Arpari />,
  ];

  return (
    <>
      <Tabs value={currentIndex} onChange={handleChange}>
        {tabComponents.map((tab) => (
          <Tab label={tab.type.name} />
        ))}
      </Tabs>

      {tabComponents.map((tab, index) => (
        <TabPanel index={index} value={currentIndex} key={index}>
          {tab}
        </TabPanel>
      ))}
    </>
  );
};

export default CareerPage;
