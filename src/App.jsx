
import { ThemeProvider } from './Context/ThemeProvider'
import AppContent from './Componenets/AppContent'
import './App.css'
function App() {
 

  return (
  
      <ThemeProvider>
      
         <AppContent />
      </ThemeProvider>
  
  )
}

export default App;
