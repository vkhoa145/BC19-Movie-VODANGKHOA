import React, { Component } from "react";
import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const {className,style,onClick} = props;
//   return (
//     <div className={`${className} ${styleSlick['slick-prev']}`} style={{...style,display:"block"}} onClick={onClick}></div>
//   );
// };
// function SamplePrevArrow(props) {
//   const {className,style,onClick} = props;
//   return (
//     <div className={`${className} ${styleSlick['slick-prev']}`} style={{...style,display:"block",left:"-50px"}} onClick={onClick}></div>
//   );
// };
export default class MultipleRows extends Component {
   
  // renderFilm =() => {
  //   return this.props.arrFilm.map((item,index)=>{
  //     <div className={`${styleSlick['width-item']}`} key={index}>
  //       <Film/>
  //     </div>
  //   })
  // };
  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      // nextArrow: <SampleNextArrow/>,
      // prevArrow: <SamplePrevArrow/>
      
    };
    return (
      <div>
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
          
          {/* {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()} */}
          
          
        </Slider>
      </div>
    );
  }
}