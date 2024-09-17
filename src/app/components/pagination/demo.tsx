import {useState} from "react";
import {Pagination} from "altrone-ui";

export const PaginationDemo = () => {
  const [page, setPage] = useState(1);

  return <Pagination currentPage={page} setPage={setPage} totalPages={15} />
}