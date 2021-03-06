/**************************************************************************************
 * 제목          : 프로젝트 올리기 메인
 * 소스파일 이름  : pages/project/index.js
 * 파일설명		   : 모든 프로젝트 올리기 페이지를 연결시킨다
 * 작성자		     : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	  : import react 추가
**************************************************************************************/
import React, { Component, useState } from 'react'
import { inject, observer } from 'mobx-react'

import Page from '../../components/Page'
import Start from './Start'
import Agreements from './Agreements'
import Summary from './Summary'
import Config from './Config'
import Account from './Account'
import Storytelling from './Storytelling'

const Contents = (props) => (
  <div>
    {props.id == 'start' && <Start />}
    {props.id == 'agreements' && <Agreements />}
    {props.id == 'summary' && <Summary />}
    {props.id == 'account' && <Account {...props}/>}
    {props.id == 'storytelling' && <Storytelling />}
    {props.id == 'config' && <Config />}
  </div>
)

@inject('userStore', 'web3', 'accounts', 'contract', 'campaign', 'coinbase', 'crowdfundProject', 'crowd_web3')
@observer
export default class extends Component {
  static getInitialProps ({ query: { id, title } }) {
    return { id, title }
  }

  render () { 
    console.log(this.props);
    
   return (
     <Page title={this.props.title} >
       <Contents {...this.props}/>
     </Page>
   )
 }
}
