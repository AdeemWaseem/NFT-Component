// import React, { useState, useEffect, useRef } from "react";
// import { Box, Paper, Button } from "@mui/material";
// import { Stage, Layer, Image } from "react-konva";
// import BackgroundLayer from "./components/fileupload/layer.png";


// const Canvas = (charObj) => {
//   const [background, setBackground] = useState(null);
//   const [eyewear, setEyewear] = useState(null);

//   const stageRef = useRef(null);

 
//   const canvasWidth = 1000;
//   const canvasHeight = 716;

//   useEffect(() => {
//     loadImage();
//   }, [charObj]);

//   function loadImage() {
//     const image1 = new window.Image();
//     image1.src = BackgroundLayer;
//     image1.onload = () => {
//       setBackground(image1);
//     };

//     const image2 = new window.Image();
//     var timestamp = new Date().getTime();
//     image2.crossOrigin = "Anonymous";
//     image2.src = charObj.charObj.img1[0] + '?' + timestamp;
//     console.log(image2.src, )
     
//     image2.onload = () => {
//       setEyewear(image2);
//     };

    
// image2.onerror = () => {
//   // Handle error here
//   const defaultImage = new window.Image();
//   defaultImage.src = null;
//   setEyewear(defaultImage);
 
// };

//   }

//   function downloadURI(uri, name) {
//     console.log(name, 'name............')
//     var link = document.createElement("a");
//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }

//   const handleExport = () => {
//     const uri = stageRef.current.toDataURL();
//     console.log(stageRef.current.toDataURL(),"uriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
//     downloadURI(uri, "image.jpg");
//   };

//   return (
//     <Box textAlign="center" sx={{ width: canvasWidth, paddingTop: 1 }}>
//       <Paper elevation={4} sx={{ background: "#D9D9D9" }}>
//         <Stage width={canvasWidth} height={canvasHeight} ref={stageRef}>
//           <Layer>
//             <Image
//               width={canvasWidth}
//               height={canvasHeight}
//               image={background}
//               y={0}
//               x={0}
//             />
//           </Layer>

          
//           <Layer rotationDeg={107} offsetY={300} >
//             <Image
//               width={816}
//               height={1165}
//               image={eyewear}
//               y={-865}
//               x={-438}
             
//             />
//           </Layer>
          
//         </Stage>
//       </Paper>
//       <Button onClick={handleExport}>Download Image</Button>
//     </Box>
//   );
// };

// export default Canvas;


import React, { useState, useEffect, useRef } from "react";
import { Box, Paper, Button } from "@mui/material";
import { Stage, Layer, Image } from "react-konva";
import BackgroundLayer from "./components/fileupload/layer.png";
import TextureImage from "./texture.png";

const Canvas = (charObj) => {
  const [background, setBackground] = useState(null);
  const [eyewear, setEyewear] = useState(null);
  const [texture, setTexture] = useState(null);

  const stageRef = useRef(null);

  const canvasWidth = 1000;
  const canvasHeight = 716;

  useEffect(() => {
    loadImage();
  }, [charObj]);

  function loadImage() {
    const image1 = new window.Image();
    image1.src = BackgroundLayer;
    image1.onload = () => {
      setBackground(image1);
    };

    const image2 = new window.Image();
    var timestamp = new Date().getTime();
    image2.crossOrigin = "Anonymous";
    image2.src = charObj.charObj.img1[0] + "?" + timestamp;
    console.log(image2.src);

    image2.onload = () => {
      setEyewear(image2);
    };

    image2.onerror = () => {
      const defaultImage = new window.Image();
      defaultImage.src = null;
      setEyewear(defaultImage);
    };

    const image3 = new window.Image();
    image3.src = TextureImage;
    image3.onload = () => {
      setTexture(image3);
    };
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const canvas = stageRef.current.getStage().toCanvas();
    const context = canvas.getContext("2d");

    context.globalAlpha = 0.5; // Adjust the opacity as needed
    context.drawImage(texture, 0, 0, canvas.width, canvas.height);

    const uri = canvas.toDataURL();
    downloadURI(uri, "image.jpg");
  };

  return (
    <Box textAlign="center" sx={{ width: canvasWidth, paddingTop: 1 }}>
      <Paper elevation={4} sx={{ background: "#D9D9D9" }}>
        <Stage width={canvasWidth} height={canvasHeight} ref={stageRef}>
          <Layer>
            <Image
              width={canvasWidth}
              height={canvasHeight}
              image={background}
              y={0}
              x={0}
            />
          </Layer>

          <Layer>
            <Image
              width={canvasWidth}
              height={canvasHeight}
              image={texture}
              opacity={0.5} // Adjust the opacity as needed
              y={0}
              x={0}
            />
          </Layer>

          <Layer rotationDeg={107} offsetY={300}>
            <Image
              width={816}
              height={1165}
              image={eyewear}
              y={-865}
              x={-438}
            />
          </Layer>
        </Stage>
      </Paper>
      <Button onClick={handleExport}>Download Image</Button>
    </Box>
  );
};

export default Canvas;
