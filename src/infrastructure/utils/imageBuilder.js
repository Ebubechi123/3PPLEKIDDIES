import imageUrlBuilder from '@sanity/image-url'
import client from './client'


const builder = imageUrlBuilder(client)


const UrlFor =(source)=>{
    return builder.image(source)
}

export default UrlFor