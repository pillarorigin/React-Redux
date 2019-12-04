import { connect } from 'react-redux'
//  1. action
import { toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    //  2. filtering
    switch (filter) {
        // SHOW_ALL string
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            //todos는 array
            return todos.filter(todo => todo.completed) //완료가 된 애들만 꺼내겠다
        case VisibilityFilters.SHOW_ACTIVE :
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('Unknown filter:' + filter);
    }
}
//  3. 현재state를 props에 mapping 할 것이다
const mapStatetoProps = state => ({
    todos : getVisibleTodos(state.todos, state.visibilityFilter)
})
//  4. dispatch를 props에 mapping할 것이다
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
//  5. mapStatetoProps, mapDispatchToProps를 통해서 TodoList를 connect할 것이다 
export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(TodoList);