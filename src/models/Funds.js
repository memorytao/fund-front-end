
export const brokders = async () => {
  const getAll = await fetch(`http://localhost:9999/api/companies`);
  // const getAll = await fetch(`https://fierce-journey-08613.herokuapp.com/api/companies`);
  return await getAll.json();
};

export const broker = async (id) => {
  id = "";
  const broker = await fetch(`http://localhost:9999/api/fund/${id}`);
  return broker.json();
};

// createData(res.unique_id, res.name_th, res.name_en, res.last_upd_date);