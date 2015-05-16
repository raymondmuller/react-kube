const React = require("react");

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false};
  }

  componentDidMount(){
    React.findDOMNode(this.refs.infiniteScrollWrapper).addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    React.findDOMNode(this.refs.infiniteScrollWrapper).removeEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if("isLoading" in nextProps) {
      this.setState({
        isLoading: nextProps.isLoading
      });
    }

    if(nextProps.finished){
      this.setState({
        finishedScrolling: nextProps.finished
      });
      React.findDOMNode(this.refs.infiniteScrollWrapper).removeEventListener("scroll", this.handleScroll.bind(this));
    }
  }

  handleScroll(){
    //this function will be triggered when the user scrolls
    let threshold = this.props.threshold ? this.props.threshold : 25;
    let innerHeight = React.findDOMNode(this.refs.infiniteScrollWrapper).offsetHeight;
    let scrollHeight = React.findDOMNode(this.refs.infiniteScrollWrapper).scrollHeight;
    let scrollTop = React.findDOMNode(this.refs.infiniteScrollWrapper).scrollTop;

    if(scrollTop + innerHeight + threshold > scrollHeight && !this.state.finishedScrolling){  //user reached at bottom
      if(!this.state.isLoading){  // avoid multiple request
        this.setState({
          isLoading: true
        });
        this.props.onScrollEnd ? this.props.onScrollEnd() : null;
      }
    }
  }

  render() {
    return (
      <div className={this.props.className} ref="infiniteScrollWrapper" style={this.props.style}>
      <span>
          {this.props.children}
      </span>
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  children: React.PropTypes.element.isRequired,
  className: React.PropTypes.string,
  finished: React.PropTypes.bool,
  isLoading: React.PropTypes.bool,
  onScrollEnd: React.PropTypes.func,
  style: React.PropTypes.object,
  threshold: React.PropTypes.number
};

module.exports = InfiniteScroll;
