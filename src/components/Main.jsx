import styled from "styled-components";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ScreenRotationAltOutlinedIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        .icons {
          margin: 0 4px 0-2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 20px;
      height: 20px;
      padding-bottom: 20px;
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: auto;
    height: 400px;
  }
`;

const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  Button {
    align-items: center;
    background-color: transparent;
    border: none;
  }
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
    img {
      width: 25px;
    }
  }
`;

const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  min-height: 40px;
  padding: 4px 70px 8px 9px;

  button {
    display: inline-flex;
    align-items: center;
    color: grey;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;

    /* img {
        width: 50px;
        height: 50px;
      } */
    @media (max-width: 768px) {
      span {
        margin-left: 2px;
        font-size: 12px;
      }
      a {
        margin-left: 6px;
      }
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <AddAPhotoIcon className="icons" style={{ color: "#4980b7" }} />
            <span>Photo</span>
          </button>
          <button>
            <VideoCameraBackIcon
              className="icons"
              style={{ color: "#6eb188" }}
            />
            <span>Video</span>
          </button>
          <button>
            <CollectionsIcon className="icons" style={{ color: "#e19a37ec" }} />
            <span>Event</span>
          </button>
          <button>
            <ArticleIcon className="icons" style={{ color: "#dc4747e0" }} />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <MoreHorizIcon />
          </button>
        </SharedActor>
        <Description>All cold 🥶🥶.</Description>
        <SharedImg>
          <a>
            <img src="/images/shared-img.jpg" alt="" />
          </a>
        </SharedImg>
        <SocialCount>
          <li>
            <button>
              <img src="/images/like.svg" alt="" />
              <img src="/images/heart.svg" alt="" />
              <span>78</span>
            </button>
          </li>
          <li>
            <a>2 comments</a>
          </li>
        </SocialCount>
        <SocialAction>
          <button>
            <ThumbUpOffAltIcon
              style={{ transform: "scaleX(-1)", width: 22, height: 22 }}
            />
            <span>Like</span>
          </button>
          <button>
            <InsertCommentOutlinedIcon
              style={{
                borderRadius: 10,
                width: 22,
                height: 22,
              }}
            />
            <span>Comments</span>
          </button>
          <button>
            <ScreenRotationAltOutlinedIcon
              style={{
                transform: "scaleX(-1) rotate(45deg)",
                width: 22,
                height: 22,
                marginLeft: 15,
              }}
            />
            <span>Repost</span>
          </button>
          <button>
            <SendRoundedIcon
              style={{
                transform: "rotate(-45deg)",
                width: 22,
                height: 22,
                marginLeft: 16,
              }}
            />
            <span>Send</span>
          </button>
        </SocialAction>
      </Article>
    </Container>
  );
};
export default Main;
