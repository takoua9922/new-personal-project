import GalleryItems from "../GalleryItems/GalleryItems";
import "./gallery.css";

//temp data
const items = [
    { id: 1, media: "/pins/pin10.jpeg", widrh:1260, height:1260 },
    { id: 2, media: "/pins/pin1.jpeg" , widrh:500, height:500  },
    { id: 3, media: "/pins/pin2.jpeg", widrh:1500, height:1500  },
    { id: 4, media: "/pins/pin3.jpeg", widrh:1260, height:1260  },
    { id: 5, media: "/pins/pin4.jpeg", widrh:1260, height:1260  },
    { id: 6, media: "/pins/pin5.jpeg", widrh:1260, height:1260 },
    { id: 7, media: "/pins/pin25.jpeg", widrh:1260, height:1260  },
    { id: 8, media: "/pins/pin6.jpeg" , widrh:1600, height:1600  },
    { id: 9, media: "/pins/pin7.jpeg", widrh:1260, height:1260  },
    { id: 10, media: "/pins/pin8.jpeg", widrh:1260, height:1260  },
    { id: 11, media: "/pins/pin9.jpeg", widrh:1000, height:1000  },
    { id: 12, media: "/pins/pin11.jpeg", widrh:1260, height:1260 },
    { id: 13, media: "/pins/pin12.jpeg" , widrh:2000, height:2000  },
    { id: 14, media: "/pins/pin15.jpeg", widrh:1260, height:1260  },
    { id: 15, media: "/pins/pin13.jpeg", widrh:1260, height:1260  },
    { id: 16, media: "/pins/pin14.jpeg", widrh:800, height:800  },
    { id: 17, media: "/pins/pin16.jpeg", widrh:1260, height:1260 },
    { id: 18, media: "/pins/pin17.jpeg" , widrh:500, height:500  },
    { id: 19, media: "/pins/pin18.jpeg", widrh:1500, height:1500  },
    { id: 20, media: "/pins/pin19.jpeg", widrh:1260, height:1260  },
    { id: 21, media: "/pins/pin20.jpeg", widrh:1260, height:1260  },
    { id: 22, media: "/pins/pin21.jpeg" , widrh:1600, height:1600  },
    { id: 23, media: "/pins/pin22.jpeg", widrh:1260, height:1260  },
    { id: 24, media: "/pins/pin23.jpeg", widrh:1260, height:1260  },
    { id: 25, media: "/pins/pin24.jpeg", widrh:1000, height:1000  }
];


const Gallery = () => {
    return (
        <div className="gallery">
            {items.map(item =>(
                <GalleryItems key={item.id} item={item} /> 
            ))}
        </div>
    );
};

export default Gallery;
