import React from 'react';

const presets = {
  'red': '#F44336',
  'yellow': '#FFFF00',
  'green': '#76FF03'
}

class StatusLight extends React.Component {
  constructor(props) {
    super(props);
  }

  pickColor = () => {
    return presets[this.props.color] ? presets[this.props.color] : this.props.color
  }

  calculateShadow = (color) => {
    return this.props.active ? color + ' 0 -1px 7px 1px, inset #460 0 -1px 9px,' + color + ' 0 2px ' + (this.props.size.match(/[0-9]+/) / 2) + 'px' : '#000 0 -1px 7px 1px, inset #460 0 -1px 9px, #000 0 2px ' + (this.props.size.match(/[0-9]+/) / 2) + 'px';
  }

  getStyles = () => {
    const color = this.pickColor()
    const style = {
      'margin': '20px auto',
      'width': this.props.size,
      'height': this.props.size,
      'backgroundColor': color,
      'boxShadow': this.calculateShadow(color),
      'borderRadius': '50%'
    };
    return style;
  }

  render() {
    const style = this.getStyles();
    console.log('building status light');
    console.log(style);
    return (
      <div style={style}></div>
    );
  }
}

export default StatusLight;
