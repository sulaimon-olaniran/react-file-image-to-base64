#

# 🚀 react-file-image-to-base64

## ⏺ Introduction

A simple React Component that helps converts image files from file type to base64 type.

---

## 🔧 Installation

      $ npm install --save react-file-image-to-base64

---

## 📖 Usage

### Import the Package

```javascript
import ReactImageFileToBase64 from "react-file-image-to-base64";
```

### Example with multiple set to false on input file type -

```javascript
const ExampleWithMultipleFalse = () => {
  const [image, setImage] = useState({});

  const handleOnCompleted = files => {
    //GET THE FIRST AND ONLY FILE IN THE ARRAY WHICH IS AN OBJECT
    setImage(files[0]);
  };
  return (
    <div>
      <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
    </div>
  );
};
```

### Example with multiple set to true on input file type -

```javascript
const ExampleWithMultipleTrue = () => {
  const [images, setImages] = useState([]);

  const handleOnCompleted = files => {
    setImages(files);
  };
  return (
    <div>
      <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted} />
    </div>
  );
};
```

### Example with preffered text in default input button -

```javascript
const ExampleWithPreferredText = () => {
  const [image, setImage] = useState([]);

  const handleOnCompleted = files => {
    setImage(files[0]);
  };

  return (
    <div>
      <ReactImageFileToBase64
        multiple={false} // MULTIPLE IS SET TO FALSE BY DEFAULT, SO FEEL FREE TO REMOVE THIS  CHUNK IF YOU WANT
        onCompleted={handleOnCompleted}
        preferredButtonText="Click Me !"
      />
    </div>
  );
};
```

### Example with customised button type -

```javascript
const ExampleWithCustomButton = () => {
  const [images, setImages] = useState([]);

  const handleOnCompleted = files => {
    setImages(files);
  };

  //CREATE A CUSTOMISED BUTTON COMPONENT TO YOUR TASTE
  const CustomisedButton = ({triggerInput}) => {
    //A PROP IS RETURNED TO YOUR CUSTOMISED BUTTON NAMED -triggerInput
    //MAKE SURE YOU GET THE PROP AND ADD IT TO AN ONCLICK EVENT ON YOUR CUSTOMISED BUTTON
    //triggerInput PROP OPENS UP POP OF DEVICE TO SELECT IMAGE
    return (
      <div>
        <button onClick={triggerInput}>Upload an Image</button>
      </div>
    );
  };
  return (
    <div>
      <ReactImageFileToBase64
        onCompleted={handleOnCompleted}
        CustomisedButton={CustomisedButton}
        multiple={true}
      />
    </div>
  );
};
```

Note that the `result` returns an array of object(s) in this format:

```javascript
[
  {
    base64_file: "THE_BASE64_FILE"
    default_file: "THE_ORIGINAL_FILE"
    file_name: "NAME_OF_FILE.jpeg"
    file_size: "SIZE_OF_FILE KB"
    file_type: "FILE_TYPE image/jpeg"
    last_modified: "LAST_MODIFIED_DATE_OF_FILE 2022-02-17T21:01:30+01:00"
  }
]

```

### Options :

| Option              |   Type    |   Default    | Description                                                                                                        |
| ------------------- | :-------: | :----------: | ------------------------------------------------------------------------------------------------------------------ |
| Multiple            |  Boolean  |    false     | it specifies that the user is allowed to select more than one image.                                               |
| preferredButtonText |  String   | Select files | The text displayed within the button that's clicked on to prompt user to select image files.                       |
| onCompleted         | Function  |    \_\_\_    | Function to run when user is done selecting image(s), returns the image files converted from files to Base64.      |
| CustomisedButton    | Component |    \_\_\_    | Create your own customised button component and include it to overule the default button component in the package. |

## ✅ Acknowledgements

- Naufal Rabbani - [react-file-base64](https://github.com/BosNaufal/react-file-base64)

- MDN Web Docs - [FileReader.readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)

---

---

## 📝 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Sulaimon Olaniran

---

## 📍 Contact

- Email : sulaimon.olaniran95@gmail.com
- Twitter : [sulai_m0n](https://twitter.com/sulai_m0n)

```

```
