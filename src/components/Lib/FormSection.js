const React = require("react");

class FormSection extends React.Component {

    render() {
        return (
            <fieldset>
        		<legend>{this.props.name}</legend>
        		{this.props.children}
    		</fieldset>
        )
    }
}

module.exports = FormSection;



