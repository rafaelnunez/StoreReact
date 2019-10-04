import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/CarouselItem";
import Footer from "../componets/Footer";
import "../assets/styles/App.scss";
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map(item => 
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      }

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales platzi initialState">
        <Carousel>
          {initialState.originals.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
