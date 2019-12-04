### Redux
React+Redux는 상태관리를 하는 전용 장소(store)에서 상태를 관리하고, React 컴포넌트는 그걸 보여주기만 하는 용도로 쓰인다.

### 구성
```js
    //entry point
    1. src
        index.js 
            1) (Action & Action Creator 명시)
            2) Reducer 명시

    //component
    2. component
        App.js

    //Actions Creators
    3. actions
        index.js
            1) Action Creator 함수 => ({
                Action부분
                ㄱ) params : type
                ㄴ) params : 옵션
            })

    //Reducers 
    4. reducers
        index.js
            1) 사용할 reduce 함수들을 사용할 combineReducers
        todos.js
            1) 전달 인자 2개(state, action)
        visibilityFilter.js
    

    //dispatch
    5. dispatch

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

### Reducers
1. payload를 활용해서 상태값을 react에 반영하기 위해 사용.
2. 이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작
3. 초기상태는 Reducer의 디폴트 인수에서 정의된다.
(상태가 변할 때 전해진 state는 그 자체의 값으로 대체 되는 것이 아니라, 새로운 것이 합성되는 것처럼 쓰여진다.)
4.  대규모 개발에 Reducer를 미세하게 분할하는 경우 Redux에서 제공하는 `combineReducers`함수를 이용
(Reducer분할에 쓰인 Key가 그대로 State분할에도 쓰입니다.)

### dispatch
1. 앞에서 수행한 action을 dispatch화 한다.


### Ref 사이트
[react-redux] : https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6


### extension 
Bracket Pair Colorizer
