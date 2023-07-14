function FileUploadComponent() {
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [obj, setObj] = useState({ img1:'', img2: '' });
//    let imagesObj = {img1:''}
  
    const handleFileChange = (event) => {
      const { files } = event.target;
      const updatedImages = [...images];
      const updatedFileNames = [...fileNames];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        updatedImages.push(URL.createObjectURL(file));
        updatedFileNames.push(file.name);
       
      }
  
      setImages(updatedImages);
      setFileNames(updatedFileNames);
      setObj({ ...obj, img1: updatedImages});
    };
  
    const handleImageRemove = (index) => {
      const updatedImages = [...images];
      const updatedFileNames = [...fileNames];
  
      updatedImages.splice(index, 1);
      updatedFileNames.splice(index, 1);
  
      setImages(updatedImages);
      setObj(updatedImages)
      setFileNames(updatedFileNames);
    };
  console.log(obj,"imagesObj");
    return (
        <>
        <form action="" style={{marginRight:"100px", marginBottom:"20px"}}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="input-field"
            hidden
            multiple
            onChange={handleFileChange}
          />
          <button type="button" onClick={() => document.querySelector('.input-field').click()}>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browser Files to upload</p>
          </button>
        </form>
        <div style={{display:'flex'}}>
            <div style={{marginRight:"20px", marginTop:"30px"}}><img src={images[1]} width={280} height={280} alt=""  /></div>
            <main>
        
        <div style={{marginTop: "25px"}}>
  <Canvas charObj={obj} /></div>
        <div className="uploaded-row">
          {images.map((image, index) => (
            <div key={index} style={{padding:'10px', marginTop: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            padding: '8px',
            margin:"5px"}}>
              {/* <AiFillFileImage color="#1475cf" /> */}
              {/* <span>
                {fileNames[index]}
                <MdDelete onClick={() => handleImageRemove(index)} />
              </span> */}
              <div>
              
</div>
{/* <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
    <div><AiFillFileImage color="#1475cf" /> 
                {fileNames[index]}</div>
    <div><MdDelete onClick={() => handleImageRemove(index)} /></div>

                
</div> */}
            </div>
          ))}
          
        </div>
      </main>
        </div>
        </>
       
     
    );
  }


  //single image
  function FileUploadComponent() {
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [obj, setObj] = useState({ img1: '', img2: '' });
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const updatedImages = [...images];
      const updatedFileNames = [...fileNames];
  
      if (file) {
        updatedImages.push(URL.createObjectURL(file));
        updatedFileNames.push(file.name);
      }
  
      setImages(updatedImages);
      setFileNames(updatedFileNames);
      setObj({ ...obj, img1: updatedImages });
    };
  
    console.log(obj, "imagesObj");
    return (
      <>
        <form action="" style={{ marginRight: "100px", marginBottom: "20px" }}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="input-field"
            hidden
            onChange={handleFileChange}
          />
          <button type="button" onClick={() => document.querySelector('.input-field').click()}>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browser Files to upload</p>
          </button>
        </form>
        <div style={{ display: 'flex' }}>
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
  