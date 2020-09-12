import React from "react";

function AddResource(props) {
  console.log(props);
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
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
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
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="resource-description">Brief Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="1"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="source">Source(url)</label>
                <input type="text" className="form-control" id="source" />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Type/keyword(s)</label>
                  <input type="text" className="form-control" id="type" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-add">
              Add Resource
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddResource;
