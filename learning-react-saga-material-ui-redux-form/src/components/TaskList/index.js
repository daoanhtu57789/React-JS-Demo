import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import TaskItem from './../TaskItem/index';
import propTypes from 'prop-types';
class TaskList extends Component {
  render() {
    let { classes, status, taskFiltered,onClickEdit,onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wapperListTask}>
          {taskFiltered.map((task, index) => {
            const { title } = task;
            return (
                <TaskItem
                    title={title}
                    key={task.id}
                    task={task}
                    status={status}
                    onClickEdit = {() => onClickEdit(task)}
                    onClickDelete = {() => onClickDelete(task)}
                />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes={
    classes :propTypes.object,
    status : propTypes.object,
    taskFiltered : propTypes.array,
    onClickEdit : propTypes.func
}

export default withStyles(styles)(TaskList);
