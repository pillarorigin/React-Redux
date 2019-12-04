//  1. module import
import React from 'react';
import { connect } from 'react-redux';

//  2. action import 
import { addTodo } from '../actions';

//  3. dispatch를 디스트럭처링({}) 해서 인자로 받겠다.
const AddTodo = ({ dispatch }) => {
    let input = null;
    const _addTodo = (e) => {
        e.preventDefault(); // 확산 막기
        if (!input.value.trim()) {
            return;
        }
        //  4. dispatch 사용 (input.value가 있을때 실행)
        dispatch(addTodo(input.value));
        input.value = '';
    }
    return (
        <div>
            {/* form tag에 onSubmit 걸면 enter 키 눌러도 보내짐 */}
            <form onSubmit={_addTodo}>
                {/* input에 node라는 값이 들어오고 dispatch에서 사용 */}
                <input ref={node => (input = node)} />
                <button type="submit">Add Todos</button>
            </form>
        </div>
    )
};

//  5. connect를 실행한 결과가 method인데 그 method를 실행한 결과를 export하겠다.(js 문법)
export default connect()(AddTodo);

