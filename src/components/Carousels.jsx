import './Carousels.css'
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel className='crsl1' indicators={false}>
            <Carousel.Item interval={1500}>
                <img src='https://thumbs.dreamstime.com/b/thai-students-school-sports-day-costume-marching-to-school-field-to-perform-sport-day-openning-wanthamaeria-thai-180611452.jpg?w=768' alt=''/>
                <div className='overlay'>
                </div>
                <Carousel.Caption className="carousel-caption-left">
                    <h3>"Annual Sports Day"</h3>
                    <p>Celebrating Excellence in Sports</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src='https://media.istockphoto.com/id/973293918/photo/kids-having-fun-watching-an-experiment-at-a-science-centre.jpg?s=612x612&w=0&k=20&c=vKif8HC44_mmwQzVmEmm0z6zlqW_7E1R8F7E4Q39_2o=' alt=''/>
                <div className='overlay'>
                </div>
                <Carousel.Caption className="carousel-caption-left">
                    <h3>"Science Exhibition"</h3>
                    <p>Showcasing Student Innovations</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src='https://media.istockphoto.com/id/458735567/photo/students-dancing-in-indian-costumes-for-23-april-festival.jpg?s=612x612&w=0&k=20&c=ayaNrmzl0fBNUBUQW864Oa718DSlFc1aCInlOlI1IB0=' alt=''/>
                <div className='overlay'>
                </div>
                <Carousel.Caption className="carousel-caption-left">
                    <h3>"Cultural Fest"</h3>
                    <p>Embracing Diversity and Creativity</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;