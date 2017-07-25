//INCOMPLETE - NEEDS MODIFICATION

import React, { Component } from 'react';
import { connect } from 'react-redux';

function ProductsList (props) {

  const { products } = props;

  return (
    <div>
      <ul className="media-list">
        { 
        messages
        .filter( message => {
          //filter parameters
        })
        .map(message => {
          <div key={message.id} >
            {/* Product name, image, price. Make into seperate component? */}
          <div>
        }) 
        }
      </ul>
      <NewMessageEntry channelId={channelId} />
    </div>
  );
}

class MessagesListLoader extends Component {

  componentDidMount () {
    this.props.changeCurrentChannel(this.props.channel.name);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.channel.name !== this.props.channel.name) {
      this.props.changeCurrentChannel(nextProps.channel.name);
    }
  }

  render () {
    return (
      <MessagesList {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {

  const channelId = Number(ownProps.match.params.channelId);

  return {
    channel: state.channels.find(channel => channel.id === channelId) || { name: '' },
    messages: state.messages.filter(message => message.channelId === channelId),
    channelId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    changeCurrentChannel(channelName) {
      dispatch(changeCurrentChannel(channelName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesListLoader);