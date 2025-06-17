import "./gallery.css";

//temp data
const items = n[
    { id: 1, media: "/pins/pin20.jpeg", widrh:1260, height:1260 },
    { id: 2, media: "/pins/pin21.jpeg" , widrh:1260, height:1260  },
    { id: 3, media: "/pins/pin22.jpeg", widrh:1260, height:1260  },
    { id: 4, media: "/pins/pin23.jpeg", widrh:1260, height:1260  },
    { id: 5, media: "/pins/pin24.jpeg", widrh:1260, height:1260  }
];


const Gallery = () => {
    return (
        <div className="gallery">
            {items.map(item)}






        </div>
    );
};

export default Gallery;
