import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { fetchContentApi, searchContentApi } from "../api/index";
import * as React from "react";

const useStore = () => {
  const history = useHistory();
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const fetchPhotos = useQuery("photos", fetchContentApi);
  const searchPhotos = useMutation((query) => searchContentApi(query));

  const pathname = history.location.pathname;

  React.useEffect(() => {
    if (pathname !== "/" && !searchPhotos.data && !searchPhotos.isLoading) {
      searchPhotos.mutate(pathname.substring(1));
    }
  }, [pathname, searchPhotos]);

  const resource = React.useMemo(
    () => (pathname === "/" ? fetchPhotos.data : searchPhotos.data?.results),
    [searchPhotos, pathname, fetchPhotos]
  );

  const isFetching = React.useMemo(
    () => (pathname === "/" ? fetchPhotos.isFetching : searchPhotos.isLoading),
    [searchPhotos, pathname, fetchPhotos]
  );

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    history.push(`/${searchValue}`);
  };

  return {
    resource,
    isFetching,
    onSearch,
    onChange,
    searchValue,
  };
};

export default useStore;
