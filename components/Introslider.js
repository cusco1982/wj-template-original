import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

// import armaflex from "../photos/armaflex.jpeg"
// import Image from 'next/image'



function Introslider() {
    return (
        <Carousel
            fade controls={false}
            indicators={false}
        >


            <Carousel.Item interval={10000}>

                <Image

                    // layout="fill"
                    fluid={true}
                    className="d-block w-100"
                    style={{height:"500px"}}
                    // src={armaflex}
                    src="https://www.celebritycruises.com/blog/content/uploads/2021/02/alaska-mountains-hero-denali-1920x890.jpg"
                    alt="First slide"


                ></Image>


                {/* <Carousel.Caption><h3>First slide label</h3><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Carousel.Caption> */}
            </Carousel.Item>




            <Carousel.Item interval={10000}>
                <Image
                    fluid={true}
                    // layout="fill"
                    style={{height:"500px"}}
                    className="d-block w-100"
                    src="https://img.uhdpaper.com/wallpaper/anime-girl-art-652@0@f-thumb.jpg?dl"
                    alt="Second slide"
                ></Image>
            </Carousel.Item>



            <Carousel.Item interval={10000}>
                <Image
                    fluid={true}
                    style={{height:"500px"}}
                    // layout="fill"
                    className="d-block w-100"
                    src="https://cdn.mos.cms.futurecdn.net/TPbXrbKxUtvyVWL9hk6VYb-1920-80.jpg.webp"
                    alt="Third slide"
                ></Image>
            </Carousel.Item>




        </Carousel>
    );
}

export default Introslider;