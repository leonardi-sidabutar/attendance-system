import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
// FireBase
import app from "../../firebaseConfig"
import {getDatabase,ref,get} from 'firebase/database';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <span>Invite {record.name}</span>
        <span>Delete</span>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Anngota = () => {

  const [load, setLoad] = useState(false);

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        setLoad(true);
        
        const db = getDatabase(app);
        const dbRef = ref(db,"users");
        const snapshot = await get(dbRef);

        if(snapshot.exists()){
          console.log("users data: ",snapshot.val());
        }else{
          console.log("No Data Available")
        }
      } catch (error) {
        console.error("Error Fetching Data Users:",error)
      } finally {
        setLoad(false)
      }
    }
    fetchUser();
  },[])

  return(
    <>
      {
        load ?
          (<p style={{color:'white'}}>Tunggu...</p>) : ('')
      }
      <Table columns={columns} dataSource={data} theme={'dark'} scroll={{ x: 'max-content' }}/>
    </>
  )
}
export default Anngota;