import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
    return (
        // textDecoration이라는 키값에 completed의 결과가 true이면 line-through false면 none
        <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
        </li>
    )
}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;