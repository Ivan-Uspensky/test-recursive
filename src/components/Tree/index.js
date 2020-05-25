import React, { useState, useEffect, useCallback } from 'react';

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from '@material-ui/core/Button';

const Tree = (props) => {

  const [expandedNodes, setExpandedNodes] = useState([]);
  const [expandableIds, setExpandableIds] = useState([]);
  const [buttonCaption, setButtonCaption] = useState({
    name: 'Expand all',
    color: 'primary'
  });
    
  // recursive collecting of json elements that can be expanded
  useEffect(() => {
    const temp = [];
    function getExpandableIds (jsonItems, prefix = "") {
      for (let [key, value] of Object.entries(jsonItems)) {
        if (typeof value === "object") {
          const id = `${prefix}_${key}`;
          temp.push(id);
          getExpandableIds(value, id);
        }
      };
    }
    
    getExpandableIds(props.data, "jsonRoot");
    setExpandableIds(temp);
  }, [props.data]);

  // change button caption and color
  useEffect(() => {
    if (expandedNodes.length === expandableIds.length) {
      setButtonCaption({
        name:'Collapse all',
        color: 'secondary'
      });
    } else {
      setButtonCaption({
        name:'Expand all',
        color: 'primary'
      });
    }
  }, [expandedNodes, expandableIds]);

  const handleToggle = (event, nodeIds) => {
    setExpandedNodes(nodeIds);
  };

  // handle tree expanding
  const handleButtonClick = () => {
    if (expandedNodes.length >= 0) {
      setExpandedNodes(expandableIds);
    }
    if (expandedNodes.length === expandableIds.length) {
      setExpandedNodes([]);
    }
  }

  // recursive render of json tree
  const renderJsonElements = useCallback((jsonElements, prefix = "") => {
    let result = [];
      for (let [key, value] of Object.entries(jsonElements)) {
        let children = undefined;
        let label;
        const id = `${prefix}_${key}`;
        if (typeof value !== "object") {
          label = `${key} : ${value}`;
          children = undefined;
        } else {
          label = key;
          children = renderJsonElements(value, id);
        }
        result.push(
          <TreeItem
            key={id}
            nodeId={id}
            label={label}
            children={children}
          >
          </TreeItem>
        );
      };

    return result;
  }, [])

  const JsonTreeView = ({ jsonItems }) => {
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expandedNodes}
        onNodeToggle={handleToggle}
      >
        {renderJsonElements(jsonItems, "jsonRoot")}
      </TreeView>
    );
  };

  return (
    <>
      <h3>{props.header}</h3>
      <JsonTreeView jsonItems={props.data} />
      <Button variant="contained" onClick={handleButtonClick} color={buttonCaption.color}>{buttonCaption.name}</Button>
    </>
  );
}

export default Tree;