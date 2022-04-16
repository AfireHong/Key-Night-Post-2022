import Wrapper from "@/components/PageWrapper";
import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { tag } from "@/typings";
import Tag from "@/api/tag";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const useTags = () => {
  const history = useHistory();
  const [tags, setTags] = useState<tag[]>();
  const getTags = async () => {
    const res = await Tag.tagList();
    if (res.code === 200) {
      return setTags(res.data);
    }
  };
  const tagClick = (item: tag) => {
    history.push("/tag", { id: item.tag_id, name: item.tag_name });
  };
  useEffect(() => {
    getTags().catch();
  }, []);
  return { tags, tagClick };
};
const Archive: FC = () => {
  const { tags, tagClick } = useTags();
  return (
    <Wrapper title={"归档"}>
      <ArchiveStyle>
        <div className="tags-container">
          <div className="tags-title">
            <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faTag} />
            标签
          </div>
          <div className="tags-list">
            {tags?.map((item) => (
              <Chip
                onClick={() => tagClick(item)}
                key={item.tag_id}
                label={item.tag_name}
              />
            ))}
          </div>
        </div>
      </ArchiveStyle>
    </Wrapper>
  );
};

export default Archive;

const ArchiveStyle = styled.div`
  .tags-container {
    > .tags-title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    > .tags-list {
      > div {
        margin: 4px 8px 4px 0;
        cursor: pointer;
      }
    }
  }
`;
