import { useState } from "react";
import Slider from "@mui/joy/Slider";
import ColorButton from "./ColorButton";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { doc, setDoc, serverTimestamp} from "firebase/firestore";



import db from '../firebase.js';




function DrawBoard( ) {
   let size =  8;

  const [clickedCubes, setClickedCubes] = useState([]);

  const [isMouseDown, setIsMouseDown] = useState(false);

  const [color, setColor] = useState("wheat");

  const [sizeValue, setSizeValue] = useState(size);

  const [open, setOpen] = useState(false);

  const [creatorName, setCreatorName] = useState('');
  const [drawingName, setDrawingName] = useState('');

  var uploadedTimes = 0;
  

  let color1 = "#FF0060",
    color2 = "wheat",
    color3 = "#0096FF";

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseEnter = (i) => () => {
    if (isMouseDown) {
      setClickedCubes([...clickedCubes, i]);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSizeValue(newValue);
  };

  const clickHandler = (i) => () => {
    if (!clickedCubes.includes(i)) {
      setClickedCubes([...clickedCubes, i]);
    } else {
      setClickedCubes(clickedCubes.filter((cube) => cube !== i));
    }
    console.log(clickedCubes);
  };

  const ColorButtonClickHandler = (color) => () => {
    setColor(color);
  };
  const EraseHandler = () => () => {
    setClickedCubes([]);
  };

  const cubes = Array.from({ length: sizeValue * sizeValue }).map((_, i) => {
    const cubeStyle = clickedCubes.includes(i)
      ? { backgroundColor: color }
      : {};
    return (
      <div
        className="draw-cube"
        key={i}
        onMouseEnter={handleMouseEnter(i)}
        onClick={clickHandler(i)}
        style={cubeStyle}
      ></div>
    );
  });
  
  const downloadSvgHandle = () => () => {

    const svg = createSvg();
    const svgBlob = new Blob([svg], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "drawing.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

  }

  function createSvg() {
    let row = 0;
    let column = 0;
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 ${sizeValue} ${sizeValue}" fill="${color}">`;
    for(let i = 0; i < clickedCubes.length; i++){
      row = clickedCubes[i]/sizeValue; // number of times row is divisible by size
      row = Math.floor(row); // round down
      column = clickedCubes[i]%sizeValue;// remainder of column divided by size
      svg += `<rect x="${column}" y="${row}" width="${1}" height="${1}"/>`;
    }
    return svg + "</svg>";
  }

  
  

  const gridStyle = {
    gridTemplateRows: `repeat(${sizeValue}, 1fr)`,
    gridTemplateColumns: `repeat(${sizeValue}, 1fr)`,
  };
  
  const handleUpload = async () => {
    if(uploadedTimes < 2 && creatorName.length < 12 && drawingName.length < 12){
    let uniqueId = Math.floor(Math.random() * 1000000000);
    const data = {
      UserName: "User Name: " + creatorName,
      DrawingName: "Drawing Name: " + drawingName,
      TimeStamp: serverTimestamp(), 
      svg: createSvg(),
    }
      try {
        // Add a new document to the 'drawings' collection
        await setDoc(doc(db, "SVG", `Data${uniqueId}`), data);
        uploadedTimes++;

      } catch (error) {
        console.error('Error adding document: ', error);
      }

    
  }
  
  else {
    alert("You either reached the upload limit of 2 uploads or entered values over 12 characters long");
  }
  }


  

  return (
    <div className="draw-page">
      <div className="slider-contianer">
        <Slider
          color="neutral"
          size="lg"
          defaultValue={8}
          min={1}
          max={16}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
        ></Slider>
      </div>
      <div
        className="draw-container"
        style={gridStyle}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {cubes}
      </div>

      <div className="flex-draw-button">
        <ColorButton
          onClickhandle={ColorButtonClickHandler(color1)}
          color={color1}
        ></ColorButton>
        <ColorButton
          onClickhandle={ColorButtonClickHandler(color2)}
          color={color2}
        ></ColorButton>
        <ColorButton
          onClickhandle={ColorButtonClickHandler(color3)}
          color={color3}
        ></ColorButton>
      </div>
      <Box sx={{  width:'78%',maxWidth:'620px', display: 'flex', flexDirection:"row",  gap: 2 }}>
        <Button sx={{width:"20%"}} color="neutral" size="lg"  variant="solid" onClick={EraseHandler()}>Erase</Button>
        <Button sx={{width:'80%'}} color="success" size="lg" variant="soft" onClick={() => setOpen(true)} >Upload
        </Button>
    </Box>
   
      <Modal  sx={{ opacity: '90%'  }} open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ opacity: '100%', backgroundColor: '#525050' }}>
          <DialogTitle sx={{ color: 'wheat' }}>Upload Drawing</DialogTitle>
          <DialogContent sx={{ color: 'wheat' }}>This will Upload your drawing to the website server</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel sx={{ color: 'wheat' }}>Creator Name</FormLabel>
                <Input autoFocus required value={creatorName} onChange={e => setCreatorName(e.target.value)} inputProps={{ maxLength: 5 }}  />
              </FormControl>
              <FormControl>
                <FormLabel sx={{ color: 'wheat' }}>Drawing Name</FormLabel>
                <Input   min={5} required maxLength={5}  inputProps={{ maxLength: 5 }} value={drawingName} onChange={e => setDrawingName(e.target.value)}   />
              </FormControl>
              <Button onClick={handleUpload} color="success" variant="soft" type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <div className="flex-draw-button">
        
        <Button sx={ {margin: '1%', width:'100%'}}   size="lg" variant="soft"  onClick={downloadSvgHandle()}>Download as SVG
        </Button>
      </div>


   
    </div>






    
  );
}
export default DrawBoard;
