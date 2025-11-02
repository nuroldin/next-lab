async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if(!response.ok) throw new Error("Failed to fetch albums");

  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: {id: number, title: string}) => (
        <div
          key={album.id}
          className="bg-white text-black shadow-md rounded-lg p-4 transition"
        >
          <h3>{album.title}</h3>
          <p>Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;