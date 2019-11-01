/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지
 * 소스파일 이름  : pages/deteile/index.js
 * 파일설명		  : 모든 프로젝트 상세 페이지를 연결시킨다
 * 작성자		  : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-10
 * 최종수정일자    : 
 * 최종수정자	   : 
 * 최종수정내용	   : 
**************************************************************************************/

import React from 'react'
import Layout from '../../components/Layout'

import Story from './Story'
import Community from './Community'
import FundingGuide from './FundingGuide'

const Content = (props) => (
    <div>
        {props.url.query.id == null && <Story />}
        {props.url.query.id == 'story' && <Story />}
        {props.url.query.id == 'community' && <Community />}
        {props.url.query.id == 'fundingGuide' && <FundingGuide />}
    </div>
);

export default (props) => (
    <Layout title={props.url.query.title} >
        <Content url={props.url}/>
        <script type="application/javascript" async="" src="../static/js/application.js"></script>
    </Layout>
)
