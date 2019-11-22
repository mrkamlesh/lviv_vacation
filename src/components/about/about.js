import React, {Component} from 'react';
import VideoContainer from '../video/video';
import AboutContent from '../about/content';
import Navbar from '../Navbar/Navbar'

export default class AboutBlock extends Component {
    render() {
        return (
            <>
                <VideoContainer />
                <Navbar />  
                <main className="main_section">
                    <AboutContent className="history" 
                        content="Lviv is a city with a special atmosphere, which more than half a century was ruled by the kings."
                        content2="This is city of coffee, a city of lions, a city of jazz, rain, chocolate, terraces and passionate tango."
                        title="Beauty of Lviv" />

                    <AboutContent className="tourists"
                        content="Millions of tourists come to visit Ukraine in search of rich history."
                        content2="The highest mark of counted visitors to Ukraine came in 2013, when 24.7 million people visited the country."
                        title="Amount of tourists" />
        
                    <AboutContent className="contacts"
                        content="Write us: yuliana.sen@gmail.com, bnmstdkpi@gmail.com, oleksii@gmail.com"
                        content2="Phone us: 380978765432"
                        title="Contact us" />
                </main>
            </>
        )
    }
}