import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import ReactImageFileToBase64 from "react-file-image-to-base64";

interface componentProps {
  handleOnCompleted: (result: object[]) => void;
}

const UploadeImageComponent = ({handleOnCompleted}: componentProps) => {
  return (
    <div className="upload-image-component-container">
      <div className="upload-image-component-header-container">
        <CloudUploadIcon />
        <h1>
          <span>up</span>load
        </h1>
      </div>

      <div className="upload-image-component-body-container">
        <div className="photo-icon-container">
          <PhotoLibraryOutlinedIcon />
        </div>
        <p>Click on button below to select photo(s)</p>
        <ReactImageFileToBase64
          onCompleted={handleOnCompleted}
          multiple={true}
        />
      </div>
    </div>
  );
};

export default UploadeImageComponent;
