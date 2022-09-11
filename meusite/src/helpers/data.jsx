const getUser = async () => {
    const request = await fetch( 'https://api.github.com/users/tercioab');
    const requestJson = await request.json();
    return requestJson
};
  
export default getUser