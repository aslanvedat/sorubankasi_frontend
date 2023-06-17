import React from 'react';

class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      selectedOption: null,
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    fetch('https://example.com/api/questions')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          questions: data,
        });
      })
      .catch((error) => {
        console.error('Soru çekme hatası:', error);
      });
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  handleNextQuestion = () => {
    // Bir sonraki soruya geçmek için gerekli işlemleri yapın
    // Örneğin, currentQuestionIndex'i bir artırabilir ve seçenekleri sıfırlayabilirsiniz.
  };

  render() {
    const { questions, currentQuestionIndex, selectedOption } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="container">
        <h1>Quiz Ekranı</h1>
        {currentQuestion && (
          <form>
            <h2>{currentQuestion.question}</h2>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={this.handleOptionChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button type="button" onClick={this.handleNextQuestion}>
              Sonraki Soru
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default QuizScreen;
