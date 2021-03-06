import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import asset from '../../../images/banner/Asset.png';
import assetbg from '../../../images/banner/assetbg.png';
import earth from '../../../images/banner/earth.png';
import box from '../../../images/banner/box.png';
import circle from '../../../images/banner/circle.png';
import light from '../../../images/banner/light.png';
import galaxy from '../../../images/banner/galaxy.png';


const Banner = () => {
    return (
        <>
        <div className='position-relative'>

        <p className='position-absolute start-0 translate-middle  bannerBgBlur'></p>

        <Container >
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={5} className='position-relative'>
            <img className='bannerBox position-absolute top-0' src={box} alt="" />
            
              <div style={{backgroundColor:'#090909',width:'302px'}} className='d-flex justify-content-start align-items-center p-3'>
                  <img className='bannerWcImg' src={earth} alt="" />
                  <p className='bannerWc'>Welcome to Stella</p>

              </div>
              
              <p className='bannerTitle'>SPACE FOR <br /> EVERYONE</p>
              <p className='bannerBody'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>

              <button className='bannerBtn'>GET START</button>

            </Col>

            <Col xs={12} md={7} className='position-relative'>
              <img className='bannerImg img-fluid' src={asset} alt="" />
              <img className='bannerLight position-absolute top-0' src={light} alt="" />
              <img className='bannerGalaxy position-absolute' src={galaxy} alt="" />
              
              
            </Col>
          </Row>
        </Container>
        <img className='bannerCircle position-absolute img-fluid' src={circle} alt="" />
        <img className='position-absolute  bannerAssetBg ' src={assetbg} alt="" />
        

        </div>
          </>
    );
};

export default Banner;