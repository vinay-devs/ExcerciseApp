import React, { useState } from "react";
import { Box, Pagination, Stack } from "@mui/material";

import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4;
  const lastIndexOfCategories = currentPage * categoriesPerPage;
  const firstIndexOfCategories = lastIndexOfCategories - categoriesPerPage;
  const currentCategories = data.slice(
    firstIndexOfCategories,
    lastIndexOfCategories
  );
  // console.log(data);

  const categoryPage = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {currentCategories.map((item) => {
          // console.log(data);
          return (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </Box>
          );
        })}
      </div>
      <Stack alignItems="center" mt="20px">
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          siblingCount={0}
          page={currentPage}
          onChange={categoryPage}
          count={Math.ceil(data.length / 4)}
        />
      </Stack>
    </div>
  );
};

export default HorizontalScrollbar;
