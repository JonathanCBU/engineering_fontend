import Resume from './Resume';

const starryBullets = [
  'Took leadership of a brand new test bed design integrating a LitePoint and Berkeley Nucleonics signal generator',
  'Automated thermal characterization of RF devices using Python to control the test bed I designed',
  'Created Python framework for RF conversion between 5 and 40GHz ranges using a circuit I designed',
  'Wrote engineering requirements for system test beds in both production and exploratory testing',
  'Organized new product system test development using Jira to track timelines',
];

const starryStory =
  "I joined Starry's Radio Frequency Systems Engineering team. The team's focus was on full system \
testing of Starry's various Wifi radios prior to new firmware or hardware releases. RFSE members \
each speacialized on either a product line, or some aspect of radio testing. I was placed on the \
Trident sub-team. Trident was the flagship Wifi radio produced by Starry, designed to be placed on \
apartment buildings and paired with a nearby hub Titan unit to provide internet to user's within the \
building. My mentor at the company was the senior engineer, Steve, who also worked on Trident for the \
RFSE team. Together, we were tasked with building up and executing on a test process for the upcoming \
Trident V2 release. Steve tackled regression testing, porting old system tests to the company's new test \
framework. I handled the testing of the newest big feature in the Trident V2: thermal power compensation. \
Over my six months there I planned out a new mobile hardware testing rig for measuring power of transmission \
and received signal strength measurement. I assembled a server rack and mounted a LitePoint (Wifi testing machine), \
Linux teast administration machine, and the RF circuitry required to modulate Wifi in/out of the Trident. Wrapping \
up the project required me to move the test rig to a wearhouse across Boston with a programmable thermal testing chamber, \
and running multiple Tridents through the suite of tests I had writted for the setup. The ultimate result of the project \
was a set of thermal calibration coefficients that the Trident V2 could use to maintain a clean signal through substantially \
higher and lower temperatures than the V1. Suffice to say, it was an incredibly busy and educational three months. I found \
myself learning what it meant to own various aspects of an integrated system, and I am very grateful for the team and mentor \
I had around me to help me over my employment with Starry. Unfortunately, at almost the exact six month mark of my employment, \
the company went through a ~50% reduction in force based on tenure. Staring down the barrel of my first layoff was incredibly \
daunting, but I knew I was still early in my career, and surrounded by supportive loved ones and colleagues. So the Boston job \
hunt began again...";

const Starry = (): React.JSX.Element => {
  return <Resume bullets={starryBullets} story={starryStory} imageRef='' />;
};

export default Starry;
