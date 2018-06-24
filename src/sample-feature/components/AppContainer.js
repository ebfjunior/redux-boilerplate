import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ sampleReducer }) => ({ sampleReducer });

export default connect(mapStateToProps)(App);
