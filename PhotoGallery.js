import React from 'react';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          title: 'Foto 1',
          description: 'Sunset Terindah di Bumi Ternyata Salah Satunya di Bali',
          imageUrl: 'https://awsimages.detik.net.id/visual/2021/07/27/infografis-bali-masuk-deretan-destinasi-wisata-sunset-terindah-di-bumi-1_169.jpeg?w=650',
          width: 250, 
          height: 200,
         
        },
        {
          title: 'Foto 2',
          description: 'Salju Turun Terlalu Banyak, Swiss Pun Kewalahan',
          imageUrl: 'https://asset.kompas.com/crops/WOBcrriUHT_AK6HGbUAWeH2wD_s=/0x171:2048x1536/750x500/data/photo/2021/01/15/60018f2f5e4b6.jpeg',
          width: 250,
          height: 200,
         
        },
      
      ],
    };
  }

  render() {
    const { photos } = this.state;

    return (
      <div><br></br>
        <h1>Photo Gallery</h1>
        {photos.map((photo, index) => (
          <div key={index}><br></br>
            <img src={photo.imageUrl} alt={photo.title}
            width={photo.width}
            height={photo.height} /><br></br>
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PhotoGallery;
