import './galleryItems.css';

const GalleryItems = ({item}) =>{
    return(
        <div className="GalleryItems" style={{gridRowEnd: `span ${Math.ceil(item.height / 120)}`}}>
            <img src={item.media} alt="" />
        </div>

    )
}
export default GalleryItems;