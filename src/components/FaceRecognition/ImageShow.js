import './FaceRecognition.css';

const ImageShow = ({imageLink, box}) => {
  return (
    <div style={{position: 'absolute'}}>
      <img
        src={imageLink}
        alt="api key"
        id="inputImage"
        style={{
          width: '500px',
          height: 'auto',
        }}
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      />
    </div>
  );
};

export default ImageShow;
