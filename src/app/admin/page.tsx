
export default async function Admin() {
  const { user } = session!;
  const name = user?.name.replace(/ .*/, "");

  return (
    <>
      <H2 className="font-semibold ">Halo, Bro {name}👋</H2>
      <P>Here’s whats going on today</P>
    </>
  );
}
