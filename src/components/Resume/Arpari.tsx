import Resume from './Resume';

const arpariBullets = [
  'Planned and executed full stack feature development projects over long (1 month) and short (2-5 day) timeframes',
  'Leveraged 3rd party APIs for backend integration of payment rails and invoice management',
  'Architected a REST API backend with Django and Django Rest Framework  to serve serialized data to the frontend',
  'Developed a responsive frontend using React and the Material UI design library',
  'Designed core pieces of the code base to be implemented in new features by contracting engineers',
  'Reported directly to the company founder/CEO/CTO',
];

const Arpari = (): React.JSX.Element => {
  return <Resume bullets={arpariBullets} story='' imageRef='' />;
};

export default Arpari;
