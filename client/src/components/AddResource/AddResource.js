import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function AddResource(props) {
  // States
  const [formObject, setFormObject] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const accessTokenObj = JSON.stringify(localStorage.getItem("token"));
    console.log(accessTokenObj);
    if (formObject.title && formObject.body) {
      API.saveArticle({
        title: formObject.title,
        body: formObject.body,
        description: formObject.description,
        source: formObject.source,
        type: formObject.type,
        token: accessTokenObj,
      }).catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="card " id="manage-add-resource">
        <div className="card-header text-center">
          <h4 id="add-resource-title">Add Article or Resource</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input
                  onChange={handleInputChange}
                  name="title"
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
                  onChange={handleInputChange}
                  name="author"
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="resource-body">Body</label>
              <textarea
                onChange={handleInputChange}
                name="body"
                className="form-control"
                id="body"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="resource-description">Brief Description</label>
              <textarea
                onChange={handleInputChange}
                name="description"
                className="form-control"
                id="description"
                rows="1"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="source">Source(url)</label>
                <input
                  onChange={handleInputChange}
                  name="source"
                  type="text"
                  className="form-control"
                  id="source"
                />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Type/keyword(s)</label>
                  <input
                    onChange={handleInputChange}
                    name="type"
                    type="text"
                    className="form-control"
                    id="type"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-add"
              disabled={!(formObject.body && formObject.title)}
              onClick={handleFormSubmit}
            >
              Add Resource
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddResource;
