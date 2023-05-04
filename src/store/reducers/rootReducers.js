const initState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "John2" },
    { id: 3, name: "John3" },
  ],
  post: [],
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case `DELETE_USER`:
      console.log(action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    case `CREATE_USER`:
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `Random Name With ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default rootReducers;
