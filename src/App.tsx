import { useMode } from "./context/ModeContext";
import Header from "./UI/Header"
import Main from "./UI/Main"

function App() {

  const theme = useMode();

  return (
    <>
      <>
        <div className={`min-h-screen grid place-items-center grid-rows-[auto_1fr] ${theme.bg2}`}>
          <Header />
          <Main />
        </div>
      </>
    </>
  )
}

export default App
