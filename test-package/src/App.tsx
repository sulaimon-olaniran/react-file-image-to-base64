import {useState} from "react";
import {Button} from "@mui/material";

import "./styles.scss";

import UploadeImageComponent from "./components/upload/UploadImage";
import ImagesPreviewComponent from "./components/images/ImagesPreview";

function App() {
  // HOLDS THE NUMBER OF IMAGE FILES THAT HAVE BEEN CONVERTED TO BASE64 FILE
  const [files, setFiles] = useState<object[]>([]);

  const handleOnCompleted = (result: object[]) => {
    setFiles(result);
    console.log(result);
  };

  // TO ADD MORE IMAGES TO INITIAL NUMBER OF SELECTED IMAGE FILES
  const handleAddMoreImages = (result: object[]) => {
    setFiles(prev => prev.concat(result));
  };

  const handleClearImages = () => {
    setFiles([]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>React Image File To Base64</h1>
        {files.length > 0 && (
          <Button variant="outlined" onClick={handleClearImages}>
            Clear Images
          </Button>
        )}
      </header>

      {files.length > 0 ? (
        <ImagesPreviewComponent
          images={files}
          handleAddMoreImages={handleAddMoreImages}
        />
      ) : (
        <UploadeImageComponent handleOnCompleted={handleOnCompleted} />
      )}
    </div>
  );
}

export default App;
