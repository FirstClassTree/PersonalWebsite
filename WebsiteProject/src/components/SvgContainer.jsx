import { collection, query, limit, orderBy, getDocs } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";

function SvgContainer({ numberFromLatest }) {
  const [svg, setSvg] = useState([]);

  numberFromLatest = numberFromLatest || 1;

  useEffect(() => {
    const q = query(
      collection(db, "SVG"),
      orderBy("TimeStamp", "desc"), // replace "timestamp" with your timestamp field
      limit(numberFromLatest)
    );
    getDocs(q)
      .then((querySnapshot) => {
        const svgData = querySnapshot.docs.map((doc) => doc.data());
        setSvg(svgData[svgData.length - 1]); // take the last document
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, [numberFromLatest]);

  return (
    <div>
      {svg && (
        <div className="svg-container">
          <div className="svg-drawingName">{svg.UserName }</div>
          
          <div
            dangerouslySetInnerHTML={{ __html: svg.svg }}
          />
          <div  className="svg-drawingName">{svg.DrawingName}</div>
        </div>
      )}
    </div>
  );
}
export default SvgContainer;
