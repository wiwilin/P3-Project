import React, { useState,useEffect } from 'react'
import {Button, Table, Modal,notification } from 'antd'
import axios from 'axios'
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { confirm } = Modal;

export default function NewsDraft() {
  const [dataSource, setdataSource] = useState([])

  const {username}  = JSON.parse(localStorage.getItem("token"))

  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`/news?author=${username}&auditState=0&_expand=category`).then(res=>{
      const list = res.data
      setdataSource(list)
    })
  },[username])


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render:(id)=>{
        return <b>{id}</b>
      }
    },
    {
      title: '新闻标题',
      dataIndex: 'title',
      render:(title,item)=>{
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>
      }
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '分类',
      dataIndex: 'category',
      render:(category)=>{
        return category.title
    }
    },
    {
      title: '操作',
      render:(item)=>{
        return <div>
          <Button type="primary" shape="circle" icon={<UploadOutlined/>} onClick={()=>handleCheck(item.id)}/>
          <Button type="button" shape="circle" icon={<EditOutlined/>} onClick={()=>{
            navigate(`/news-manage/update/${item.id}`, {replace:true})
          }}/>
          <Button danger shape="circle" icon={<DeleteOutlined/>} onClick={()=>confirmMethod(item)}/>
        </div>
      }
    },
  ];

  const handleCheck = (id)=>{
    axios.patch(`/news/${id}`,{
        auditState:1
    }).then(res=>{
        navigate('/audit-manage/list',{replace:true})

        notification.info({
            message: `通知`,
            description:
              `您可以到${'审核列表'}中查看您的新闻`,
            placement:"bottomRight"
        });
    })
}

  const confirmMethod = (item) =>{
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        // console.log('OK');
        deleteMethod(item)
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  const deleteMethod = (item)=>{
    // console.log(item)
    // setdataSource(dataSource.filter(data=>data.id!==item.id))
    // axios.delete(`/rights/${item.id}`)

    setdataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`/news/${item.id}`)
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}} rowKey={item=>item.id}/>
    </div>
  )
}