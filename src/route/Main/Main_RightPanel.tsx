import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RightPanel = styled.div`
  width: 380px;
  height: 100%;
  padding: 30px;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  width: 200px;
  height: auto;
  padding: calc(17px / 2) 10px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
`;

const Category_Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & button {
    width: 10px;
    height: 10px;
  }
  & span {
    font-size: 18px;
  }
`;

const ListContainer = styled.div`
  margin: 10px 0;
  background-color: tomato;
  & p {
    margin: 5px 0;
  }
`;

function Main_RightPanel() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "카테고리 1",
      items: ["List Item 1", "List Item 2", "List Item 3"],
      active: false,
    },
    {
      id: 2,
      name: "카테고리 2",
      items: [
        "List Item 4",
        "List Item 5",
        "List Item 6",
        "List Item 7",
        "List Item 8",
      ],
      active: false,
    },
    {
      id: 3,
      name: "카테고리 3",
      items: ["List Item 7", "List Item 8"],
      active: false,
    },
  ]);

  const toggleCategory = (categoryId: number) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            active: !category.active, // 카테고리의 활성화 상태 토글
          };
        }
        return category;
      })
    );
  };

  return (
    <RightPanel>
      {categories.map((category) => (
        <Category key={category.id}>
          <Category_Header
            onClick={() => {
              toggleCategory(category.id);
            }}
          >
            {category.name}
          </Category_Header>
          {category.active && (
            <ListContainer>
              {category.items.map((item, itemIndex) => (
                <p key={itemIndex}>{item}</p>
              ))}
            </ListContainer>
          )}
        </Category>
      ))}
    </RightPanel>
  );
}

export default Main_RightPanel;
