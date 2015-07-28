'use strict';

var React = require('react-native');
var styles = require('./style');

var {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PropTypes,
} = React;
var noop = () => {};

var Modal =  React.createClass({
	
  propTypes: {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    backdropType: PropTypes.string,
  }, 

  getInitialState() {
    return { isModalOpen: false }
  },
  getDefaultProps() {
    return {
      isVisible: false,
      onClose: noop,
      onPressBackdrop: noop,
    };
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
    var { isVisible, onPressBackdrop, } = this.props;

    if (!isVisible) {
      return <View />;
    }

     var body = this.renderBody(); 
       return (<View style={styles.container}>
          <TouchableWithoutFeedback onPress={onPressBackdrop}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
          {body}
        </View>)
  },

    
});

module.exports = Modal;

