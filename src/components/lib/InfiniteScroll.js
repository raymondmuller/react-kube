const React = require("react");

class InfiniteScroll extends React.Component {

  handleLoadMore(){
    this.props.onScrollEnd ? this.props.onScrollEnd : null;
  }

  topOfElement(element) {
    if (!element) {
      return 0;
    }
    return element.offsetTop + this.topOfElement(element.offsetParent);
  };

  componentWillUnmount() {
    this.detachScrollListener();
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  scrollListener() {
    let element = React.findDOMNode(this.refs.infiniteScroll);
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (this.topOfElement(element) + element.offsetHeight - scrollTop - window.innerHeight < this.props.offset) {
      this.handleLoadMore();
      this.detachScrollListener();
    }
  }

  attachScrollListener() {
    window.addEventListener('scroll', this.scrollListener.bind(this));
    window.addEventListener('resize', this.scrollListener.bind(this));
    this.scrollListener();
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.scrollListener.bind(this));
    window.removeEventListener('resize', this.scrollListener.bind(this));
  }

  render() {
    return (
      <span ref="infiniteScroll">
        {this.props.children}
      </span>
    );
  }
}

InfiniteScroll.propTypes = {
  children: React.PropTypes.element.isRequired,
  offset: React.PropTypes.number,
  onScrollEnd: React.PropTypes.func
};

InfiniteScroll.defaultProps = {offset: 5};

module.exports = InfiniteScroll;
