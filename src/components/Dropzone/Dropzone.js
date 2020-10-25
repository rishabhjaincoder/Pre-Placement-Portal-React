import React, { useState } from "react";
import "./styles.css";

import Dropzone from "react-dropzone";

const Dragndrop = () => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

//   return (
//     <div className="App">
//       <Dropzone onDrop={handleDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps({ className: "dropzone" })}>
//             <input {...getInputProps()} />
//             <p>Drag'n'drop files, or click to select files</p>
//           </div>
//         )}
//       </Dropzone>
//       <div>
//         <strong>Files:</strong>
//         <ul>
//           {fileNames.map(fileName => (
//             <li key={fileName}>{fileName}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// return (
//     <div className="App">
//       <Dropzone
//         onDrop={handleDrop}
//         accept="image/*"
//         minSize={1024}
//         maxSize={3072000}
//       >
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps({ className: "dropzone" })}>
//             <input {...getInputProps()} />
//             <p>Drag'n'drop images, or click to select files</p>
//           </div>
//         )}
//       </Dropzone>
//       {/*... code removed for brevity */}
//     </div>
//   );
return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          // additional CSS depends on dragging status
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Drag'n'drop images, or click to select files</p>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
}

export default Dragndrop;