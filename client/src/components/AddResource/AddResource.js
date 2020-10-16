import React from "react";
import "./AddResourceStyle.css";
//passing prop values from manage.js to donation component
function AddResource({
  handleArticleInputChange,
  handleArticleSubmit,
  articleObject,
  articleErrors,
  articleSuccess,
  notSubmitted,
  articleUpdateErrors,
  articleId,
  submitArticleUpdate
}) {
  return (
    <>
      <div className="card " id="add-resource-card">
        <div className="card-header text-center">
          <h4 id="add-resource-header">Add Article or Resource</h4>
        </div>
        <div className="card-body">
          <form noValidate>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.title ? "inputErr" : articleUpdateErrors.title ? "inputErr" : ""
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
                {articleUpdateErrors.title && (
                  <p className="err">{articleUpdateErrors.title}</p>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.author ? "inputErr" : articleUpdateErrors.author ? "inputErr" : ""
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
                {articleUpdateErrors.author && (
                  <p className="err">{articleUpdateErrors.author}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="resource-body">Body</label>
              <textarea
                className={`form-control ${
                  articleErrors.body ? "inputErr" : articleUpdateErrors.body ? "inputErr" : ""
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
              {articleUpdateErrors.body && (
                <p className="err">{articleUpdateErrors.body}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="resource-description">Brief Description</label>
              <textarea
                className={`form-control ${
                  articleErrors.description ? "inputErr" : articleUpdateErrors.description ? "inputErr" : ""
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
              {articleUpdateErrors.description && (
                <p className="err">{articleUpdateErrors.description}</p>
              )}
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="source">Source(url)</label>
                <input
                  type="text"
                  className={`form-control ${
                    articleErrors.source ? "inputErr" : articleUpdateErrors.source ? "inputErr" : ""
                  }`}
                  id="source"
                  name="source"
                  onChange={handleArticleInputChange}
                  value={articleObject.source || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">e.g. https://www.example.com/page</small>
                {articleErrors.source && (
                  <p className="err">{articleErrors.source}</p>
                )}
                {articleUpdateErrors.source && (
                  <p className="err">{articleUpdateErrors.source}</p>
                )}
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Type/keyword(s)</label>
                  <input
                    type="text"
                    className={`form-control ${
                      articleErrors.type ? "inputErr" : articleUpdateErrors.type ? "inputErr" : ""
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
                  {articleUpdateErrors.type && (
                    <p className="err">{articleUpdateErrors.type}</p>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-add" onClick={handleArticleSubmit} disabled={!(articleId.length === 0)}>
              Add Resource
            </button>
            <button type="submit" className="btn btn-add" onClick={submitArticleUpdate} disabled={(articleId.length === 0)}>
              Update Resource
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
