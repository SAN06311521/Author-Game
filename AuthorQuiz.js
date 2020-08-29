import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';

function Hero() {
  return(<div className="row">
    <div className = "jumbotron col-10 offest-1">
      <h1>The Author Guessing Game</h1>
      <p>Hey! This is a Author Guessing Game in which you have to select the book which is written by the author shown in the picture! All the Best.</p>
    </div>
  </div>);
}

function Book({title, onClick}){
  return (<div className="answer" onClick={() => {onClick(title);}}>
    <h4>{title}</h4>
  </div>)
}

function Turn({author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }
  return (<div className="row turn" style={{ backgroundColor : highlightToBgColor(highlight) }}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key = {title} onClick={onAnswerSelected}></Book>)}
      </div>
  </div>);
}

function Continue({ show, onContinue }) {
  return (
    <div className="row continue">
      { show
        ? <div className="col-11">
            <button className="btn btn-primary btn-lg float">Continue</button>
        </div>
        : null }
      
    </div>
  );
}

function Footer() {
  return(<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">All images are from <a href="www.google.com">this site</a> and are in public domain.</p>
    </div>
  </div>);
}


function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fuild">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue}/>
      <p><Link to="/add">Click here to Add your Author in the game!</Link></p>
      <Footer />
    </div>
  );
}


export default AuthorQuiz;
