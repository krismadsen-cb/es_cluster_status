import React from 'react';

import TrafficLight from '../traffic-light';

class ClusterStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'cluster'} style={{'padding':'25px 0'}}>
        <div className={'header'} style={{'width':'100%', 'textAlign':'center'}}>
          <h1 style={{'color': '#FAFAFA'}}>{this.props.endpoint}</h1>
          <p style={{'display': this.props.status ? 'none' : 'initial', 'textAlign': 'center', 'color': '#FAFAFA'}}>Host Unreachable</p>
        </div>
        {this.props.status && <TrafficLight status={this.props.status} size={'50px'}/> }
      </div>
    );
  }
}

export default ClusterStatus;
