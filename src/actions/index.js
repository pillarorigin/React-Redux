let nextTodoId = 0;

//Action Creator 
export const addTodo = text => ({
    //Action
        //params 1: type (필수)
        type: 'ADD_TODO',
        //params 2: user.(옵션)
        id: nextTodoId++,
        // text : text
        text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
