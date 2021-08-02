import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadform';
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/model';
import {useState} from 'react';

function App() {
  const [selected, setSelected]  = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      {selected && <Modal setSelected={setSelected} selected={selected}/>}
    </div>
  );
}

export default App;
