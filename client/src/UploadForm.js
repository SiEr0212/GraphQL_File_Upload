import React from "react";
import { useMutation, gql } from "apollo/client";

const UPLOAD_File = gql`
mutation uploadFile($file: Upload!){
    upload(file: $file){
        url

    }
}
`;

export default function UploadForm() {
  
    const  [uploadFile] = useMutation(UPLOAD_File, {
        onCompleted: data => console.log(data)
    })


   const handleFileChange = e => {
       const file = e.target.file[0]
       if(!file) return 
       uploadFile({ variables: { file }})
   }

  return (
      <div>
      <h1 >Upload File</h1>
      <input type="file" onChange={ handleFileChange} />
      </div>
      )
}
