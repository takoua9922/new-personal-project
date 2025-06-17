import { Link } from 'react-router';
import './galleryItems.css';

const GalleryItems = ({item}) =>{
    return(
        <div className="GalleryItems" style={{gridRowEnd: `span ${Math.ceil(item.height / 120)}`}}>
            <img src={item.media} alt="" />
            <Link to={'/pin/${item.id}'} className="overlay"/>
            <button className="saveButton">save</button>
            <div className='overlayIcons'>
                <button>
                    <img src="/general/share.svg" alt="heart icon" />
                </button>
                <button>
                    <img src="/general/share.svg" alt="share icon" />
                </button>
                </div>
        
        </div>

    )
}

export default GalleryItems;