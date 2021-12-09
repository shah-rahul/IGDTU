import React, { Component, useState } from "react";
import "./ImageLinkForm.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

class ImageLinkForm extends Component {
  state = {
    url: null,
  };

  handleUpload(image) {
    if (image) {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((newUrl) => {
          this.setState({
            url: newUrl,
          });
          console.log(newUrl);
          this.props.onImageUpload(this.state.url);
        });
      });
    }
  }
  handleChange = (e) => {
    let image;
    if (e.target.files[0]) {
      image = e.target.files[0];
    }
    this.handleUpload(image);
  };

  render() {
    return (
      <div>
        <p className="f3">
          {
            "This Smart Brain will detect faces in your pictures. Give it a try."
          }
        </p>
        <div className="center">
          <div className="form center pa4 br3 shadow-3">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              onChange={this.props.onInputChange}
            />
            <button
              className="w-30 grow f4 link ph3 pv2 dib white bg-purple "
              onClick={this.props.onButtonSubmit}
            >
              Detect
            </button>
          </div>
        </div>
        <br />
        <h1> or upload an image</h1>
        <br />

        <div className="center">
          <div className="form center pa4 br3 shadow-3">
            <input type="file" onChange={this.handleChange} />
            {this.state.url != null ? (
              <button
                className="w-30 grow f4 link ph3 pv2 dib white bg-purple "
                onClick={this.props.onButtonSubmit}
              >
                Detect
              </button>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
