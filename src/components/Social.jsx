import React, { Component } from 'react';
import '../App.css';
import * as config from '../config'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  GooglePlusIcon
} from 'react-share';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  render() {
    return (
      <div className="Social">
        <FacebookShareButton url={config.SHARE_URL} quote={this.props.shareMessage}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={config.SHARE_URL} title={this.props.shareMessage}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={config.SHARE_URL} title={this.props.shareMessage}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <GooglePlusShareButton url={config.SHARE_URL}>
          <GooglePlusIcon size={32} round={true} />
        </GooglePlusShareButton>
      </div>
      );
  }
}

export default Social;