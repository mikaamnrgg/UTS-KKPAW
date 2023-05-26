import React from 'react';

class Greeting extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    this.updateGreetingMessage();
    this.timerID = setInterval(
      () => this.updateGreetingMessage(),
      60000 // Update message every minute
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateGreetingMessage() {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      this.setState({ message: 'Selamat Pagi' });
    } else if (currentTime >= 12 && currentTime < 18) {
      this.setState({ message: 'Selamat Siang' });
    } else if (currentTime >= 18 && currentTime < 24) {
      this.setState({ message: 'Selamat Malam' });
    } else {
      this.setState({ message: 'Selamat Tidur' });
    }
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default Greeting;
