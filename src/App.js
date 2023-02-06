import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import NoteItems from './components/noteItems'
function App() {
  return (
    <>
	  <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<NoteItems/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
