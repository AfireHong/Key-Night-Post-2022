import Wrapper from "@/components/PageWrapper";
import { FC, useState, useEffect } from "react";
import { tag } from "@/typings";
import Tag from "@/api/tag";
import Chip from "@mui/material/Chip";
import styled from "styled-components";

const useTags = () => {
  const [tags, setTags] = useState<tag[]>();
  const getTags = async () => {
    const res = await Tag.tagList();
    if (res.code === 200) {
      return setTags(res.data);
    }
  };
  useEffect(() => {
    getTags();
  }, []);
  return [tags];
};
const Archive: FC = () => {
  const [tags] = useTags();
  console.log(tags);

  return (
    <Wrapper title={"归档"}>
      <ArchiveStyle>
        <div className="tags-container">
          <div className="tags-title">标签</div>
          <div className="tags-list">
            {tags?.map((item) => (
              <Chip label={item.tag_name} />
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
