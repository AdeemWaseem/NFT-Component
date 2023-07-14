

import React, { useState, useEffect, useRef } from "react";
import { Box, Paper, Button } from "@mui/material";
import { Stage, Layer, Image } from "react-konva";
import BackgroundLayer from "./components/fileupload/layer.png";
import { convertLength } from "@mui/material/styles/cssUtils";

const Canvas = (charObj) => {
  const [background, setBackground] = useState(null);
  const [eyewear, setEyewear] = useState(null);

  const stageRef = useRef(null);

  // const canvasWidth = 300;
  // const canvasHeight = 275;
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
    // img.src = url + '?' + timestamp;
    image2.src = charObj.charObj.img1[0] + '?' + timestamp;
    console.log(image2.src, )
     
    image2.onload = () => {
      setEyewear(image2);
    };

    
image2.onerror = () => {
  // Handle error here
  const defaultImage = new window.Image();
  defaultImage.src = null;
  setEyewear(defaultImage);
 // setDefaultEyewear();
};

  }

  function downloadURI(uri, name) {
    console.log(name, 'name............')
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(stageRef.current.toDataURL(),"uriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
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

          <Layer rotationDeg={107} offsetY={300}>
            <Image
              // width={330}
              // height={410}
              width={816}
              height={1165}
              image={eyewear}
              // y={-80}
              // x={-170}
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
