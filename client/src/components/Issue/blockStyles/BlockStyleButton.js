import React from "react";


class BlockStyleButton extends React.Component {
	onToggle = event => {
		event.preventDefault();
		this.props.onToggle(this.props.style);
	};

	render() {
		let className = "RichEditor-styleButton";
		if (this.props.active) {
			className += " RichEditor-activeButton";
		}

		return (
			
			<span className={className} onClick={this.onToggle}>
				{this.props.label}
			</span>
		);
	}
}

export default BlockStyleButton;
