import { connect } from 'react-redux';
import Button from '../components/button';
import { makeBark } from '../actions/dog-actions';
/*
const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makeBark()); },
  actionLabel: 'Bark',
});
*/
const mapDispatchToProps = dispatch => (any);

export default connect(null, mapDispatchToProps)(Button);
