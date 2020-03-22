import React from 'react'
import Slideshow from '../../components/Slideshow'
import Query from "../../components/Query";
import SLIDESHOW_QUERY from '../../queries/slideshow/slideshow'

export default function HomeSlideshow() {
    return (
        <div>
            <Query query={SLIDESHOW_QUERY}>
                {({ data: { slideshows }}) => {
                    return <Slideshow slideshow={ slideshows[0].slideshow } />
                }}
            </Query>
        </div>
    )
}
