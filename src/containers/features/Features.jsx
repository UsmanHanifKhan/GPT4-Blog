// import React from 'react'
// import { Feature } from '../../components'
// import './features.css'

// const featuresData = [
//   {
//     title: 'Improving end distrusts instantly',
//     text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
//   },
//   {
//     title: 'Become the tended active',
//     text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
//   },
//   {
//     title: 'Message or am nothing',
//     text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
//   },
//   {
//     title: 'Really boy law county',
//     text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
//   },
// ]
// const Features = () => {
//   return (
//     <div className='gpt4__features w-full flex justify-between flex-row section__padding' id='features'>
//       <div className="gpt4__features-heading flex-1 flex justify-start flex-col text-left mr-20">
//         <h1 className='gradient__text font-extrabold text-3xl leading-10 not-italic '>The Future is Now and You just Need To Realize it.Step into future Today & Make it Happen</h1>
//         <p className='font-extrabold text-base leading-8 mt-8'>Request Early Access to Get Started</p>
//       </div>
//       <div className="gpt4__features-container flex-1 flex justify-start items-center flex-col">
//         {featuresData.map((item , index) => (
//           <Feature title={item.title} text={item.text} key={item.title + index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Features









import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;