import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  

const Banner = () => {
    return (
        <div >
             <Carousel>
             <div>
                    <img 
                    className='mt-16 md:mt-0' src="https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/Best-wedding-photographers-India-Top-5-destination-wedding-photographers-Indian-weddings-2.jpg" />
                    
                </div>
                <div>
                    <img
                     className='mt-16 md:mt-0'
                     src="https://static.wixstatic.com/media/c46576_350a550a6e0b4227bdcb686eaacbba01~mv2.jpg/v1/fit/w_2500,h_1330,al_c/c46576_350a550a6e0b4227bdcb686eaacbba01~mv2.jpg" />
                </div>
                <div>
                    <img
                     className='mt-16 md:mt-0'
                    src="https://www.lagganlife.co.uk/wp-content/uploads/2021/09/dumfries-and-galloway-wedding-photography-hemera-visuals-1-002-1.jpg" />
                </div>
                <div>
                    <img 
                     className='mt-16 md:mt-0'
                    src="https://london-weddingphotographer.com/wp-content/uploads/2022/01/Old-Marylebone-Town-Hall-Wedding-20-1300x867.jpg.webp" />
                    
                </div>
                <div>
                    <img
                     className='mt-16 md:mt-0'
                    src="https://www.twigandvine.photography/wp-content/uploads/2023/07/Nottingham_wedding_photographer_4.jpg" />
                    
                </div>
               
                <div>
                    <img
                     className='mt-16 md:mt-0'
                    src="https://zoelarkin.com/wp-content/uploads/2021/02/Indian-couple-wedding-at-the-club-at-ruby-hill-by-zoe-larkin-photography.jpg" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;