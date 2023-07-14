import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Canvas from '../../Canvas';
import "./fileupload.css"
import layer from "./layer.png"


function FileUploadComponent() {
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [obj, setObj] = useState({ img1: '', img2: '' });
  const [urlInputs, setUrlInputs] = useState(['']);

  const handleUrlChange = (event, index) => {
    const newUrlInputs = [...urlInputs];
    newUrlInputs[index] = event.target.value;
    setUrlInputs(newUrlInputs);
    const updatedImages = [...images];
    updatedImages[index] = event.target.value;
    setImages(updatedImages);
    setObj({ ...obj, img1: updatedImages });
  };

  console.log(obj, "imagesObj");
  return (
    <>
 
<div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}}>
  <div style={{ 
    marginRight: "100px", 
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }}>
    {urlInputs.map((url, index) => (
      <div key={index} style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={url}
          onChange={(event) => handleUrlChange(event, index)}
          placeholder="Enter image URL"
          style={{
            width: "300px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    ))}
  </div>
</div>


      <div style={{ display: '' }}>
        <div style={{ marginRight: "20px", marginTop: "30px" }}>
          {images.length > 0 && <img src={images[0]} width={280} height={280} alt="" />}
        </div>
        <main>
          <div style={{ marginTop: "25px" }}>
            <Canvas charObj={obj} />
          </div>
          <div className="uploaded-row">
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  marginTop: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                  padding: '8px',
                  margin: "5px"
                }}
              >
                <div>{/* Render additional image information if needed */}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}



export default FileUploadComponent;
