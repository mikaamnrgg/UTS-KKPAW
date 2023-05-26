import './App.css';
import FormValidation from './components/soal/jawaban/soal/jawaban/FormValidation';
import PhotoGallery from './components/soal/jawaban/soal/jawaban/PhotoGallery';

import Greeting from './components/soal/jawaban/soal/jawaban/gretting';
import Soal from './components/soal/jawaban/soal/jawaban/soal';

function App() {
  return (
    <div>
      <Soal />
      <h1>Halo, Mika</h1>
      <h1><Greeting /></h1><br></br>
      <h4>Silahkan isi data anda</h4>
      <FormValidation />
      <PhotoGallery />
  
    </div>
  );
  
}

export default App;
