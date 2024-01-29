import { useState, useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
const Container = styled('div')({
  backgroundColor: 'white',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  left: 0,
  padding: '0 24px',
  position: 'fixed',
  width: '100vw',
  zIndex: 100,
  top: 0,
});

const Content = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  minHeight: '100%',
  maxWidth: '1128px',
});

const Logo = styled('span')({
  marginRight: '8px',
  fontSize: '0px',
});

const Search = styled('div')({
  opacity: 1,
  // flexGrow: 1,
  position: 'relative',
  
  '& > div': {
    maxWidth: '280px',
    '& input': {
      border: 'none',
      boxShadow: 'none',
      backgroundColor: '#eef3f8',
      borderRadius: '2px',
      color: 'rgba(0, 0, 0, 0.9)',
      width: '218px',
      padding: '0 8px 0 40px',
      lineHeight: '1.75',
      fontWeight: 400,
      fontSize: '14px',
      height: '34px',
      borderColor: '#dce6f10',
      verticalAlign: 'text-top',

    },
  },
});
const Nav=styled('nav')({
  display:'block',
  marginLeft:'auto',
  '@media(max-width:768px)':{
    position:'fixed',
    left:0,
    bottom:0,
    background:"white",
    width:'100%'
  }
})
const NavListWrap = styled('ul')({
  display: 'flex',
  flexWrap: 'nowrap',
  listStyleType: 'none',
  '.active': {
    '& span:after': {
      content: '""',
      transform: 'scaleX(1)',
      borderBottom: '2.5px solid var(--white, #ffffff)',
      bottom: 0,
      left: 0,
      position: 'absolute',
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      // lineHeight:2,
      borderColor: 'rgba(0, 0, 0, 0.9)',
    },
    '& a': {
      color: 'darkblack',
      fontWeight: 'bold', 
    },
  },
});
const NavList=styled('li')({
  display:'flex',
  alignItems:'center',
  cursor:'pointer',
  '& a':{
    alignItems:'center',
    background:'transparent',
    display:'flex',
    flexDirection:'column',
    fontSize:'12px',
    fontWeight:400,
    justifyContent:'center',
    lineHeight:1.5,
    minHeight:'42px',
    minWidth:'80px',
    position:'relative',
    textDecoration:'none',
    '& span':{
      color:'rgba(0, 0, 0, 0.6)',
      display:'flex',
      alignItems:'center',
    },
    '@media(max-width:768px)':{
      minWidth:'70px',
    },
  },
  '&:hover,&.active':{
    '& a':{
      '& span':{
        color:'rgba(0, 0, 0, 0.9)',
      }
    }
  }
})
const SignOut=styled('div')({
  position:"absolute",
  top:'45px',
  background:'white',
  borderRadius:'0 0 5px 5px',
  width:'100px',
  height:"40px",
  fontSize:"16px",
  transitionDuration:"167ms",
  textAlign:'center',
 

})
const User=styled(NavList)({
  '& img':{
    width:'24px',
    height:'24px',
    borderRadius:"50%",
   
  },
  '& span':{
    display:'flex',
    alignItems:'center',
  },
  '.downArrow':{
    width:'13px',
    height:'13px',
  }
  
});
const Work=styled(User)({
  borderLeft:'1px solid rgba(0, 0, 0, 0.08)',
})

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null)
  // const [color, setColor] = useState(null)
  const userRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
    // setColor('black');
  };
  const getSvgFillColor = (index) => {
    // Change this logic based on your requirements
    return activeNavItem === index ? 'darkblack' : 'rgba(0, 0, 0, 0.6)';
  };
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <TextField
              placeholder="Search"
              variant="outlined"
              sx={{
                width: '218px',
                '& input': {
                  backgroundColor: '#eef3f8',
                  borderRadius: '2px',
                  color: 'rgba(0,0,0,0.9)',
                  padding: '0 8px 0 40px',
                },
              }}
            />
          </div>
          <SearchIcon sx={{ width: 40, position: 'absolute', zIndex: 1, top: 5, left: 2, borderRadius: '0 2px 2px 0', margin:'0', pointerEvents:'none', display:'flex', justifyContent:'center',alignItems:'center', }} />
        </Search>
        <Nav>
          <NavListWrap>
          <NavList className={activeNavItem === 0 ? 'active' : ''} onClick={() => setActiveNavItem(0)}>
        <a><img src="/images/nav-home.svg" alt="" /><span>Home</span></a>
      </NavList>
      <NavList className={activeNavItem === 1 ? 'active' : ''} onClick={() => setActiveNavItem(1)}>
        <a><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill={getSvgFillColor(1)}><path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"></path></svg><span>My Network</span></a>
      </NavList>
      <NavList className={activeNavItem === 2 ? 'active' : ''} onClick={() => handleNavItemClick(2)}>
        <a><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill={getSvgFillColor(2)}><path d="m17 6v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-5v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-4zm-8-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h-6zm10 9c1.2 0 2.3-.5 3-1.4v4.4c0 1.7-1.3 3-3 3h-14c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4z"></path></svg> <span>Jobs</span></a>
      </NavList>
      <NavList className={activeNavItem === 3 ? 'active' : ''} onClick={() => setActiveNavItem(3)}>
        <a><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill={getSvgFillColor(3)}><path d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"></path></svg> <span>Messaging</span></a>
      </NavList>
      <NavList className={activeNavItem === 4 ? 'active' : ''} onClick={() => setActiveNavItem(4)}>
        <a><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill={getSvgFillColor(4)}><path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"></path></svg> <span>Notifications</span></a>
      </NavList>
              <User ref={userRef} onClick={(e)=>{e.stopPropagation();setShow(!show);}}>
                <a>
                  <img src="/images/user.svg" alt="" /><span>Me</span>
                  <img className='downArrow' src="/images/down-icon.svg" alt="" />
                </a>
                {show&&<SignOut onClick={()=>{console.log("signed out")}}><a>Sign Out</a></SignOut>}
                
              </User>
              <Work>
                <a>
                  <img src="/images/nav-work.svg" alt="" />
                  <span>Work
                    <img className='downArrow' src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
              </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
