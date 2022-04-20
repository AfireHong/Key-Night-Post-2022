import Wrapper from "@/components/PageWrapper";
import { FC, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { tag, cate } from "@/typings";
import Tag from "@/api/tag";
import Cate from "@/api/cate";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faBox } from "@fortawesome/free-solid-svg-icons";
import Fade from "@mui/material/Fade";

const useTags = () => {
  const history = useHistory();
  const [tags, setTags] = useState<tag[]>();
  const getTags = useCallback(async () => {
    const res = await Tag.tagList();
    if (res.code === 200) {
      return setTags(res.data);
    }
  }, []);
  const tagClick = (item: tag) => {
    history.push("/tag", {
      id: item.tag_id,
      name: item.tag_name,
      count: item.count,
    });
  };
  useEffect(() => {
    getTags();
  }, [getTags]);
  return { tags, tagClick };
};
const useCate = () => {
  const history = useHistory();
  const [cates, setCates] = useState<cate[]>();
  const getList = useCallback(async () => {
    try {
      const res = await Cate.cateList();
      if (res.code === 200) {
        setCates(res.data);
      }
    } catch (e) {}
  }, []);
  const cateClick = (item: cate) => {
    history.push("/category", {
      id: item.cate_id,
      name: item.cate_name,
      count: item.count,
    });
  };
  useEffect(() => {
    getList();
  }, [getList]);
  return { cates, cateClick };
};
const Archive: FC = () => {
  const { tags, tagClick } = useTags();
  const { cates, cateClick } = useCate();
  return (
    <Wrapper title={"归档"}>
      <ArchiveStyle>
        <div className="container">
          <div className="title">
            <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faTag} />
            标签
          </div>
          <div className="list">
            {tags
              ?.filter((ite) => ite?.count > 0)
              .map((item, index) => (
                <Fade
                  in={true}
                  key={item.tag_id}
                  style={{ transitionDelay: `${(index + 1) * 20}0ms` }}
                >
                  <Chip onClick={() => tagClick(item)} label={item.tag_name} />
                </Fade>
              ))}
          </div>
        </div>
        <div className="container">
          <div className="title">
            <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faBox} />
            分类
          </div>
          <div className="list">
            {cates
              ?.filter((ite) => ite?.count > 0)
              .map((item, index) => (
                <Fade
                  in={true}
                  key={item.cate_id}
                  style={{ transitionDelay: `${(index + 1) * 20}0ms` }}
                >
                  <Chip
                    onClick={() => cateClick(item)}
                    label={item.cate_name}
                  />
                </Fade>
              ))}
          </div>
        </div>
      </ArchiveStyle>
    </Wrapper>
  );
};

export default Archive;

const ArchiveStyle = styled.div`
  .container {
    margin-bottom: 50px;
    > .title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    > .list {
      > div {
        margin: 4px 8px 4px 0;
        cursor: pointer;
      }
    }
  }
`;
