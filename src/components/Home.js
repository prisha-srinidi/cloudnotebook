import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>add a note</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="container my-3">
        <h2>your notes</h2>
      </div>
    </div>
  );
};

export default Home;
