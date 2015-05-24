import React from "react";
import classNames from "classnames";

class VideoPlayer extends React.Component {

	render() {
		let videoClasses = classNames({
			"video-wrapper": true
		});

		let frameStyles = {
			height: this.props.height ? this.props.height : "100%",
			width: this.props.width ? this.props.width : "100%"
		};

		this.props.youtube ? this.props.youtube = "http://www.youtube.com/embed/" + this.props.youtube : null; //eslint-disable-line
		this.props.vimeo ? this.props.vimeo = "https://player.vimeo.com/video/" + this.props.vimeo : null; //eslint-disable-line

		return (
			<div className={classNames(this.props.className, videoClasses)} style={this.props.style}>
				<iframe
					allowFullScreen={this.props.noFullscreen ? false : true}
					mozallowfullscreen={this.props.noFullscreen ? false : true}
					src={this.props.url ? this.props.url : this.props.youtube ? this.props.youtube : this.props.vimeo}
					style={frameStyles}
					webkitAllowFullScreen={this.props.noFullscreen ? false : true} />
			</div>
		);
	}
}

VideoPlayer.propTypes = {
	className: React.PropTypes.string,
	height: React.PropTypes.string,
	noFullscreen: React.PropTypes.boolean,
	style: React.PropTypes.object,
	url: React.PropTypes.string,
	vimeo: React.PropTypes.string,
	width: React.PropTypes.string,
	youtube: React.PropTypes.string
};

VideoPlayer.defaultProps = { small: false };

module.exports = VideoPlayer;
