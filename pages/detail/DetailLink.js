/**************************************************************************************
 * 제목          : 상세페이지 메뉴
 * 소스파일 이름  : pages/detail/DetailLink.js
 * 파일설명		   : 상세페이지 메뉴 부분
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-01
 * 최종수정일자 	: 2019-11-01
 * 최종수정자	   : 이은미
 * 최종수정내용	  : 상세페이지의 메뉴바를 컴포넌트로 분리해서 작성
**************************************************************************************/

import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Menu, Segment, Grid, Button, Checkbox } from 'semantic-ui-react'


// 페이지 메뉴링크바
class DetailLink extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Menu tabular widths={5}>
                            <Menu.Item
                                name='Story'
                                active={activeItem === 'Story'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/d' href='/detail?id=story&title=스토리'>
                                    <a>스토리</a>
                                </Link>
                            </Menu.Item>


                            <Menu.Item
                                name='Community'
                                active={activeItem === 'Community'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='x/d' href='/detail?id=community&title=커뮤니티'>
                                    <a>커뮤니티</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Item
                                name='FundingGuide'
                                active={activeItem === 'FundingGuide'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/d' href='/detail?id=fundingGuide&title=펀딩안내'>
                                    <a>펀딩안내</a>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}                                         

export default DetailLink