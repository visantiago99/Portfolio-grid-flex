import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import recipe from '../images/recipe.gif';
import trivia from '../images/trivia.gif';
import money from '../images/money.gif';
import shoppingcart from '../images/shoppingcart.gif';


export default function Projects() {
  return (
    <div>
      <Header />
      <div className="main-container-proj">
          <div className="p-item">
              <a href='https://github.com/visantiago99/Recipes-App' target='_blank' rel='noreferrer'><img src={recipe} alt="recipe-gif" /></a>
          </div>
          <div className="i-item">
            <h2>A recipe App made with React, Hooks and context API, where you can see, search, filter, favorite and <br /> see all the steps of a food or drink.
            </h2>
          </div>
          <div className="p-item">
              <a href='https://github.com/visantiago99/Trivia-App-React-Redux' target='_blank' rel='noreferrer'><img src={trivia} alt="trivia-gif" /></a>
          </div>
          <div className="i-item">
            <h2>An app quiz like, made with React and Redux, where you can make your login to play, then your highest score will be displayed at the rank page of all players</h2>
          </div>
          <div className="p-item">
              <a href='https://github.com/visantiago99/Wallet-Coin-Converter' target='_blank' rel='noreferrer'><img src={money} alt="money-gif" /></a>
          </div>
          <div className="i-item">
            <h2>An expense management app, made with React and Redux, where you can convert your expenses too many currencies</h2>
          </div>
          <div className="p-item">
              <a href='https://github.com/visantiago99/shopping-cart' target='_blank' rel='noreferrer'><img src={shoppingcart} alt="shopping-gif"/></a>
          </div>
          <div className="i-item">
            <h2>An shopping cart page, like Amazon, where you can add and remove products from cart and filter products by categories and by words</h2>
          </div>
      </div>
        <div className="git-container">
          <div>
            <h2>You can check other projects and all of my repositories by clicking in the Octo Cat</h2>
          </div>
          <div>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'>
            <img src="https://octocat-generator-assets.githubusercontent.com/my-octocat-1628983230728.png" alt="myOcto" width="350px" height="350px" className="octo"/>
          </a>
          </div>
        </div>
      <Footer />
    </div>
  )
}
