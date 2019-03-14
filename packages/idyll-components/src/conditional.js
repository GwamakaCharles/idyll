const React = require('react');

class Conditional extends React.Component {
  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;

    if (!props.if) {
      return <div style={{ display: 'none' }}>{props.children}</div>;
    }

    return <div>{props.children}</div>;
  }
}

Conditional._idyll = {
  name: 'Conditional',
  tagType: 'open',
  children: ['Some text'],
  props: [
    {
      name: 'if',
      type: 'expression',
      example: '`x < 10`',
      description:
        'An expression; if this evaluates to true, the children will be rendered, otherwise nothing will be drawn to the screen'
    }
  ]
};
module.exports = Conditional;
