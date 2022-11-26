import AuthProvider from "./features/auth/context/AuthProvider";
import TrailerProvider from "./features/trailer/context/TrailerProvider";
import AppRoutes from "./routes/App.routes";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TrailerProvider>
          <AppRoutes />
        </TrailerProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
