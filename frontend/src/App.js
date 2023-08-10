import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import NoteItems from './components/noteItems'
import NoteProvider, {onCreateNote} from 'contexts/NoteProvider'
function App() {
  return (
    <>
    <NoteProvider>
	  <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<NoteItems/>}/>
      </Route>
    </Routes>
  </NoteProvider>
    </>
  );
}

export default App;
