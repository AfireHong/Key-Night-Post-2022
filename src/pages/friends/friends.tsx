import { FC, useState, useEffect } from "react";
import PageWrapper from "@/components/PageWrapper";
import { friend } from "@/typings";
import Friend from "@/api/friend";
import styled from "styled-components";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Friends: FC = () => {
  const [list, setList] = useState<friend[]>();
  useEffect(() => {
    const getFriends = async () => {
      const res = await Friend.friendList();
      if (res.code === 200) {
        setList(res.data.rows);
      }
    };
    getFriends();
  }, []);

  const jumpLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <PageWrapper title={"友情链接"}>
      <List>
        {list?.map((item) => (
          <div
            className="list-item"
            key={item.id}
            onClick={() => jumpLink(item.link)}
          >
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            <span className="item-name">{item.name}</span>
            <span className="item-desc">{item.description}</span>
          </div>
        ))}
      </List>
    </PageWrapper>
  );
};
const List = styled.div`
  overflow: hidden;

  .list-item {
    cursor: pointer;
    margin-bottom: 10px;
    overflow: hidden;

    > .item-name {
      font-weight: 600;
      width: 80px;
      display: inline-block;
      margin-right: 20px;
      margin-left: 10px;

      &:hover {
        color: #929090;
      }
    }

    > .item-desc {
      font-size: 8px;
      color: #867b7b;
    }
  }
`;

export default Friends;
