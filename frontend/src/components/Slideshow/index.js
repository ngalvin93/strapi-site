import React from 'react'

const Slideshow = ({ slideshow }) => {

    function clickImg () {
        console.log('click', slideshow)
    }

    return (
        <div>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="true">
                <ul className="uk-slideshow-items">
                    {slideshow.map((image)=>{
                        return <li><img src={process.env.REACT_APP_BACKEND_URL + image.url} uk-conver /></li>
                    })}

                    {/* <li>
                        <img src="https://www.ikea.com/ext/us/homepage/images/inspiration/march/ideas_1.jpg" alt="as" uk-cover onClick={ clickImg } />
                    </li>
                    <li>
                        <img src="https://www.ikea.com/ext/us/homepage/images/inspiration/march/ideas_2.jpg" alt="as" uk-cover />
                    </li>
                    <li>
                        <img src="https://www.ikea.com/ext/us/homepage/images/inspiration/march/ideas_3.jpg" alt="ad" uk-cover />
                    </li> */}
                </ul>
            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
            </div>
        </div>
    )
}

export default Slideshow
