/**************************************************************************************
 * 제목          : 프로젝트 메뉴
 * 소스파일 이름  : pages/project/ProjectLink.js
 * 파일설명		   : 프로젝트 메뉴 부분
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-10-20
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 프로젝트의 메뉴바를 컴포넌트로 분리해서 작성
**************************************************************************************/

import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Menu, Segment, Grid, Button, Checkbox} from 'semantic-ui-react'


// 페이지 메뉴링크바
class ProjectLink extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
        
    render() { 
      const { activeItem } = this.state 
      return (
        <div>
          <Grid columns='equal'>
            <Grid.Row>
              <Menu pointing secondary>
                <Menu.Item
                name='Config'
                active={activeItem === 'Config'}
                onClick={this.handleItemClick}>
                  <Checkbox label=" "/>
                  <Link as='/p' href='/project?id=summary&title=프로젝트'>
                    <a>프로젝트 개요</a>
                  </Link>
                  </Menu.Item>


            <Menu.Item
              name='Summary'
              active={activeItem === 'Summary'}
               onClick={this.handleItemClick}
              >
                <Checkbox label=" "/>
                <Link as='x/p' href='/project?id=config&title=구성'>
                  <a>펀딩 및 선물 구성</a>
                </Link>
            </Menu.Item>

            <Menu.Item
              name='Storytelling'
              active={activeItem === '스토리텔링'}
              onClick={this.handleItemClick}>
                <Checkbox label=" "/>
                <Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
                <a>스토리텔링</a>
                </Link>
            </Menu.Item>

            <Menu.Item
              name='계좌 설정'
              active={activeItem === '계좌 설정'}
              onClick={this.handleItemClick}>
                <Checkbox label=" "/>
                <Link as='/p' href='/project?id=account&title=계좌'>
                <a>계좌 설정</a>
                </Link>
            </Menu.Item>
            
            <Menu.Menu position='right'>
              
            </Menu.Menu>
          </Menu>
          </Grid.Row>
    </Grid>
        </div>
        
      )
    }
}


export default ProjectLink



