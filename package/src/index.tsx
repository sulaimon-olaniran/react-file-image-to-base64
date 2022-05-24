import React, {useRef, ChangeEvent} from "react";
import moment from "moment";
import {Button} from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

interface componentProps {
  onCompleted: (result: object[]) => void;
  multiple?: boolean;
  CustomisedButton?: React.FC<{triggerInput: () => void}>;
  preferredButtonText?: string;
}

const ReactImageFileToBase64 = ({
  onCompleted,
  multiple,
  CustomisedButton,
  preferredButtonText,
}: componentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  //TRIGGERS THE FILE TO OPEN DEVICE FOLDER FOR IMAGE SELECTION
  const handleFilesSelection = () => {
    inputRef.current!.value = "";
    inputRef.current?.click();
  };

  const handleOnInputFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedFiles: any = event.target.files;

    const base64Files: object[] = [];

    //event.target.files  RETURN A FILELIST TYPE WHICH IS AN OBJECT
    //CONVERT SELECTED FILES DOCUMENT TO ARRAY AND MAP THROUGH
    Array.from(selectedFiles).map((file: any) => {
      //DOUBLE CHECK IF FILE TYPE MATCHES ACCEPTED EXTENSION CRITERIA
      if (!/\.(jpeg|jpg|png|gif)$/i.test(file.name)) return console.log("blah");
      const reader: any = new FileReader();

      reader.readAsDataURL(file);

      return (reader.onload = () => {
        //OBJECT OF FILE THAT'LL BE RETURNED TO THE USER
        const fileInfo: object = {
          file_name: file?.name,
          file_size: `${Math.round(file.size / 1000)} KB`,
          file_type: file?.type,
          last_modified: moment(file.lastModified).format(),
          base64_file: reader.result,
          default_file: file,
        };

        base64Files.push(fileInfo);

        if (base64Files.length === Array.from(selectedFiles).length) {
          onCompleted(base64Files);
        }
      });
    });
  };

  return (
    <label htmlFor="select_images" className="react-image-file-to-base64">
      <input
        type="file"
        name="create_media_input"
        id="create_media_input"
        accept="image/png, .jpeg, .jpg, .gif"
        ref={inputRef}
        multiple={multiple}
        onChange={handleOnInputFileChange}
        style={{display: "none"}}
      />
      {CustomisedButton ? (
        <CustomisedButton triggerInput={handleFilesSelection} />
      ) : (
        <Button
          variant="contained"
          onClick={handleFilesSelection}
          style={{textTransform: "initial"}}
        >
          <PhotoCameraOutlinedIcon style={{marginRight: "7px"}} />
          {preferredButtonText ? preferredButtonText : "Select files"}
        </Button>
      )}
    </label>
  );
};

export default ReactImageFileToBase64;

ReactImageFileToBase64.defaultProps = {
  multiple: false,
};
