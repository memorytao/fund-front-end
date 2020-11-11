export const brokders = async () => {
  const getAll = await fetch(`http://localhost:9999/api/companies`);
  return await getAll.json();
};

export const broker = async (id) => {
  id = "";
  const broker = await fetch(`http://localhost:9999/api/fund/${id}`);
  return await broker.json();
};
