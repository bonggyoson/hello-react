import { Component } from 'react';
// import Counter from './Counter';
// import Say from './Say';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      // <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      // <Counter/>
      // <Say/>
      // <EventPractice />
      // <ValidationSample />
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
export default App;
