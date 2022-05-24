import {useState} from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ReactImageFileToBase64 from "react-file-image-to-base64";

interface componentProps {
  images: object[];
  handleAddMoreImages: (result: object[]) => void;
}

interface currentImage {
  base64_file?: string;
  file_name?: string;
}

interface customisedButtonProps {
  triggerInput: () => void;
}

//A CUSTOMISED BUTTON COMPONENT, TO SHOW YOU CAN USE ANY TYPE OF TRIGGER BUTTON YOU WANT
const CustomisedUploadImageButton = ({triggerInput}: customisedButtonProps) => {
  return (
    <div className="customised-upload-image-button" onClick={triggerInput}>
      <AddOutlinedIcon />
    </div>
  );
};

const ImagesPreviewComponent = ({
  images,
  handleAddMoreImages,
}: componentProps) => {
  const [currentImage, setCurrentImage] = useState<currentImage>(images[0]);

  const handleSetCurrentImage = (image: object) => {
    setCurrentImage(image);
  };

  return (
    <div className="images-preview-component-container">
      <div className="preview-current-image-container">
        <div className="preview-image-image">
          <img src={currentImage?.base64_file} alt="Preview_Image" />
        </div>

        <div className="preview-image-details">
          <p>
            Name : <span>{currentImage.file_name}</span>
          </p>
        </div>
      </div>

      <div className="preview-images-component-footer">
        <div className="footer-images-list-container">
          {images.map((image: typeof currentImage, index): any => {
            return (
              <div
                className={`preview-images-list-each-image ${
                  image.file_name === currentImage.file_name &&
                  "image-is-active"
                }`}
                key={index}
              >
                <img
                  src={image.base64_file}
                  alt="select"
                  onClick={() => handleSetCurrentImage(image)}
                />
              </div>
            );
          })}

          <ReactImageFileToBase64
            onCompleted={handleAddMoreImages}
            CustomisedButton={CustomisedUploadImageButton}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesPreviewComponent;
