import React,{useState,useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import PhoneFrame from '../PhoneFrame';
import { RWebShare } from 'react-web-share'
import { Layout, Button, Input, Space, Mentions } from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'

export default function Share(props) {

  const { Content, Footer } = Layout
    
    const { id } = useParams();
    const [color, setColor] = useState('grey');
    const [img, setImg] = useState(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`);
    const [lists, setLists] = useState(["a", "b"]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch( 'http://ec2-54-206-113-177.ap-southeast-2.compute.amazonaws.com:5000/GetShare', {
              method: 'POST',
              headers: {
               'Content-Type': 'application/json'
             },
              body: JSON.stringify(
                  {
                      id
                  }
              )
            });
            const res = await response.json();
            console.log(res);
            setColor(res.color);
            setImg(res.img);
            setLists(res.lists);

          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    
    }, []);
    const url = window.location.href
    
  return (
    <Layout>
    <Content>
    <div style={{float:'left', padding:'5%'}}>
            <PhoneFrame color={color} img={img} lists={lists}/>
    </div>
    </Content>
    </Layout>

  )
}
