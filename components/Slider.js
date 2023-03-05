import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import armaflex from "../photos/armaflex.jpeg";
import ductwrap from "../photos/ductwrap.jpeg";
import roofpiping from "../photos/roofpiping.jpeg";


const items = [
  {
    src: "https://www.snipsmag.com/ext/resources/issues/2017/June/insulation/Ductwork-feature.jpg?t=1495559906&width=900",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://www.harosinsulation.com/wp-content/uploads/2019/03/IMG_1647-1.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "http://cdn.coverstand.com/11092/688194/article_assets/dd7d7f376c6c1e9f7cee5a3cc7a42276266cfde4.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (

        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>

          <img className="w-100" style={{height:"50vh"}} src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
          {/* <Image src={verticalpicture} layout="fill" alt="green" /> */}

          
        </CarouselItem>

      );
    });


    return (


      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>

        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        
        {slides}

        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />

      </Carousel>
    
    
    );
  }
}


export default Slider;