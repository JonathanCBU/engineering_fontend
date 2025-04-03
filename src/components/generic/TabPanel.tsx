interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ index, value, children }: TabPanelProps) => {
  return <>{value === index ? <>{children}</> : <></>}</>;
};

export default TabPanel;
