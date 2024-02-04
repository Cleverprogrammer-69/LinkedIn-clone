import styled from "styled-components";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArticleIcon from "@mui/icons-material/Article";
const Container=styled.div`
    grid-area: main;
`
const CommonCard=styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0  1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`; 
const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
`;
const Main=(props)=>{
    return (
      <Container>
        <ShareBox>Share</ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <AddAPhotoIcon style={{ color: "#0a66c2" }} />
            <span>Photo</span>
          </button>
          <button>
            <VideoCameraBackIcon style={{ color: "green" }} />
            <span>Video</span>
          </button>
          <button>
            <CollectionsIcon style={{ color: "#b4b730" }} />
            <span>Event</span>
          </button>
          <button>
            <ArticleIcon style={{ color: "red" }} />
            <span>Article</span>
          </button>
        </div>
      </Container>
    );
}
export default Main