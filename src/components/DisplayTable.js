import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DisplayTable = ({ data, repositories, username }) => {
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const fetchContent = async () => {
    const content = await fetch(
      `https://api.github.com/repos/${username}/${repositories}/contents`
    );
    const contentJson = await content.json();
    setContent(contentJson);
    console.log(setContent(content));
  };

  const handleNavigate = () => {
    fetchContent();
    navigate("/repo", { state: { content } });
  };

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td>
            {repositories.map((repo) => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <Link className="headerBtn" onClick={handleNavigate}>
                      {repo.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
