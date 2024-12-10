import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="h1-bold">Hola mundo</h1>
    </>
  );
};

export default Home;
