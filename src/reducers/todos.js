//전달 인자 2개 필수 (state, action)
const todos = (state = [], action) => {
    //state => undefined인 경우가 있는데 그때 [](빈 배열이 리턴되므로)
    //switch 조건문 (검사할 변수)
    switch (action.type) { //action.type을 검사하고 그에 해당하는 조건문을 실행
        //ADD_TODO가 하는 일은 DB요소를 변경하는게 아니라 리액트 요소를 변경하게 하는 역할임(reducer)
        case 'ADD_TODO':
            //returen 되는 값으로 state가 변경
            return [
                //  1. 전개 연산
                ...state,
                //  2. 전달 받은 action을 사용
                { id: action.id, text: action.text, completed: false }
            ]
        case 'TOOGLE_TODO':
            // 바꿔야할 targer을 발견하면 앞의 로직을 반환 (map의 return 값은 array임)
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);

        default :
            return state
    }
}
export default todos;