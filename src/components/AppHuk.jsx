


 class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (state) => {
    return state.good + state.neutral + state.bad;
  };

 

  countPositiveFeedbackPercentage = (state) => {
    if (this.countTotalFeedback(state) === 0) {
      return 0;
    }
    return Math.floor(
      (state.good / (state.good + state.neutral + state.bad)) * 100
    );
  };
  handleCounter = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <>
        <div
          style={{
            // height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // fontSize: 40,
            color: '#010101',
          }}
        >
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleCounter}
            ></FeedbackOptions>
          </Section>
          <Section title={'Statistics'}>
            {this.countTotalFeedback(this.state) > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  this.state
                )}
              ></Statistics>
            ) : (
              <Notification message={'There is feedback'} />
            )}
          </Section>
        </div>
      </>
    );
  }
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
