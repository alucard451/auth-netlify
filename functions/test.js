exports.handler = async () => {
  console.log("function ran");

  const data = { name: "name", age: 19, job: "xd" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
