import React from 'react'
import MultipleRows from '../../../components/Slick/ReactSlick'
import Banner from '../components/Banner';
import Cinema from '../components/Cinema';
import MovieShowing from '../components/MovieShowing';

const Home = () => {
  return (
    <div>
        <Banner/>
        {/* <section>
          <div className="container px-5 py-24 mx-auto">
            <MultipleRows arrFilm={arrFilm}/>
          </div>
        </section> */}
        <MovieShowing/>
        <Cinema/>
       

    </div>
  )
}

export default Home