import Link from 'next/link';
import { Header, Icon, Image, Input, Menu, Segment, Sidebar } from 'semantic-ui-react'


const HeaderBar =()=> (
  
<div>
<Menu secondary>
        <Menu.Item
          name='사이드바예정'
        />
        <Menu.Item
          name='Halsaram'
        />
        
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Link as='/log' href= '/login?id=login&title=로그인'>
              <a>login</a>
            </Link>
          </Menu.Item>
            
          <Menu.Item>
            <Link as='/p' href= '/project?id=start&title=프로젝트올리기'>
              <a>프로젝트 올리기</a>
            </Link>
          </Menu.Item>
         
        </Menu.Menu>
      </Menu>




        <Menu fluid widths={4}>
          <Menu.Item>
            <Link href='/'>
              <a>홈</a>
            </Link>
          </Menu.Item>
        
        <Menu.Item
          name='카테고리'
        />
        <Menu.Item
          name='새로운 프로젝트'
        />
        <Menu.Item
          name='성공임박 프로젝트'
        />

      </Menu>
      </div>


      
)










// const HeaderBar = () => (
//     <div>
//         <div className="ScrollTop__ScrollTopBtnWrapper-j9uqn7-0 cKbfhA" data-reactid="3">
//             <button className="ScrollTop__ScrollTopBtn-j9uqn7-1 bcbYyv" data-reactid="4"><span data-reactid="5">최상위로</span></button>
//             <i className="_3EDOT6mnWfo2CobuYD5UO7 _2PY6DpDelT9jvKKFjCr7gd _14AOh5T6DdcgeGZ5YUV9uR _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="6"></i>
//         </div>
//         <div data-reactid="7">
//             <div className="SiteHeader__SiteHeaderWrapper-q8dvod-0 iSuAdB" data-reactid="8">
//                 <div className="Header-ou4e17-0 cwcqcZ" data-reactid="9">
//                     <div className="Container-gci8y7-0 MskhC" data-reactid="10">
//                         <div className="SiteHeader__SiteHeaderMenu-q8dvod-1 fMekoE" data-reactid="11">
//                             <div>
//                                 <Link href='/'><a>
//                                     <Header as='h3'>
//                                         <Icon name='home' />
//                                         <Header.Content>Halsaram</Header.Content>
//                                     </Header>
//                                 </a></Link>
//                             </div>
//                             <div className="SiteHeader__LeftMenu-q8dvod-2 fbsOED" data-reactid="12">
//                                 <button className="SiteHeader__LinkButton-q8dvod-7 hLwNNy" data-reactid="13">
//                                     <Icon name='bars' />
//                                     <span className="SiteHeader__ItemLabel-q8dvod-8 hWygls" data-reactid="15">프로젝트 둘러보기</span>
//                                 </button>
//                                 <span className="SiteHeader__ForMobile-q8dvod-9 ihCbfB" data-reactid="16">
//                                     <Link as='/p' href='/project?id=start&title=프로젝트올리기'>
//                                         <a className="SiteHeader__LinkItem-q8dvod-6 dALTNz" data-reactid="17">
//                                             <span className="SiteHeader__ItemLabel-q8dvod-8 hWygls" data-reactid="18">프로젝트 올리기</span>
//                                         </a>
//                                     </Link>
//                                 </span>
//                             </div>
//                             {/* <div className="SiteHeader__CenterMenu-q8dvod-3 hbKGuE" data-reactid="19">
//                                 <a className="SiteHeader__ButtonLink-q8dvod-5 efdMbN" href="https://halsaram.com/" data-reactid="20">
//                                     <div className="TumblbugLogo-sc-5rx33z-0 iDsnca" data-reactid="21">
//                                         <svg id="halsaram_logo" viewbox="0 0 107.89 28.39" data-reactid="22">
//                                             <title data-reactid="23">Halsaram</title>
//                                             <p>halsaram</p>
//                                         </svg>
//                                     </div>
//                                 </a>
//                             </div> */}
//                             <div className="SiteHeader__RightMenu-q8dvod-4 cLNJqs" data-reactid="33">
//                                 <button className="SiteHeader__SearchButton-q8dvod-13 hmmaSW Button-sc-1x93b2b-0 eFQBDO" data-reactid="34"></button>
//                                 <Link as='/log' href= '/login?id=login&title=로그인'>
//                                     <a className="q8dvod-5-SiteHeader__ButtonLink-ktApHV kGropT"  data-reactid="35">
//                                         <span className="SiteHeader__ItemLabel-q8dvod-8 hWygls" data-reactid="36">로그인 / 회원가입</span>
//                                         <Image circular src='http://placehold.it/40x40' />
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
  
  export default HeaderBar;