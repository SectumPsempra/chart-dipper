import React from 'react';
import BarChart from 'react-bar-chart';
import React, {Component} from "react"
import PieChart from "react-svg-piechart"


 
const data = [
  {text: 'Man', value: 500}, 
  {text: 'Woman', value: 300} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
const Example = React.createClass({
  getInitialState() {
    return { width: 500 };
  },
 
  componentDidMount: () => {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  },
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  },
 
  render() {
    return (
        <div ref='root'>
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Quantity'
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }
});
 
React.render(
  <Example/>,
  document.getElementById('react-container')
);












 
export default class MyComponent extends Component {
    constructor() {
        super()
 
        this.state = {
            expandedSector: null,
        }
 
        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }
 
    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }
 
    render() {
        const data = [
            {label: "Facebook", value: 100, color: "#3b5998"},
            {label: "Twitter", value: 60, color: "#00aced"},
            {label: "Google Plus", value: 30, color: "#dd4b39"},
            {label: "Pinterest", value: 20, color: "#cb2027"},
            {label: "Linked In", value: 10, color: "#007bb6"},
        ]
 
        const {expandedSector} = this.state
 
        return (
            <div>
                <PieChart
                    data={ data }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
                <div>
                {
                    data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
