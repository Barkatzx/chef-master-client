import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const contentRef = useRef();

  const handleDownload = () => {
    const content = contentRef.current;
    const options = {
      orientation: "landscape",
      unit: "in",
      format: [17, 11],
    };
    html2pdf().set(options).from(content).save();
  };

  return ( 
    <div>
      <button className="text-2xl font-bold bg-pink-500 rounded-xl mt-10 text-end p-4 text-white" onClick={handleDownload}>
        <FaDownload /> Download as PDF
      </button>
      <div ref={contentRef}>
        <div className="mt-12 mx-10 text-pink-400 border-2 bg-orange-50  border-pink-400 rounded p-5">
          <div>
            <h3 className="text-3xl font-semibold p-3">
              Q: Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Uncontrolled components are managed by the DOM, while
              controlled components are managed by React. Controlled components
              provide more control and can handle input validation and state
              changes.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: How to validate React props using PropTypes?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: In React, developers can use the PropTypes library to
              validate the type and shape of props passed to a component. To use
              PropTypes, import the library at the top of the file, and then
              define the PropTypes for each prop passed to the component using
              the propTypes object.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Node.js is a JavaScript runtime environment that enables
              developers to run JavaScript on the server-side, while Express.js
              is a web application framework built on top of Node.js, providing
              additional features for building web applications.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: What is a custom hook, and why will you create a custom hook??
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Custom hooks are reusable functions in React that allow
              developers to extract and share logic between components.
              Developers create custom hooks to reduce code duplication and
              improve code readability and maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
