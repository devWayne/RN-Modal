'use strict';

var React = require('react-native');
var Overlay = require('react-native-overlay');

var styles = require('./style');

var {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PropTypes,
} = React;

var Modal =  React.createClass({
  getInitialState() {
    return { isModalOpen: false }
  },

  openModal() {
    this.setState({isModalOpen: true});
  },

  closeModal() {
    this.setState({isModalOpen: false});
  },

  renderBody(){
    return (
        <View style={styles.modal}>
          {React.Children.map(this.props.children, React.addons.cloneWithProps)}
        </View>
     );

  },
    
  render() {

     var body = this.renderBody();
       return (<View style={[styles.container, this.transitionStyles()]}>
          <TouchableWithoutFeedback onPress={onPressBackdrop}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
          {body}
        </View>)
  },

    
});
