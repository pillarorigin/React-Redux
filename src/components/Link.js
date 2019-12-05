import React from 'react';
import PropTypes from 'prop-types';

// {active, children, onClick} 이 3개의 인자는 props로 묶여서 옴
const Link = ({ active, children, onClick }) => (
    //익명함수 부분을 {}가 아닌 ()로 묶어서 button 클릭시 결과값이 바로 return 되게 작성
    <button onClick={ onClick } disabled={ active } style={{ marginLeft: '4px' }}>
        { children }
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;