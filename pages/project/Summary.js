/**************************************************************************************
 * 제목          : 프로젝트 올리기 개요 페이지
 * 소스파일 이름  : pages/prject/Start.js
 * 파일설명		   : 프로젝트 개요 페이지 / 프로젝트 개요, 프로젝트 창작자 입력하는 페이지
 * 작성자		   : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-05
 * 최종수정자	   : 정휘선
 * 최종수정내용	  : 상단 주석 처리
**************************************************************************************/
import Link from 'next/link';

const ProjectLink = (props) => (
    <div className="_13KHfN73YmQgsYHxXvuh_J _3qrj1CcqiU767c8teG6imW _2Xkf-oIN3dW3T7P_qmRJv3">
		<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
			<Link as='/p' href='/project?id=summary&title=프로젝트'><a className="rLqvd1axk9i-3cU72yTkF _3Syz9fGXYtzMNqK_55A2BW" href="https://tumblbug.com/edit-project/4d379f8d-dc10-4af9-82a0-4b839f9f1794/sections/project-outline">
				<h5><i className="_13KHfN73YmQgsYHxXvuh_J _1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><label><span><span>프로젝트</span>
					<span>개요</span></span></label></h5>
			</a></Link>
			<Link as='/p' href='/project?id=config&title=구성'><a className="rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/edit-project/4d379f8d-dc10-4af9-82a0-4b839f9f1794/sections/funding-reward">
				<h5><i className="_13KHfN73YmQgsYHxXvuh_J _1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><label><span><span>펀딩 및</span>
					<span>선물 구성</span></span></label></h5>
			</a></Link>
			<Link as='/p' href='/project?id=storytelling&title=스토리텔링'><a className="rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/edit-project/4d379f8d-dc10-4af9-82a0-4b839f9f1794/sections/storytelling">
				<h5><i className="_13KHfN73YmQgsYHxXvuh_J _1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><label><span><span>스토리</span><span>텔링</span></span></label></h5>
			</a></Link>
			<Link as='/p' href='/project?id=account&title=계좌'><a className="rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/edit-project/4d379f8d-dc10-4af9-82a0-4b839f9f1794/sections/account-setup">
				<h5><i className="_13KHfN73YmQgsYHxXvuh_J _1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><label><span><span>계좌</span>
					<span>설정</span></span></label></h5>
			</a></Link>
		</div>
	</div>
)

const Summary = () => (
	<div>
		<header className="_13KHfN73YmQgsYHxXvuh_J _1roJokHGjgDRbKmh0exptw">
			{/* <div className="_23XXQ4Vzo-Xj_S_h3Wh5D">
				<nav className="_15wNinHQvpbIp0_Wz43mfO">
					<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
						<a className="_36JoJH6uhmIKdE1bWDYUlM rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/u/dasepatamugabepo"><i className="_36JoJH6uhmIKdE1bWDYUlM _3EDOT6mnWfo2CobuYD5UO7 _1QY7TzdLHKX3-BKPDNNYKF"></i><label>내 페이지</label></a><span className="LYsd0KLqU3FaMTVCV2WC4 _3KSXDuQ8OEUIIiuxj9PJ1e"><a href="https://tumblbug.com/">tumblbug</a></span><a className="WU1ox0-AeDX_zneKjnNMO rLqvd1axk9i-3cU72yTkF" href="https://help.tumblbug.com/hc/ko/categories/115001047328" rel="noopener noreferrer" target="_blank"><i className="jF23yVLzP1CzuuDAcv69S _1QY7TzdLHKX3-BKPDNNYKF"></i>
							창작자 센터 </a>
					</div>
				</nav>
				<div className="_13KHfN73YmQgsYHxXvuh_J _3puWjwbvAnZpG2QCp8_2oS _1WARcEqqT_Pem8leg2dkMj _3rzNLoSt7yWgc2zzlY9duD">
					<h1 className="_13KHfN73YmQgsYHxXvuh_J -UobvSeyUG6cEWYnht50S"><span className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop _1Qdv504-1XMeYXZyb0xQZT _3fJsfvAPykJzj2xoMnxzWW _3D9sfZXrWd8it3eUCuCTc8">준비 중</span>
						깜찍한 제목 </h1>
				</div>
			</div> */}
			<div>
				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
					<div className="_13KHfN73YmQgsYHxXvuh_J _2mDWoxwh1QMJyLM49w7kMZ _3G8CRXtomRhisiZsw7Spx- _3sFSjAZS4gQdCAyN3OfyFG _2-N-uV2y5apkjtxqdVnsop jvBXmsw6c8TD5NU0Gn0P6">
						<i className="_3mTSvU3h91WI2gAoO_w9i4 _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><span>
							펀딩 준비에 앞서&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://help.tumblbug.com/hc/ko/articles/115006302047">공개 검토 가이드라인</a>
							,&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://help.tumblbug.com/hc/ko/categories/115001047328">창작자 센터</a>
							,&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://tumblbug.com/guidelines">텀블벅 커뮤니티 운영원칙</a>
							을 확인해주세요. </span>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj _3an1XS2KtYqHkt90bx9SHY">
					<div className="_13KHfN73YmQgsYHxXvuh_J _2mDWoxwh1QMJyLM49w7kMZ _3G8CRXtomRhisiZsw7Spx- _2-N-uV2y5apkjtxqdVnsop jvBXmsw6c8TD5NU0Gn0P6">
						<i className="_21nJujXiuOiseLBwPOmGO4 _1QY7TzdLHKX3-BKPDNNYKF"></i><span>
							프로젝트를 개설하려면 네 개의 섹션을 완성해야 합니다. 완성된 섹션은 <i className="_1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i>
							탭 아이콘에 <i className="_1oJMWnMCW_Y6GmNc1mhqaW _3sFSjAZS4gQdCAyN3OfyFG -o8oGI_QAOKsVIJOUOUmV _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i>
							파랗게 불이 들어옵니다. </span>
					</div>
					<div className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop T5IOxRC0hd8rBc-PLPMlF">
						<a className="_13KHfN73YmQgsYHxXvuh_J _3fJsfvAPykJzj2xoMnxzWW _1Qdv504-1XMeYXZyb0xQZT _3SbGdzxKM6M_AeOQWLNqks" href="http://www.tumblbug.com/4d379f8d-dc10-4af9-82a0-4b839f9f1794"><i className="_12_kkIo9po-wf5m9SVSerq _1QY7TzdLHKX3-BKPDNNYKF"></i><label>미리보기</label></a><a className="_13KHfN73YmQgsYHxXvuh_J _2rCeEoFeBzvCYn76udqnww _1Qdv504-1XMeYXZyb0xQZT _3SbGdzxKM6M_AeOQWLNqks"><i className="_1QY7TzdLHKX3-BKPDNNYKF _3NmqRmOUOqMEJDy6qtw95t"></i><label>검토 요청하기</label></a>
					</div>
				</div>
				<ProjectLink />
			</div>
		</header>
		<section>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">프로젝트 개요</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로젝트 제목</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											프로젝트 제목을 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로젝트 대표 이미지</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_10NcCOp7F98F1udFv3te-o _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
										프로젝트 대표 이미지를 등록해주세요. </a>
								</div>
								<div className="_3bWlQdzIFpvwX2B8mnOzgn _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										업로드하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로젝트 요약</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv" >
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											프로젝트 요약을 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로젝트 카테고리</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											프로젝트 카테고리를 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로젝트 페이지 주소</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											프로젝트 페이지 주소를 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>검색용 태그</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											예시: 뱃지, 웹툰, 에코백, 고양이, 유기견 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">창작자 정보</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>프로필 이미지</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_3lIDndOaEWwBcdNUKuMYOQ _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
										창작자님의 프로필 이미지를 올려주세요. </a>
								</div>
								<div className="_25P2Jb3SrgiAhvibHBFOrS _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>창작자 이름</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<h3>dmal****</h3>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										수정하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>창작자 소개</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											창작자 소개를 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>창작자 활동 지역</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
											창작자 활동 지역을 입력해주세요 </a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
										입력하기 </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
			<div className="_1G9_ptFHThtCjXox_uifcH">
				<div className="_352AVOtIZ7ivn3BRhw8ufq">
					<Link as='/p' href='/project?id=config&title=구성'>
					<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3sFSjAZS4gQdCAyN3OfyFG _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls">
						다음 <i className="WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i></button>
					</Link>
				</div>
			</div>
		</div>
		<script type="application/javascript" async="" src="../static/js/application.js"></script>
	</div>
);

export default Summary;