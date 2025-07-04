const UsersData = ({ user }) => {
  const { name, email, password } = user;
  return (
    <div className='bg-white w-60 p-4 rounded-md text-black'>
      <div className='mb-3'>
        <p className='text-sm font-medium'>Name: {name}</p>
        <p className='text-sm font-medium'>Email: {email}</p>
        <p className='text-sm font-medium'>Password: {password}</p>
      </div>
    </div>
  );
};

export default UsersData;
