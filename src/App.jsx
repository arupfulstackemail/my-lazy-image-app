import LazyImage from "./components/LazyImage";



function App() {
  return (
    <div style={{ height: "150vh", paddingTop: "100vh" }}>
      <LazyImage
        src="https://picsum.photos/id/1015/600/400"
        alt="Lazy loaded example"
      />
    </div>
  );
}

export default App;

