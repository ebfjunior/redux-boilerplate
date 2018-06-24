import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';

const mapStateToProps = ({ sampleReducer }) => ({ sampleReducer });

export default connect(mapStateToProps)(App);
