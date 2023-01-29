import { search } from "../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function Search() {
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  let apiData = useSelector((state) => state.listData);

  let [event, setEvent] = useState("");
  const onChange = (event) => {
    setEvent(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setEvent(searchTerm);
    dispatch(search(searchTerm, apiData));
    // console.log("search ", searchTerm);
  };

  return (
    <div className="search-box">
      {/* {console.log("=== received api data=", apiData)} */}
      <input
        type="text"
        id="search"
        onChange={onChange}
        value={event}
        placeholder="Type to Search Product"
        autoComplete="off"
        aria-label="Search-Bar"
      />
      <button
        className="searchBtn"
        onClick={() => {
          onSearch(event);
        }}
        aria-label="Search"
      >
        Search
      </button>

      <div className="dropdown">
        {apiData
          .filter((item) => {
            const searchTerm = event.toLowerCase();
            return (
              searchTerm &&
              item.name.toLowerCase().match(new RegExp(searchTerm, "g")) &&
              item.name !== searchTerm &&
              item.name !== event
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              key={item.id}
              className="dropdown-row"
              onClick={() => onSearch(item.name)}
            >
              {item.name}
            </div>
          ))}
      </div>
      <div className="log">
        {isAuthenticated ? (
          <button
            className="btnn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        ) : (
          <button className="btnn" onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
