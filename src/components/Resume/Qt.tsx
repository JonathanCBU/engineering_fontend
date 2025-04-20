import Resume from './Resume';

const qtBullets = [
  'Collaborated closely with clients to troubleshoot and resolve complex test automation setups for GUI applications',
  'Engineered and deployed mock applications using Java, Qt, and QML to effectively replicate and debug customer-reported issues',
  'Developed and curated comprehensive documentation, detailing defects, innovative workarounds, and unintended product feature uses, ensuring seamless future customer support and knowledge transfer',
];

const Qt = (): React.JSX.Element => {
  return <Resume bullets={qtBullets} story='' imageRef='' />;
};

export default Qt;
