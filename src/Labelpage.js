import React from "react";
import Rules from "./Rules";
import InputPart from "./InputPart";

const Labelpage = () => {

  const rules = [
    {
      id: 0, title: "Basic", item: [
        {
          item_id: 0,
          item_title: "Questions that can be answered with simple built-in functions/API documentation/beginner level books."
        },
        {
          item_id: 1,
          item_title: "Questions with comparison between constructs/functions of two languages (for better understanding of the language or for learning a new language)"
        }
      ]
    },
    {
      id: 1, title: "Intermediate", item: [
        {
          item_id: 0,
          item_title: "Questions that require a relatively deeper understanding of the language to answer, for example Why type questions."
        },
        {
          item_id: 1,
          item_title: "Questions where the questioner knows about the answer/solution of the question/problem but wants to know more efficient answer/solution."
        },
        {
          item_id: 2,
          item_title: "Questions related to time complexity, memory usage or other different resource usages of a system/solution."
        },
        {
          item_id: 3,
          item_title: "Questions that require answers with conceptual reasoning/underlying philosophy of any programming construct/API or syntax/design principle."
        }
      ]
    },
    {
      id: 2, title: "Advance", item: [
        {
          item_id: 0,
          item_title: "Questions that deal with hard/critical problems where solution needs in-depth programming knowledge or conceptual/logical thinking."
        },
        {
          item_id: 1,
          item_title: "Questions that require advanced in-depth knowledge of internal language structure."
        },
        {
          item_id: 2,
          item_title: "Questions that deals with infrequently/rarely used framework/API."
        }
      ]
    },
  ];


  return (
    <div className="col-md-12 d-flex justify-content-center">
      <div className="col-md-10">
        <div className="d-flex py-4 px-3 w-100">
          <Rules rules={rules}/>
        </div>
        <div className="d-flex py-4 px-3 w-100">
          <InputPart rules={rules}/>
        </div>
      </div>
    </div>
  );
};
export default Labelpage;
