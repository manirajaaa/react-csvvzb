import React from 'react';
var count = 1;
class ChildNotes extends React.Component {
        render() {
                React.Children.map(this.props.children, () => {
                        console.log('child', count++);
                });
                return ( <ul> 
                                {this.props.children} 
                        </ul>)
        }
};
export default ChildNotes;
