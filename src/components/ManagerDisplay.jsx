import React from "react";

export default function ManagerDisplay(props) {
  function handleClick() {
    props.isClicked(props.id);
  }
  function handleClickCopy() {
    props.copyIsClicked(props.url, props.user, props.pass);
  }
  return (
    <div className="displayManager">
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>User</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.url}</td>
            <td>{props.user}</td>
            <td>{props.pass}</td>
            <td>
              <button onClick={handleClickCopy} type="button">
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/btctoygl.json"
                    trigger="hover"
                    stroke="bold"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </span>
                Copy
              </button>
              <button onClick={handleClick} type="button">
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/drxwpfop.json"
                    trigger="hover"
                    stroke="bold"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </span>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
