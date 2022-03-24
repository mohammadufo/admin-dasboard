export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'lewandowski',
    img: 'https://i.pinimg.com/564x/fd/be/ab/fdbeab63ac9740e0381ba5d14d2defa8.jpg',
    status: 'active',
    email: 'lewandowski@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Karim Benzema',
    img: 'https://i.pinimg.com/564x/20/28/00/202800deb3bf3f8673bef7b6e6852278.jpg',
    email: 'Benzema@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'CR7',
    img: 'https://i.pinimg.com/564x/21/c3/7f/21c37f5445a5296530e3ca91cdd5f42c.jpg',
    email: 'CR7@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Lukkaku',
    img: 'https://i.pinimg.com/564x/d8/f6/3d/d8f63dc3c3e3e4a40facfe7080c9d15c.jpg',
    email: 'Lukkaku@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Messie',
    img: 'https://i.pinimg.com/564x/fe/83/40/fe83400a83cb3f405965e30338a4da20.jpg',
    email: 'Messie@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Muller',
    img: 'https://i.pinimg.com/564x/8e/e6/01/8ee601fa2b31618deb42640d33cd5c97.jpg',
    email: 'Muller@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Mudrich',
    img: 'https://i.pinimg.com/736x/22/76/b1/2276b1eca2368f8475a059d9529248e1.jpg',
    email: 'Mudrich@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Hazard',
    img: 'https://i.pinimg.com/564x/45/5c/04/455c044153d851091d383dd1ccc53a5c.jpg',
    email: 'Hazard@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Nuer',
    img: 'https://i.pinimg.com/564x/20/fb/08/20fb08ddeac35371d12535931ae06807.jpg',
    email: 'Nuergmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Khabib',
    img: 'https://i.pinimg.com/564x/30/be/36/30be3607ca231493651aa2e827628511.jpg',
    email: 'Khabib@gmail.com',
    status: 'active',
    age: 65,
  },
];
