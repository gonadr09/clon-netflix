import AuthProvider from "./features/auth/context/AuthProvider";
import AppRoutes from "./routes/App.routes";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
