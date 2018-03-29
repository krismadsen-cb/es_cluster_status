import React from 'react';

import ClusterStatus from '../cluster-status';
import config from '../../config';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': {}
    }
  }

  update = (endpoint, upsert) => {
    let orig = Object.assign({}, this.state.data);
    orig[endpoint] = upsert;
    this.setState({
      'data': orig
    })
  }

  acquire = () => {
    for(let ep of config.endpoints) {
      console.log(ep)
      fetch(config.base + ep + config.query)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        return response.text()
      }).then((text) => { this.update(ep, text.split('\n')[0].trim())})
      .catch((error) => { this.setError(ep)});
      }
    setTimeout(this.acquire, 60000 * 5);
  }

  componentDidMount() {
    this.acquire();
  }

  render() {
    const clusters = [];
    for(let ep of config.endpoints) {
      clusters.push(<ClusterStatus id={ep} endpoint={ep} status={this.state.data[ep]}/>)
    }
    return(
      <div>{clusters}</div>
    );
  }
}

export default Container;
