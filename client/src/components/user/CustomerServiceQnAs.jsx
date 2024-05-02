
function CustomerServiceQnAs({category, question, answer}) {
    return (
            <>
              <h2>Q {question}</h2>
              <p className="answer">{answer}</p>
            </>
    );
}

export default CustomerServiceQnAs;