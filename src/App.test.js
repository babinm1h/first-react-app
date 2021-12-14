import { render, screen } from '@testing-library/react';
import { addNewPost } from './action/actionCreators';
import App from './App';
import { ProfileReducer } from './Reducers/ProfileReducer';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("array length should be 4", () => {

  const action = addNewPost("999")

  let state = {
    posts: [
      { id: 1, text: "Good luck!", likes: 777 },
      { id: 2, text: "Some text 123", likes: 10 },
      { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing.", likes: 27 },
    ]
  }

  const updatedState = ProfileReducer(state, action)

  expect(updatedState.posts.length).toBe(4)
})