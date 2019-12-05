import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link';

//constainer에서 해주는 역할이 mapping(STATE-PROPS)
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.VisibilityFilter
});

// mapping(DISPATCH - PROPS)
const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick에 함수 자체로 dispatch 동작이 걸려있음.
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

//connect의 결과가 함수이므로 (인자)(연결할 component);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);