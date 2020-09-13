import React from "react";
import "./AddResourceStyle.css";
////////////////////// add help text too
function AddResource({
  handleArticleInputChange,
  handleArticleSubmit,
  articleObject,
  articleErrors,
  articleSuccess,
  notSubmitted,
}) {
  return (
    <>
      <div className="card " id="add-resource-card">
        <div className="card-header text-center">
          <h4 id="add-resource-header">Add Article or Resource</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleArticleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.title ? "inputErr" : ""
                  }`}
                  id="title"
                  placeholder="Title"
                  name="title"
                  onChange={handleArticleInputChange}
                  value={articleObject.title || ""}
                  required
                />
                {articleErrors.title && (
                  <p className="err">{articleErrors.title}</p>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.author ? "inputErr" : ""
                  }`}
                  id="author"
                  placeholder="Author"
                  name="author"
                  onChange={handleArticleInputChange}
                  value={articleObject.author || ""}
                  required
                />
                {articleErrors.author && (
                  <p className="err">{articleErrors.author}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="resource-body">Body</label>
              <textarea
                className={`form-control ${
                  articleErrors.body ? "inputErr" : ""
                }`}
                id="exampleFormControlTextarea1"
                rows="3"
                name="body"
                onChange={handleArticleInputChange}
                value={articleObject.body || ""}
                required
              ></textarea>
              {articleErrors.body && (
                <p className="err">{articleErrors.body}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="resource-description">Brief Description</label>
              <textarea
                className={`form-control ${
                  articleErrors.description ? "inputErr" : ""
                }`}
                id="description"
                rows="1"
                name="description"
                onChange={handleArticleInputChange}
                value={articleObject.description || ""}
                required
              ></textarea>
              {articleErrors.description && (
                <p className="err">{articleErrors.description}</p>
              )}
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label for="source">Source(url)</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.source_url ? "inputErr" : ""
                  }`}
                  id="source"
                  name="source_url"
                  onChange={handleArticleInputChange}
                  value={articleObject.source_url || ""}
                  required
                />
                {articleErrors.source_url && (
                  <p className="err">{articleErrors.source_url}</p>
                )}
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label for="type">Type/keyword(s)</label>
                  <input
                    type="text"
                    className={`form-control ${
                      articleErrors.type ? "inputErr" : ""
                    }`}
                    id="type"
                    name="type"
                    onChange={handleArticleInputChange}
                    value={articleObject.type || ""}
                    required
                  />
                  {articleErrors.type && (
                    <p className="err">{articleErrors.type}</p>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-add">
              Add Resource
            </button>
            {articleSuccess && <div className="success">Submitted</div>}
            {notSubmitted && (
              <div className="notSubmitted">Submission Failed :(</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddResource;
