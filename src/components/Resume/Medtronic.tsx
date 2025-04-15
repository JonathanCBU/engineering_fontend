import Resume from './Resume';

const mdtBullets = [
  'Redesigned a Python testing framework to lower maintenance, freeing up ~$300k/yr of resources to be used elsewhere on the project',
  'Assumed responsibilities of lead automation test engineer or the GUI subsystem and onboarded new team members',
  'Designed a Cython auto generator for wrapping Python around DDS publishers and subscribers',
  'Leveraged Python to run GUI application simulators and capture images for the product user guide',
  'Wrote software behavior and function requirements for testing',
];

const mdtStory =
  "My first role after undergrad was as a software verification engineer at Medtronic's \
  Robotically Assissted Surgery (RAS) project. I was placed with the Graphical User \
  Interface (GUI) team as their first full time test engineer dedicated to test automation. \
  My primary responsibilities were to use Python to automate as many of the simple manual \
  GUI tests as possible. While some automated tests existed, there was no unifying framework, \
  so maintenance of the test suite required an entire team of contractors whose work could \
  have easily benefited other aspects of the project. Therefore, my first large project within \
  this rolse was to design and implement a scalable, well documented test framework using our \
  existing toolset (Python and Squish GUI Tester). On my own, being so new to the world of \
  professional engineering, I didn't know where to start. Luckily, one of the GUI developers \
  volunteerred to take me under his wing and work through the architecture of the project with \
  me. Thanks to Russel's guidance we were able to build a new testing framework that allowed \
  for full system testing of the robot's UI. The framework allowed us to port all existing \
  tests over to it's new structure, and convert the vast majority of our GUI subsystem \
  requirement tests to automated executions. Throughout my time at Medtronic I wasn't only \
  gaining techincal skils, but also learning how to work on an Agile Scrum team, what it \
  means to define project requirements, and how to navigate the corporate structure as an \
  entry level emloyee. Medtronic was an outstanding learning opportunity for me as a young \
  engineer, and I was very nervous to leave my role there for Starry when the time came.";

const Medtronic = (): React.JSX.Element => {
  return <Resume bullets={mdtBullets} story={mdtStory} imageRef='' />;
};

export default Medtronic;
