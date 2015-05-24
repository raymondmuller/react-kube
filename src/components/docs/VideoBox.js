import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import VideoPlayer from "../lib/VideoPlayer";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class VideoBox extends React.Component {

	render() {
		return (
			<FormSection id="videoBox" name="Video player">
				<Grid>
					<VideoPlayer vimeo="6854460" />
					<CodeSample>
						{"<VideoPlayer  vimeo=\"6854460\" />"}
					</CodeSample>
					<VideoPlayer height="400px" noFullscreen width="600px" youtube="8E0OQaDnq3c" />
					<CodeSample>
						{"<VideoPlayer height=\"400px\" noFullscreen width=\"600px\" youtube=\"8E0OQaDnq3c\" />"}
					</CodeSample>
				</Grid>
				<PropTable>
					<Prop description="CSS class" name="className" type="string" />
					<Prop description="Height of the iframe" name="height" type="string"/>
					<Prop description="Disable fullscreen (youtube only)" name="noFullscreen" type="boolean" />
					<Prop description="Style attribute" name="style" type="object" />
					<Prop description="Vimeo video id" name="vimeo" type="string" />
					<Prop description="Width of the iframe (e.g. '400px')" name="width" type="string" />
					<Prop description="Youtube video id" name="youtube" type="string" />
					<Prop description="Video URL" name="style" type="string" />
				</PropTable>
			</FormSection>
		);
	}
}

module.exports = VideoBox;
