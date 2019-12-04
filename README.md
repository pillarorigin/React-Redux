### Redux
React+Redux는 상태관리를 하는 전용 장소(store)에서 상태를 관리하고, React 컴포넌트는 그걸 보여주기만 하는 용도로 쓰인다.

![img](https://miro.medium.com/max/1121/0*Z18iLsM7Bf1xoNth.)



### 구성
```js
    //  1. entry point
    src
        index.js
            1) (Action & Action Creator 명시)
            2) Reducer 명시

    //  2. components
        components
            App.js
            TodoList.js

    //  3. Actions Creators
        actions
            index.js
                1) Action Creator 함수 => ({
                    Action부분
                        ㄱ) params : type
                        ㄴ) params : 옵션
                })

    //  4. Reducers
        reducers
            index.js
                1) 사용할 reduce 함수들을 사용할 combineReducers
            todos.js
                1) 전달 인자 2개(state, action)
            visibilityFilter.js
    

    //  5. container
        container
            Addtodo.js
            VisibleTodoList.js


```

### Store
1. 상태(State)는 기본적으로 전부 여기서 집중관리 됩니다. 커다란 JSON의 결정체정도의 이미지입니다.
2. 상태(State)를 카테고리별로 분류


### Action Creator
1. Store에 대해 뭔가 하고 싶은 경우엔 Action 을 발행한다.
2. Store 내부 로직이 Action의 발생을 감지하면, State가 경신된다.
```js
export const function = param => ({
    type: "액션의 종류를 식별할 수 있는 문자열 혹은 심볼",
    payload: "액션의 실행에 필요한 임의의 데이터",
})
```
![img](https://miro.medium.com/max/1198/0*7j_lofjdmPM96Pb3.)


### Reducers

1. payload를 활용해서 상태값을 react에 반영하기 위해 사용.
2. 이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작
3. 초기상태는 Reducer의 디폴트 인수에서 정의된다.
(상태가 변할 때 전해진 state는 그 자체의 값으로 대체 되는 것이 아니라, 새로운 것이 합성되는 것처럼 쓰여진다.)
4.  대규모 개발에 Reducer를 미세하게 분할하는 경우 Redux에서 제공하는 `combineReducers`함수를 이용
(Reducer분할에 쓰인 Key가 그대로 State분할에도 쓰입니다.)
![img](https://miro.medium.com/max/1198/0*CwvI4QU26E-Ww8mb.)

### Component - Connect - Component
1. React의 Component자체는 Redux의 흐름에 타는 것이 불가능.
(흐름에 타기 위해서는 ReactRedux에 의해 제공 되는 `connect`라고 불리는 함수를 이용)
2. Component가 Store로부터 무언가 정보를 받는 경우, 그걸 props를 통해 받습니다. props는 immutable합니다. 다시말해, 상태가 변경될 때마다 새로운 Component가 다시 만들어진다는 의미
    2.1 Store가 가진 state를 어떻게 props에 엮을 지 정한다(이 동작을 정의하는 함수를 `mapStateToProps`라고 불립니다)
    2.2 Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정한다(이 동작을 정의하는 함수는 `mapDispatchToProps`라고 불립니다)
    2.3 위에 두가지가 적용된 props를 받을 Component를 정한다.
    2.4 Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환값이 된다.
![img](https://miro.medium.com/max/1197/0*fdVQeHMgpJbCn7xC.)


### mapStateToProps
1. 인수로 전달된 state는 전체를 의미한다는 것에 주의.
2. 기본적으로 필요한 것만 선별하여 props로 엮는다가 원칙
3. Reducers에서 switch문으로 분기를 나누는 것은 Reducer는 관계없는 action을 무시하고, 자기에게 주어진 action만을 처리하도록 하기 위함


### mapDispatchToProps
1. Action Creator에서 action을 만든다고 해도, 그것으론 아무 일도 일어나지 않는다.
2. 앞에서 만든 action을 `dispatch`함수에 넘겨 줘야만 한다.
3. Component 쪽에 하나하나 수동으로 dispatch하는 처리를 하지 않아도 되도록, 여기서 action의 생성부터 dispatch의 실행까지 한번에 이뤄질 수 있도록 함수를 정의하여 props에 넘겨주도록 한다


### bindActionCreators
1. Action Creator(아래에서는 addValue)와 dispatch를 같이 사용 가능.
```js
//import 생략
const Counter = ({value, addValue}) => (<div> 중략 </div>)
export default connect (
    state => ({value : state.value}),
    dispatch => bindActionCreators({addValue}, dispatch) (Counter)
)
```
![img](https://miro.medium.com/max/1198/0*UklHd1ROOZGZX0UE.)


### Container
1. 수많은 Component가 리스트 형식으로 모여있는데 가운데 각 요소의 Component를 각각 연결하면 수습이 안 되므로, 대표적인 자식요소를 안고 있는 하나의 부모Component가 connect 되는 경우
2. 이 대표로서 connect될 부모 Component를 Container라고 부릅니다. Container는 가독성을 높이기 위해, Component와는 디렉토리를 따로 나누는 경우가 많습니다.
```js
    AddTodo.js
    VisibleTodoList.js
```
![img](https://miro.medium.com/max/1121/0*NLC2HyJRjh0_3r0e.)


### Redux Saga
1. Saga는 제너레이터 함수이기 때문에, 비동기처리를 간단히 다룰 수 있다.
2. yield take(ACTION_TYPE)으로 지정한 action의 발생을 감시한다.
3. 가져온 action을 구워먹고 삶아먹고 마음대로 할 수 있다.
4. yield put(action)의 결과를 다른 action으로 내보낼 수 있다.


### Ref 사이트
[react-redux] : https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6
[redux-saga] : https://qiita.com/kuy/items/716affc808ebb3e1e8ac

### extension 
Bracket Pair Colorizer
$ npm i prop-types

