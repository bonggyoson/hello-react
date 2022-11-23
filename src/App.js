import { Component } from 'react';
// import Counter from './Counter';
// import Say from './Say';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return (
      // <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      // <Counter/>
      // <Say/>
      // <EventPractice />
      // <ValidationSample />
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
      // <IterationSample />
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
