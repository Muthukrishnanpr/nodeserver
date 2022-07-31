import React, { useState, useEffect } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FileUploadScreen from './screens/FileUploadScreen';
import { getMultipleFiles, getSingleFiles } from './data/api'

const App = () => {
  const [singleFiles, setSingleFiles] = useState('')
  const [multipleFiles, setMultipleFiles] = useState('')
  const getSingleFileList = async () => {
    try {
      const fileslist = await getSingleFiles()
      setSingleFiles(fileslist)
      console.log(singleFiles)
    } catch (error) {
      console.log(error.message)
    }
  }
  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles()
      setMultipleFiles(fileslist)
      console.log(multipleFiles)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleFileList();
    getMultipleFilesList();
  }, []);
  return (
    <>
      <div className="container border pb-3 mt-5 bg-info">
        <h3 className="text-danger font-weight-bolder border-bottom text-center py-3 text-uppercase">Single & Multiple File Upload Using MERN Stack </h3>
        <FileUploadScreen getSingle={() => getSingleFileList()} getMultiple={() => getMultipleFilesList()} />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
            {/* <div className="col-6">
              <h4 className="text-success font-weight-bold">Single Files List</h4>
            </div>
          <div className="col-6">
            <h4 className="text-success font-weight-bold">Multiple Files List</h4>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default App;