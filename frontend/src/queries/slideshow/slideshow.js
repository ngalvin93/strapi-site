import gql from 'graphql-tag'

const SLIDESHOW_QUERY = gql`
    query Slideshow {
        slideshows {
        slideshow {
            id
            url
        }
        }
    }
`
export default SLIDESHOW_QUERY