import React from 'react';

import StatusLight from '../status-light';

class TrafficLight extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={'trafficLight'}>
        <StatusLight size={this.props.size} color={'red'} active={this.props.status === 'red'}/>
        <StatusLight size={this.props.size} color={'yellow'} active={this.props.status === 'yellow'}/>
        <StatusLight size={this.props.size} color={'green'} active={this.props.status === 'green'}/>
      </div>
    );
  }
}

export default TrafficLight;
