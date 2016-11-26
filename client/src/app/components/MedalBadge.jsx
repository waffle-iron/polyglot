import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, gold500} from 'material-ui/styles/colors';

const style = {
  margin: '15px 100px',
  float: 'left',
  fontSize: '30px'
}

const BadgeExampleContent = () => (
  <div>
    <IconButton tooltip="100 hours teaching" touch={true} tooltipPosition="bottom-right">
      100 hours
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="100 hours learning" touch={true} tooltipPosition="bottom-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="100 " touch={true} tooltipPosition="bottom-left">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
      <ActionGrade />
    </IconButton>
  </div>
);

export default BadgeExampleContent;
    // <div>
    //     <FontIcon style={style} className="material-icons" >stars</FontIcon>
    //     <FontIcon style={style} className="material-icons"color={gold500}>stars</FontIcon>
    //     <FontIcon style={style} className="material-icons" color={blue500}>stars</FontIcon>
    //   </div>