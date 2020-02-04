import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import propTypes from 'prop-types';
class TaskItem extends Component {
  render() {
    let { classes, status, task, title,onClickEdit ,onClickDelete } = this.props;
    return (
      <Card key={task.id} className={classes.cart}>
        <CardContent>
          {/* grid ngoài cùng phải có container ko thì sẽ ko chạy */}
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
            onClick = {onClickEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>

          <Fab
            color="primary"
            aria-label="Delete"
            className={classes.fab}
            size="small"
            onClick = {onClickDelete}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
    classes : propTypes.object,
    status : propTypes.object,
    task : propTypes.object,
    title : propTypes.string,
    onClickEdit : propTypes.func
}

export default withStyles(styles)(TaskItem);
