import React from 'react'
import { Row,Col, Flex,Typography } from 'antd'
import {
  UsergroupAddOutlined,
} from '@ant-design/icons';

const {Title} = Typography

export default function dashboard() {
  return (
    <>
        <Row gutter={[20,20]}>
          <Col xs={24} sm={24} md={6} lg={6}>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Total Anggota</Title>
                </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Row gutter={[20,20]} style={{flexDirection:'column'}}>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Total Anggota</Title>
                </div>
              </Col>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Total Hadir</Title>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Row gutter={[20,20]} style={{flexDirection:'column'}}>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Hadir</Title>
                </div>
              </Col>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Izin</Title>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Row gutter={[20,20]} style={{flexDirection:'column'}}>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Absen</Title>
                </div>
              </Col>
              <Col>
                <div className="box-weather">
                  <Flex justify='space-between' align='center' vertical={false}>
                    <Title level={2} style={{lineHeight:'1.3em',margin:0,color:'#fff'}}>250</Title>
                    <div style={{background:'black',width:40,height:40,display:'flex',justifyContent:'center',borderRadius:'50%'}}>
                      <UsergroupAddOutlined style={{fontSize:25,color:'#69FF00'}}/>
                    </div>
                  </Flex>
                  <Title level={5} style={{color:'white'}}>Sakit</Title>
                </div>
              </Col>
            </Row>
          </Col>
      </Row>
    </>
  )
}
