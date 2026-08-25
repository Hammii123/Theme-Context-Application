
import { ThemeProvider } from './Context/ThemeProvider'
import './App.css'
import AppContent from './Componenets/AppContent'
function App() {
 

  return (
  
      <ThemeProvider>
      
         <AppContent />
      </ThemeProvider>
  
  )
}

export default App;
