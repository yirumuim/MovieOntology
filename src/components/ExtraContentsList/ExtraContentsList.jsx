import React, { useState } from 'react';
import './ExtraContentsList.css';
import ExtraContents from '../ExtraContents/ExtraContents';
import data from '../../data/ContentData';


// functional component
const ExtraContentsList = () => {
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);

  const selectContent = (newIndex) => {
    setProperty(properties[newIndex]);
  };

  const number1 = [0, 1, 2, 3, 4];
  const number2 = [5, 6, 7, 8, 9];

  return (
    <div className="App">
      {/* <div className="content">
        <ExtraContents property={property} />
      </div> */}
      <div className="contentList">
        <ol className="ol_1to5">
          {number1.map((i) => (
            <li>
              <div
                role="button"
                className="contentList_li"
                onClick={() => selectContent(i)}
                onKeyPress={() => selectContent(i)}
                tabIndex={i}
              >
                <span>
                  {properties[i].title}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <ol className="ol_1to5" start="6">
          {number2.map((i) => (
            <li>
              <div
                role="button"
                className="contentList_li"
                onClick={() => selectContent(i)}
                onKeyPress={() => selectContent(i)}
                tabIndex={i}
              >
                <span>
                  {properties[i].title}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// class component
// class ExtraContentsList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       properties: data.properties,
//       property: data.properties[0],
//     };
//   }

//   selectContent = ( newIndex ) => {
//     //const newIndex = index-1;
//     this.setState({
//       property: data.properties[newIndex],
//     });
//   }
//   render() {
//     const { property } = this.state;
//     const { properties } = this.state;
//     return (
//       <div className="App">
//         {/*<div className="content">
//           <ExtraContents property={property} />
//         </div>*/}
//         <div className="contentList">
//           <ol className="ol_1to5">
//             <li className = "contentList_li" onClick={() => this.selectContent(0)} > <span>1. {properties[0].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(1)} ><span>2. {properties[1].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(2)} > <span>3. {properties[2].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(3)} ><span>4. {properties[3].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(4)} ><span>5. {properties[4].title}</span></li>
//           </ol>
//           <ol className="ol_6to10">
//           <li className = "contentList_li" onClick={() => this.selectContent(5)} > <span>6. {properties[5].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(6)} > <span>7. {properties[6].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(7)} > <span>8. {properties[7].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(8)} > <span>9. {properties[8].title}</span></li>
//             <li className = "contentList_li" onClick={() => this.selectContent(9)} > <span>10. {properties[9].title}</span></li>
//           </ol>

//         </div>
//       </div>
//     );
//   }
// }

export default ExtraContentsList;
