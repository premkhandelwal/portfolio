import AnugataLogo from "../../assets/images/anugata.png";
import Anugata1 from "../../assets/images/anugata1.png";
import Anugata2 from "../../assets/images/anugata2.png";
import Baysel from "../../assets/images/baysel.png";
import Baysel1 from "../../assets/images/baysel1.png";
import Baysel2 from "../../assets/images/baysel2.png";
import Baysel3 from "../../assets/images/baysel3.png";
import Baysel4 from "../../assets/images/baysel4.png";
import ble1 from "../../assets/images/ble1.png";
import ble2 from "../../assets/images/ble2.png";
import ble3 from "../../assets/images/ble3.png";
import bmstestjigLogo from "../../assets/images/bmsTestJigLogo.png";
import Dating1 from "../../assets/images/dating1.png";
import Dating2 from "../../assets/images/dating2.png";
import Dating3 from "../../assets/images/dating3.png";
import Dating4 from "../../assets/images/dating4.png";
import Dating from "../../assets/images/datingApp.png";
import empezyLogo from "../../assets/images/emp_ezy_logo.png";
import IOTChain from "../../assets/images/iotchain.png";
import IOTChain1 from "../../assets/images/iotchain1.png";
import IOTChain2 from "../../assets/images/iotchain2.png";
import Maths from "../../assets/images/maths.png";
import Maths1 from "../../assets/images/maths1.png";
import Maths2 from "../../assets/images/maths2.png";
import Maths3 from "../../assets/images/maths3.png";
import Tender from "../../assets/images/tender.png";
import Tender1 from "../../assets/images/tender1.png";
import Tender2 from "../../assets/images/tender2.png";
import Tender3 from "../../assets/images/tender3.png";
import Tender4 from "../../assets/images/tender4.png";
import testjig1 from "../../assets/images/testjig1.png";
import testjig2 from "../../assets/images/testjig2.png";
import testjig3 from "../../assets/images/testjig3.png";
import usb1 from "../../assets/images/usb1.png";
import usb2 from "../../assets/images/usb2.png";
import usb3 from "../../assets/images/usb3.png";
import webberConnectLogo from "../../assets/images/webberConnectLogo.png";
import webberMonitoringLogo from "../../assets/images/webberDesktopApp.png";
import webberMonitoringApp1 from "../../assets/images/webberDesktopApp2.png";
import webberMonitoringApp2 from "../../assets/images/webberDesktopApp3.png";
import webberUsbLogo from "../../assets/images/webberUsbLogo.png";

export const workSamples = [
  {
    id: 1,
    title: "Webber Connect",
    description: "A bluetooth based mobile application to view all the important parameters of the Battery Management System(BMS)",
    detailedDescription: `A bluetooth based mobile application to view all the important parameters of the Battery Management System(BMS). Keep track of all the important parameters like battery voltage, battery current, State of Charge(SOC). Also, application helps to gain insights into battery's health and performance, faults in the system and log the data for better debugging`,
    imageUrl: webberConnectLogo,
    technologies: ['Flutter', "BLE(Bluetooth Low Energy)", "Visual Studio Code (IDE)"],
    projectLink: "https://play.google.com/store/apps/details?id=com.webber.webber",
    screenshots: [ble1, ble2, ble3],
    contributions: [
      "Coordinated with the desginer team of Battery Management System to understand the structure of the data emitted by the BMS",
      "Described a schema to map the original data from the BMS to the format usable in the application",
      "Designed the UI to fit in all the parameters in a proper understandable manner",
      "Desined a logging framework, to write the data to the external file"
    ],
    features: [
      "Establishes communication with Bluetooth Low Energy(BLE) device",
      "Connect and view data directly from the BMS, to gain major insights of the working of the battery",
      "Log the data continously to the external file",
      "View data in different evenly divided sections according to the use cases"
    ],
    type: "mobile"
  },
  {
    id: 2,
    title: "Webber USB Mobile Application",
    description: "A Serial USB based mobile application to communicate and execute different actions on the Battery Management System(BMS)",
    detailedDescription: "A Serial USB based mobile application to communicate and execute different actions on the Battery Management System(BMS). User according to the requirement can select any viable option from the dropdown and perform operations. Some of the important operations include updating the software of the battery, calibrating the current, controlling the ignition, restarting the BMS",
    imageUrl: webberUsbLogo,
    technologies: ['Flutter', "Flask", "NodeJS", "USB Serial", "Visual Studio Code (IDE)"],
    projectLink: "https://play.google.com/store/apps/details?id=com.webber.wec_usb",
    screenshots: [usb1, usb2, usb3],
    contributions: [
      "Coordinated with the desginer team of Battery Management System to understand different important actions which can be performed",
      "Designed the UI to display the realtime data from the Battery Management System",
      "Implemented a user input mechanism, where he/she can select the preferrable option from the dropdown and perform operation"
    ],
    features: [
      "Get an insight into present state of the Battery Management System",
      "Select an options from a list of 10 and send it directly to the Battery Management System",
      "Update the software of CAN programming tool directly from the file stored in the cloud"
    ],
    type: "mobile"
  },
  {
    id: 3,
    title: "Webber BMS Testjig Application",
    description: "An automated testing tool to perform testing of all the aspects of the system within few minutes",
    detailedDescription: "An automated testing tool to perform testing of all the aspects of the system within few minutes. User need to just connect to test setup. The automated system communicates with the Battery Management System and takes the account of the status of the aspects, which are to be tested. User is able to track the status on the UI, where the data is updated after knowing the status",
    imageUrl: bmstestjigLogo,
    technologies: ["C#", ".NET", "Microsoft's Serial Port Library", "Visual Studio"],
    screenshots: [testjig1, testjig2, testjig3],
    contributions: [
      "Designed and developed the automated testing system within a week to satisfy the urgent requirement of the client",
      "Coordinated with the testing team to understand the current testing process and noted down the scope of improvement with the automated test setup",
      "Provided the tracking mechanism for each device to be tested, with the data stored in the cloud and export to PDFs",
    ],
    features: [
      "An automated test is started when user connects the Battery Management System with the application",
      "Automatic export of data to PDF which is ready to be despatched",
      "Admins can keep track of the each device being tested with the separately configured admin panel",
    ],
    type: "desktop"
  },
  {
    id: 4,
    title: "Webber Monitoring Application",
    description: "A .NET framework based desktop application to monitor the aspects of the battery",
    detailedDescription: "A .NET framework based desktop application to monitor the aspects of the battery. This is a combo version of Webber Connect and Webber USB, but in the desktop environment. It allows user to monitor the battery parameters, along with communication with the device. It also allows user to change the configurable settings and log the data to the external file.",
    imageUrl: webberMonitoringLogo,
    technologies: [
      "C#", ".NET", "Microsoft's Serial Port Library", "Visual Studio"
    ],
    screenshots: [
      webberMonitoringApp1, 
      webberMonitoringApp2
    ]
  },
  {
    id: 5,
    title: "Emp Ezy",
    description: "Webber USB Mobile Application",
    detailedDescription: "",
    imageUrl: empezyLogo
  },
  {
    id: 10,
    title: 'Anugata NXG',
    description: 'An accounting & billing software',
    detailedDescription: `An accounting & billing software. Allows you to track and manage your business related data on the go. Add any master entry such as <b>Ledger</b>, <b>Item</b>, <b>Voucher</b>, <b>Group</b> and many more. Visualize your data in the form of dashboards and reports. Add transactional entries involving data related to <b>Sales</b>, <b>Purchase</b>, <b>Receipt</b>, <b>Payment</b>. Share invoices and other stuffs with your clients as well`,
    imageUrl: AnugataLogo,
    technologies: ['Flutter', 'C#', 'MSSQL', "Visual Studio Code (IDE)", "Visual Studio (IDE)", "SQL Server Management Studio"],
    screenshots: [Anugata2, Anugata1],
    projectLink: "https://www.anugata.com",
    contributions: [
      "Built the frontend of the application",
      "Written APIs in C# and consumed them in the application",
      "Extensively managed database for the application",
      "Added functionalities such as sharing the data to Excel and PDF from app itself"
    ],
    features: [
      "Manage all your business data on the go",
      "Share the data directly with your customers",
      "View the data in summarized form in the form reports",
      "Add multiple companies and their relevant data"
    ],
    type: "mobile"
  },
  {
    id: 20,
    title: 'Baysel',
    description: 'Platform for customers to connect with vendors and explore a variety of goods.',
    detailedDescription: "Platform for customers to connect with vendors and explore a variety of goods. The vendors targetted are mostly the hawkers who tirelessly roam the street while pushing their luck with the goods they have. The application was built with an intention in order to help the vendors meet their potential customers by eliminating their excess roaming. Vendors add the goods they have to sell by using the interface. Customers can search for the goods/services they are looking for. Nearby vendors providing the services or goods are shown on the map. Customers can book the vendor for the service they want. Vendor can then decide whether going in that area will be beneficial to him or not",
    imageUrl: Baysel,
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Visual Studio Code (IDE)'],
    screenshots: [Baysel1, Baysel2, Baysel3, Baysel4],
    projectLink: "https://github.com/premkhandelwal/baysel_flutter",
    contributions: [
      "Designed frontend the frontend of the application",
      "Contributed to the backend of the code",
      "Designed the database schema according to app requirements",
      "Deployed the APIs on Cyclic"
    ],
    features: [
      "Provides a way for customers to see nearby vendors on the in-app map",
      "Allows vendors to see demand for the particular service/good",
      "Supports both roaming as well static vendors",
      "Vendors can add or remove their everyday goods on a button click"
    ],
    type: "mobile"

  },
  {
    id: 3,
    title: 'Dating App',
    description: 'Discover, Connect, and Date with Ease',
    detailedDescription: 'Discover, Connect, and Date with Ease. Our innovative dating platform offers a range of features designed to enhance your dating experience. With our app, you can effortlessly discover potential matches who share your interests, values, and goals.Our advanced algorithm ensures that you are presented with highly compatible profiles. Say goodbye to endless swiping and enjoy a curated selection of individuals tailored to your preferences. Finding meaningful connections has never been easier. Connect with others through our intuitive messaging system. Engage in meaningful conversations and get to know your matches on a deeper level. Break the ice and build genuine connections before taking the next step. ',
    imageUrl: Dating,
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Figma', 'Visual Studio Code (IDE)'],
    screenshots: [Dating1, Dating2, Dating3, Dating4],
    projectLink: "https://github.com/premkhandelwal/datingApp",
    contributions: [
      "Accessed the figma template of Tinder to create a Tinder clone",
      "Built the frontend of the application based on the Figma template",
      "Connected the frontend of the application with the Firebase Firestore backend",
      "Added the swipe left and swipe right animations"
    ],
    features: [
      "See any user in the nearby area. Customize the reach as per your preferences",
      "Swipe a user left or right interactively as per your choice",
      "Chat with the matched user on the app itself without sharing much details",
      "Customize the gender and age of the members you want to see in your feed"
    ],
    type: "mobile"

  },
  {
    id: 4,
    title: 'Maths Is Fun',
    description: 'An interactive application involving interesting mathematics choices',
    detailedDescription: 'An interactive application involving interesting mathematics choices. It is common for some students to experience a certain level of anxiety or fear when it comes to mathematics. Some studies suggest that math anxiety affects around 10-20% of students, while others indicate higher percentages. The aim of building this application is to remove the fear of mathematics from the student. We provide an interative way for the students to learn mathematics. We have provided the puzzle ranging from easy to moderate difficulty. This will be the entrypoint to the process of removal of fear. Application also consists of interactive way to calculate things from the app and learn formulae as well.',
    imageUrl: Maths,
    technologies: ['Flutter', 'Visual Studio Code (IDE)'],
    screenshots: [Maths1, Maths2, Maths3],
    projectLink: "https://github.com/premkhandelwal/MathsIsFun",
    contributions: [
      "Led the development of the application with an inexperienced team of members",
      "Designed the puzzles to be included in the application",
      "Integrated different operations for the calculator embedded in the application",
    ],
    features: [
      "Removes fear of mathematics from the students",
      "Includes interactive puzzles",
      "A guide to important formulae",
      "An in-app calculator for performing operations"
    ],
    type: "mobile"

  },
  {
    id: 5,
    title: 'IOTChain',
    description: 'A Web3 project to ensure the integrity of IoT Devices',
    detailedDescription: 'A Web3 project to ensure the integrity of IoT Devices. The application was built with an aim to ensure the IOT Data Integrity with the help of Blockchain. Chainlink, a decentralized oracle network, was used for the purpose of accessing the IOT Data. The hash value of the IOT Data is calculated using the SHA-256 algorithm. The conceived hash value is passed to API which is accessed by a ChainLink job. The data from the blockchain and the original one os displayed on the frontend for the user to match and see if the data integrity was acheived.',
    imageUrl: IOTChain,
    technologies: ['Solidity', 'Docker', 'Ubuntu (WSL)', 'Chainlink', 'ReactJS', 'Truffle', 'Polygon', 'Metamask (Wallet)', 'Visual Studio Code (IDE)', 'Remix (IDE)'],
    screenshots: [IOTChain1, IOTChain2,],
    projectLink: "https://github.com/premkhandelwal/blockchain-backup/tree/truffle-react-integration",
    contributions: [
      "Studied thorougly about a fairly new topic of Blockchain",
      "Led the development phase and deployed first smart contract on Ethereum using Remix",
      "Combined a plethora of technologies together in order to successfully run a Web3 and a Chainlink project",
      "Finally deployed the smart contract on Polygon Blockchain with the help of Truffle and Metamask"
    ],
    features: [
      "Utilises Blockchain to provide security to data from IOT devies",
      "Allows user to store any kind of data in Blockchain",
      "Makes use of Polygon, a power efficient side chain of Ethereum, which reduces power consumption by a larger extent",
    ],
    type: "website"

  },
  {
    id: 6,
    title: 'Tender',
    description: 'Mobile application to simplify Tender Management for Businesses',
    detailedDescription: 'Mobile application to simplify Tender Management for Businesses. A customer first adds a detailed description with photo, name, quantity, etc details of the item that he desires. The added item will be by deafult be visible to the users within the 10KM range. The vendors having the desired product would add their quotation will add their price for the product. The customer can see what were the quoted price from all the vendors and appropraitely close the deal. The application aims to ensure more transparency and reach for the customer and get the best deal possible',
    imageUrl: Tender,
    technologies: ['Flutter', 'Figma', 'Firebase'],
    screenshots: [Tender1, Tender2, Tender3, Tender4],
    projectLink: "https://github.com/premkhandelwal/tender",
    contributions: [
      "Carry forwarded the efforts by another developer in building frontend of the application",
      "Designed the database schema of the application",
      "Mapped the flow of the application and data between various parts",
    ],
    features: [
      "Gets customers the best deal by taking quotation from multiple vendors",
      "Allows vendors a better reach for its customers",
      "Better transparency between transactions is ensured",
    ],
    type: "mobile"

  },
  // Add more work samples as needed
];