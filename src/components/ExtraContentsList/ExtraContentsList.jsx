import React, { Component } from 'react';
import './ExtraContentsList.css';
import ExtraContents from '../ExtraContents/ExtraContents';
import data from '../../data/ContentData';

// class component
class ExtraContentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
    };
  }
  
  selectContent = ( newIndex ) => {
    //const newIndex = index-1;
    this.setState({
      property: data.properties[newIndex],
    });
  }
  render() {
    const { property } = this.state;
    const { properties } = this.state;
    return (
      <div className="App">        
      
        {/* <div className="content">
          <ExtraContents property={property} />
        </div> */}
        <div className="contentList">
          <ol className="features">
            <li className = "contentList_li" onClick={() => this.selectContent(0)} > <span>{properties[0].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(1)} ><span>{properties[1].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(2)} > <span>{properties[2].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(3)} ><span>{properties[3].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(4)} ><span>{properties[4].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(5)} > <span>{properties[5].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(6)} > <span>{properties[6].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(7)} > <span>{properties[7].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(8)} > <span>{properties[8].title}</span></li>
            <li className = "contentList_li" onClick={() => this.selectContent(9)} > <span>{properties[9].title}</span></li>
          
          </ol>

        </div>
      </div>
    );
  }
}

export default ExtraContentsList;
