import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import { commonUiActions } from "../action/commonUiAction";
import ReactPaginate from "react-paginate";

const ProductAll = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const totalPageNum = useSelector((state) => state.product);
  // const { productList, totalPageNum } = useSelector(
  //   (state) => state.product.productList
  // );
  // 처음 로딩하면 상품리스트 불러오기
  const [query, setQuery] = useSearchParams();
  const name = query.get("name");
  useEffect(() => {
    dispatch(
      productActions.getProductList({
        name,
      })
    );
  }, [query]);

  const error = useSelector((state) => state.product.error);

  const [searchQuery, setSearchQuery] = useState({
    page: query.get("page") || 1,
    name: query.get("name") || "",
  }); //Object for saving Searched Keyword    /  검색 조건들을 저장하는 객체

  const handlePageClick = ({ selected }) => {
    setSearchQuery({ ...searchQuery, page: selected + 1 });
    //  Convert Page value to quary
    // console.log("selected", selected);
    //쿼리에 페이지값 바꿔주기
  };

  return (
    <Container>
      <Row>
        {productList.length > 0 ? (
          productList.map((item) => (
            <Col md={3} sm={12} key={item._id}>
              <span style={{ cursor: "pointer" }}>
                <ProductCard item={item} />
              </span>
            </Col>
          ))
        ) : (
          <div className="text-align-center empty-bag">
            {name === "" ? (
              <h2>There is no Product</h2>
            ) : (
              <h2>There is no Product of "{name}"</h2>
            )}
          </div>
        )}
      </Row>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPageNum} //All Pages
        forcePage={searchQuery.page - 1} //page1 = 2, Page# + 1  / If page 1 means page 2 /   1페이지면 2임 여긴 한개씩 +1 해야함
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        className="display-center list-style-none"
      />
    </Container>
  );
};

export default ProductAll;
