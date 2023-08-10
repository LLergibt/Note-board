import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import NoteItems from './components/noteItems'
import NoteProvider from 'contexts/NoteProvider'
import RefreshProvider from 'contexts/RefreshProvider'
function App() {
  return (
    <>
    <NoteProvider>
    <RefreshProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<NoteItems/>}/>
        </Route>
      </Routes>
    </RefreshProvider>
    </NoteProvider>
    </>
  );
}

export default App;
